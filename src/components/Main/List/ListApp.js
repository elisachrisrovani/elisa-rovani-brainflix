import './ListApp.scss';

export function ListApp(props){
    return(
     
             <ul className="video-list">
            {props.videos
            .filter((video)=> video.id !== props.activeVideo.id)
            .map((video) =>(
            <li
                key={video.id}
                className='video-list__item'
                onClick={() => props.handleChangeActiveVideo(video.id)}
                >
                <img src = {video.image} alt='video'/>
                <h3>{video.title}</h3>
                <p>{video.channel}</p>
            </li>
            ))
            }
        </ul>
    );
}
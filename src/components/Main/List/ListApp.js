import './ListApp.scss';

export function ListApp(props){
    return(
            
            
            <ul className="video-list">
            <h3 className='video-list__title'>NEXT VIDEOS</h3>
            {props.videos
            .filter((video)=> video.id !== props.activeVideo.id)
            .map((video) =>(
            <li
                key={video.id}
                className='video-list__item'
                onClick={() => props.handleChangeActiveVideo(video.id)}
                >
                <img className='video-list__img' src = {video.image} alt='video'/>
                <h3 className='video-list__name'>{video.title}</h3>
                <p className='video-list__channel'>{video.channel}</p>
            </li>
            ))
            }
        </ul>
    );
}
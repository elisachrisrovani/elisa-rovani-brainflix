import './ListApp.scss';
import {useState} from 'react';
import { Link } from 'react-router-dom';

export function ListApp(props){

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({});

    return(
            
            <ul className="video-list">
            <h3 className='video-list__title'>NEXT VIDEOS</h3>
            {videos
           .filter((video) => video.id !== selectedVideo.id)
             .map((video) => (
            <li className='video-list__item' key={video.id}>
                <Link to={`/videos/${video.id}`}>
                    <img className='video-list__img' src={video.image} alt="video"/>
                    <h3 className='video-list__name'>{video.title}</h3>
                    <p className='video-list__channel'>{video.channel}</p>
                </Link>
            </li>
            ))
            }
        </ul>
    );
}
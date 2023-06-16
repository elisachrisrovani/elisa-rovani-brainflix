import './HeroApp.scss';

import views from './../../../assets/images/views.svg';
import likes from './../../../assets/images/likes.svg';
import avatar from './../../../assets/images/Mohan-muruge.jpg';
import publish from './../../../assets/images/add_comment.svg';
import axios from 'axios';
import {useState, useEffect} from 'react';
import{useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';



export function HeroApp(props){

 const [videos, setVideos] = useState([]);
const [selectedVideo, setSelectedVideo] = useState({});

const params = useParams();

useEffect(() =>{
    axios
    .get('https://project-2-api.herokuapp.com/videos?api_key=simba')
    .then((response) =>{
        console.log(response);
        setVideos(response.data);
    })
    .catch((err) => console.log(err));
}, []);

useEffect(() =>{
    console.log(params.id);

    if (params.id){
        axios
        .get(`https://project-2-api.herokuapp.com/videos/${params.id}?api_key=simba`)
        .then((response) =>{
            console.log(response);
            setSelectedVideo(response.data);
        })
        .catch((err) => console.log(err));
    }else{
        axios
        .get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=simba`)
        .then((response) =>{
            console.log(response);
            setSelectedVideo(response.data);
        })
        .catch((err) => console.log(err));
    }

}, [params.id]);
    
return(

    //Video being played section
   
   
    
    <div className='main-video'>

        <div className="main-video__poster">
        <video controls  poster ={selectedVideo.image}
     />
        </div>

     

       <h1 className='main-video__title'>{selectedVideo.title}</h1>
       <hr/>
        <div>
        

       <div className='main-video__container'>
       <div className='main-video__container__block'>
       <h3 className='main-video__container__block__channel-name'>By {selectedVideo.channel}</h3>
       <p className='main-video__container__block__date'>{new Date(selectedVideo.timestamp).toLocaleDateString()}</p>
       </div>

       <div className='main-video__container__inline'>
       <img className='main-video__container__inline__views-img' src={views} alt='views'/>
       <img className='main-video__container__inline__likes-img' src={likes} alt='likes'/>
       </div>

       <div className='main-video__container__inline'>
      
       <p className='main-video__container__inline__text'>{selectedVideo.views}</p>
       <p className='main-video__container__inline__text'>{selectedVideo.likes}</p> 

       </div>
     
       </div>
       <hr/>

       <div className='main-video__container__description'>
       <p>{selectedVideo.description}</p>
       </div>

            
        {/* Comments input section */}

       <div className='comments-container'>
            <h2>Comments</h2>
        <div className='comments-container__block'>
            <h3>JOIN THE CONVERSATION</h3>
            <img src={avatar} className='comments-container__block__avatar-picture' alt='avatar'/>
            <input type='text' placeholder='Add a new comment'/>
            <div className='comments-container__block__button'>
                <img src ={publish} alt='publish'/>
                <h4 className='comments-container__block__button__title'>COMMENT</h4>
            </div>
        </div>
        <hr/>
       

        {/* Comments section */}
        
       <ul>
      
       {selectedVideo.comments &&(
            <div>
                <h2>Comments</h2>
                <ul>
                    {selectedVideo.comments.map((message, index) => (
                        <>
                        <li className='comments-container__title' key={index}>{message.name}</li>
                        <div className='comments-container__avatar'></div>
                        <li className='comments-container__message' key={index}>{message.comment}</li>
                        <li className='comments-container__date' key={index}>{new Date(message.timestamp).toLocaleDateString()}</li>
                        </>
                    ))}
                </ul>
            </div>
        )} 
       </ul>
       </div>
    </div>

    <ul className='video-list'>
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
      </ul> *
    
    </div>
)

}
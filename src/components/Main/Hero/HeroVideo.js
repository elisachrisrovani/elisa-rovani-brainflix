import './HeroVideo.scss';
import views from './../../../assets/images/views.svg';
import likes from './../../../assets/images/likes.svg';
import avatar from './../../../assets/images/Mohan-muruge.jpg';
import publish from './../../../assets/images/add_comment.svg';
import {useState} from 'react';



export function HeroVideo(props){
     const [selectedVideo, setSelectedVideo] = useState({});
   
return(

    //Video being played section


    <div className='main-video'>
     <div className='main-video__poster'>
    <div>       
     <video controls  poster ={selectedVideo.image}
     />
     </div>
    </div>

    
    </div>
)
}
import './HeroApp.scss';
import views from './../../../assets/images/views.svg';
import likes from './../../../assets/images/likes.svg';
import avatar from './../../../assets/images/Mohan-muruge.jpg';
import publish from './../../../assets/images/add_comment.svg';

export function HeroApp(props){

    const postedDate = new Date (props.activeVideo.timestamp).toLocaleDateString('en-US').split(',')[0];
  //  const date = new Date (props.activeVideo.comments.timestamp).toLocaleTimeString('en-US');
    
return(

    //Video being played section


    <div className='main-video'>
    <div>       
     <video controls  poster={props.activeVideo.image}
     />
       <h1 className='main-video__title'>{props.activeVideo.title}</h1>
       <hr/>
        <div>

       <div className='main-video__container'>
       <div className='main-video__container__block'>
       <h3 className='main-video__container__block__channel-name'>By {props.activeVideo.channel}</h3>
       <p className='main-video__container__block__date'>{postedDate}</p>
       </div>

       <div className='main-video__container__inline'>
       <img className='main-video__container__inline__views-img' src={views} alt='views'/>
       <img className='main-video__container__inline__likes-img' src={likes} alt='likes'/>
       </div>

       <div className='main-video__container__inline'>
      
       <p className='main-video__container__inline__text'>{props.activeVideo.views}</p>
       <p className='main-video__container__inline__text'>{props.activeVideo.likes}</p> 

       </div>
     
       </div>
       <hr/>

       <div className='main-video__container__description'>
       <p>{props.activeVideo.description}</p>
       </div>

       

        {/* Comments input section */}

       <div className='comments-container'>
            <h2>3 Comments</h2>
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
      
        {props.activeVideo.comments.map((message,index)=>(
            <>
            <li key={index} className='comments-container__title'>{message.name}</li>
            <div className='comments-container__avatar'></div>
            { <li key={index} className='comments-container__message'>{message.comment}</li> }
            {/* <div className='comments-container__avatar'></div> */}
            { <li key={index} className='comments-container__date'>{message.timestamp}</li>}
            {/* <div className='comments-container__avatar'></div> */}
            <hr/>
            </>   

        ))}
       
       </ul>
       </div>
    </div>
    </div>
    </div>
)
}
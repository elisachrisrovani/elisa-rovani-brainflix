import './HeroApp.scss';
import views from './../../../assets/images/views.svg';
import likes from './../../../assets/images/likes.svg';

export function HeroApp(props){

    const postedDate = new Date (props.activeVideo.timestamp).toLocaleDateString('en-US').split(',')[0];
    
return(
    <div className='main-video'>

    <div>       
     <video controls  poster={props.activeVideo.image}
     />
       <h1>{props.activeVideo.title}</h1>
       <hr/>
        <div>

       <h3>By{props.activeVideo.channel}</h3>
       <p>{postedDate}
       </p>
       <div>
       <img src={views} alt='views'/>
       <p>{props.activeVideo.views}</p>
       </div>
       <div>
       <img src={likes} alt='likes'/>
       <p>{props.activeVideo.likes}</p>
       </div>
       <br/>
       <article>
        <p>{props.activeVideo.description}</p>
       </article>
       </div>
    </div>

    </div>
)
}
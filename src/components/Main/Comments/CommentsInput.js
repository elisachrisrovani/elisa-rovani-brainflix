import avatar from './../../../assets/images/Mohan-muruge.jpg';
import publish from './../../../assets/images/publish.svg';


export function CommentsInput(props){

 // const postedDate = new Date (props.messages[0].timestamp).toLocaleDateString('en-US').split(',')[0];

    return(
        <div className='comments-container'>
            <h2>3 Comments</h2>
        <div className='comments-container__block'>
            <h3>JOIN CONVERSATION</h3>
            <img src={avatar} className='comments-container__block__avatar-picture' alt='avatar'/>
            <input type='text' placeholder='Add a new comment'/>
            <div className='comments-container__block__buton'>
                <img src ={publish} alt='publish'/>
                <h3>COMMENT</h3>
            </div>
        </div>
        <hr/>
        <div className='comments-container__avatar'></div>
        
        {/* <h3 className='comments-container__title'>{props.messages.comments.name}</h3> */}
        {/* <p className='comments-container__date'>{postedDate}</p> */}
        <hr/>
        </div>
    )
}
import messages from './../../../data/video-details.json';

export function CommentsApp(props){

    const datePosted = new Date (props.activeVideo.video.timestamp).toLocaleTimeString('en-US').split(',')[0];

   return(
    <div>
    {messages.filter((video)=> video !== props.activeVideo)
   .map((video, index) =>{
        return(
            <div key={index}>
                {/* <h3>{video.channel}</h3> */}

                {video.comments.map((comment, index) =>{
                    return(
                        <div key ={index}>
                            <h2>{comment.name}</h2>
                            <p>{comment.comment}</p>
                            <p>{comment.timestamp.toLocaleTimeString('en-US').split(',')[0]}</p>
                        </div>
                    )
                })}
            </div>
        )
    })}
</div>
   )
}
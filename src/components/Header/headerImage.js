import './headerImage.scss';

export function Image(props){
    return(
        <div>
        <img className='avatar' src={props.src} alt={""}/>
        </div>
    )
}
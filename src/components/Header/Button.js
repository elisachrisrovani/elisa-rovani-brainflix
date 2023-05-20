import Upload from '../../assets/images/upload.svg';
import './Button.scss';

export function Button(){
    return(
        <div class='button-container'>
            <img src={Upload} alt='upload'/>
            <h2>UPLOAD</h2>
        </div>
    )
}
import Upload from '../../assets/images/upload.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';

import './Button.scss';

export function Button(){
    return(
        <div class='button-container'>
            <div className='button-container__area'>
            <img src={Upload} alt='upload'/>
            <h2>UPLOAD</h2>
            </div>
       
        </div>
    )
}
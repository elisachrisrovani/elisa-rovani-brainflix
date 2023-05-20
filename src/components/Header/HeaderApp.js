import logo from '../../assets/images/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import {Logo} from './LogoApp';
import {Image} from './headerImage';
import Search from '../../assets/images/search.svg';
import Upload from '../../assets/images/upload.svg';
import './HeaderApp.scss';



export function Header(){
    return(
        <header>
            <div className='container' >
            <Logo src={logo} alt="logo"/>
            <input type='text' placeholder='Search'></input>
            <Image src={avatar} alt="avatar"/>
            <img className='container__search-icon' src={Search} alt="search"/>
            <button className='container__button'>UPLOAD</button>
            <img className='container__upload-icon' src={Upload} alt="upload"/>
    

            </div>
        </header>
    )
}
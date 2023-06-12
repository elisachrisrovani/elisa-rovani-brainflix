import logo from '../../assets/images/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import {Logo} from './../../components/Header/LogoApp';
import {Image} from './../../components/Header/headerImage';
import { Search } from './../../components/Header/Search';
import {Button} from './../../components/Header/Button';
import uploadVideo from './../../assets/images/Upload-video-preview.jpg';
import Publish from './../../assets/images/publish.svg';
import './page.scss';

export function Page(){

    return(
        <>
        <header>
             <div className='container'>
                <Logo src={logo} alt="logo" />
                <div className='container__block'>
                    <Search />
                    <Image src={avatar} alt="avatar" />
                </div>
                <Button />
            </div> 
        </header>

        <main>
           
        <div className='main-container'>
        <hr/>
        <h1>Upload Video</h1>
        <h2>VIDEO THUMBNAIL</h2>
        <img src={uploadVideo} alt={uploadVideo}/>
        <h2>TITLE YOUR VIDEO</h2>
        <input className='main-container__input--title' type='text' placeholder='Add a title to your video'/>
        <h2>ADD A VIDEO DESCRIPTION</h2>
        <input className='main-container__input--description' type='text' placeholder='Add a description to your video'/>

        <div className='main-container__button'>
        <img src={Publish} alt='upload'/>
            <h3>PUBLISH</h3>
        </div>
        
        <p>CANCEL</p>
        </div>
        </main></>

    )

    
}
import logo from '../../assets/images/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import {Logo} from './../../components/Header/LogoApp';
import {Image} from './../../components/Header/headerImage';
import { Search } from './../../components/Header/Search';
import {Button} from './../../components/Header/Button';
import uploadVideo from './../../assets/images/Upload-video-preview.jpg';
import Publish from './../../assets/images/publish.svg';
import { Link } from 'react-router-dom';
import './page.scss';

export function Page(){

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const {title, description} = form;

        if(!title.value || !description.value){
            return alert('please fill all form fields');
        }
        alert("Your video has been published");
    };

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
        <hr className='main-container__hr--hidden'/>
        <h2>VIDEO THUMBNAIL</h2>
        <img src={uploadVideo} alt={uploadVideo}/>
        <form onSubmit={handleSubmit}>            
        <label className='main-container__label__title'>TITLE YOUR VIDEO</label>
        <input className='main-container__input--title' type='text' placeholder='Add a title to your video' onChange={(event) =>{
            if(event.target.value.length < 3){
                console.log('Title is not long enough');
            }else{
                console.log('Title is valid')
            }
        }}/>
        <label className='main-container__label__description'>ADD A VIDEO DESCRIPTION</label>
        <input className='main-container__input--description' type='text' placeholder='Add a description to your video' onChange={(event) =>{
            if(event.target.value.length < 5){
                console.log('Description is not long enough');
            }  else{
                console.log('Description is valid')
            }
        }}/>

        <hr className='main-container__line--hidden'/>

       <Link to ='/'>
       <button className='main-container__button' onClick={(event) =>{
            alert("Your video has been uploaded")
       }}>
        <img src={Publish} alt='upload'/>
            <h3>PUBLISH</h3>
        </button>
       </Link>
        
        <p>CANCEL</p>
        </form>
        </div>
        
        </main></>
       

    )

    
}
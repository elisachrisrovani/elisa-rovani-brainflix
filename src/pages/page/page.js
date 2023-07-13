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
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Page(){

   

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [form, setForm] = useState({
        title: '',
        description:''
    })

    var bodyFormData = new FormData();
    bodyFormData.append("title", title);
    bodyFormData.append("description",description);

    axios({
        method:"post",
        url: "http://localhost:5050/videos",
        data:{bodyFormData},

    })
    .then(function(response){
        console.log(response);
    })
    .catch(function(response){
        console.log(response);
    });

    const handleChange = (event) =>{
       setForm(event.target.value)        
    };

    const onSubmit = (data) => console.log("get", JSON.stringify(data));

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

        <form onSubmit={handleChange}>            
        <label className='main-container__label__title' >TITLE YOUR VIDEO</label>
        <input className='main-container__input--title' type='text' placeholder='Add a title to your video' onChange={(event) =>{
        setTitle(event.target.value)}}/>
        <label className='main-container__label__description'>ADD A VIDEO DESCRIPTION</label>
        <input className='main-container__input--description' type='text' placeholder='Add a description to your video' 
        onChange={(event) =>{
        setDescription(event.target.value)}}/>

        <hr className='main-container__line--hidden'/>

       <Link to ='/'>
       <button className='main-container__button' onClick={(event) =>{
            alert("Your video has been published")
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
import Upload from '../../assets/images/upload.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Page} from './../../pages/page/page';


import './Button.scss';

export function Button(){
    return(
      <main>
        
        <div class='button-container'>
        <Link to = "/upload">
        <button>UPLOAD
          <img src={Upload} alt="upload"/>
        </button>
        </Link>           
          </div>
        
      
      </main>
     
    )
}
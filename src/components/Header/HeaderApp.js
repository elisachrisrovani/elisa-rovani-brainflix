import logo from '../../assets/images/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import {Logo} from './LogoApp';
import {Image} from './headerImage';
import { Search } from './Search';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './HeaderApp.scss';
import { Button } from './Button';
import { Page } from '../../pages/page/page';


export function Header(){
    return(
        <header>
            <div className='container' >
            <Logo src={logo} alt="logo"/>
            <div className='container__block'>
            <Search />        
            <Image src={avatar} alt="avatar"/>
            </div>
            <Button/>      
         
            </div>
           
        </header>
    )
}
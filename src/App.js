import { useState } from 'react';
import './App.scss';
import { Header } from './components/Header/HeaderApp';
import videosData from './data/video-details.json';
import { HeroApp } from './components/Main/Hero/HeroApp';
import { ListApp } from './components/Main/List/ListApp';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HeroVideo } from './components/Main/Hero/HeroVideo';
import {Page} from './pages/page/page';
import { Button } from './components/Header/Button';
import { HomePage, homePage } from './pages/page/home';

function App() {

    

  return (
    
     
           <BrowserRouter>
            <Routes>
            <Route path="/upload" element = {<Page/>}/>
            <Route path="/" element = {<HomePage/>}/>
            </Routes>
            </BrowserRouter>  

  )}

export default App;

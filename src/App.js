import './App.scss';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Page} from './pages/page/page';
import { HomePage} from './pages/page/home';

function App() {

    

  return (
    
     
           <BrowserRouter>
            <Routes>
            <Route path="/upload" element = {<Page/>}/>
            <Route path="/" element = {<HomePage/>}/>
            <Route path="/videos" element = {<HomePage/>}/>
            <Route path="/videos/:id" element = {<HomePage/>}/>
            
            </Routes>
            </BrowserRouter>  

  )}

export default App;

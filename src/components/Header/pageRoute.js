import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "./Button";
import { Page } from "../../pages/page/page";

function pageRoute(){


    return(
       
     <>
     <ul>
       <li> <Link to="/upload">Button</Link></li>
       </ul>
      <Routes>
        <Route path="/upload" element = {<Page/>}/>
      </Routes>

      </>
    )
}
import { Link } from 'react-router-dom';
import './LogoApp.scss';
import { HomePage } from '../../pages/page/home';


export function Logo(props){
    return(

<Link to="/"> <img className='logo' src={props.src} alt={""}/></Link>

       
    )
}
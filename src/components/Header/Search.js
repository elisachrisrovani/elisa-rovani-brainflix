import icon from '../../assets/images/search.svg';
import './Search.scss';

export function Search(){
    return(
        <form>
            <img src={icon} alt='icon' />
            <input placeholder='Search'/>
        </form>
    )
}
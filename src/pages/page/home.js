import './home.scss';
import { Header } from './../../components/Header/HeaderApp'
import { HeroApp } from './../../components/Main/Hero/HeroApp';
export function HomePage() {

   
  return (
     <div className="App-container">

     <Header />
     
<main>
  
<div className='flex-wrapper'>

<HeroApp />


</div>


</main>
</div>
  )
  }
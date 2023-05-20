import { useState } from 'react';
import './App.scss';
import { Header } from './components/Header/HeaderApp';
import videosData from './data/video-details.json';
import { HeroApp } from './components/Main/Hero/HeroApp';
import { ListApp } from './components/Main/List/ListApp';

function App() {

  const [videos] = useState(videosData);
  const [activeVideo, setActiveVideo] = useState(videosData[0]);

  const handleChangeActiveVideo = (id) =>{
    const foundVideo = videos.find((video) => video.id === id);
    setActiveVideo(foundVideo);
  };

  return (
    <div className="App-container">

      <Header />

     <main>
     
        <HeroApp activeVideo={activeVideo}/>

        <ListApp
        handleChangeActiveVideo={handleChangeActiveVideo}
        videos={videos}
        activeVideo={activeVideo}
        />
        
      

     </main>
    </div>
  );
}

export default App;

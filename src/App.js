import { useState } from 'react';
import './App.scss';
import { Header } from './components/Header/HeaderApp';
import videosData from './data/video-details.json';
import { HeroApp } from './components/Main/Hero/HeroApp';
import { ListApp } from './components/Main/List/ListApp';
import { CommentsInput } from './components/Main/Comments/CommentsInput';
import { CommentsApp } from './components/Main/Comments/CommentApp';

function App() {

  const [videos] = useState(videosData);
  const [activeVideo, setActiveVideo] = useState(videosData[0]);
  const [messages] = useState(videosData);

  const handleChangeActiveVideo = (id) =>{
    const foundVideo = videos.find((video) => video.id === id);
    setActiveVideo(foundVideo);
  };

  return (
    <div className="App-container">

      <Header />

     <main>
     
        <HeroApp activeVideo={activeVideo}/>
        
        {/* <CommentsInput 
               /> */}
        {/* <CommentsApp
         messages={messages}
        /> */}

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

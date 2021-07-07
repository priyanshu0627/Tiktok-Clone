import Axios from './axios';
import './App.css';
import Video from './Videos.js';
import { useEffect, useState } from 'react';
function App() {

  const [videos,setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await Axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }
    fetchPosts();
  }, []);
  
  return (
    <div className="app">
      <div className="app__videos">
        {
          videos.map( ({url, channel, description, song}) => {
           return  <Video 
             url={url}
             channel={channel}
             description={description}
             song={song}
            />
          } )
        }
        <Video url="../videos/172932430_172981408005090_3355923729630752591_n.mp4" channel="Doggo" description="Dancing in the Rain" song="Dancing in the Rain"/>
        <Video url="../videos/180311450_306362374226836_5539212152317302122_n.mp4" channel="Doggo" description="Dancing in the Rain" song="Dancing in the Rain"/>
        <Video url="../videos/190829243_281177307051785_4305259714707889644_n.mp4" channel="Doggo" description="Dancing in the Rain" song="Dancing in the Rain"/>
        <Video url="../videos/messi.mp4" channel="Doggo" description="Dancing in the Rain" song="Dancing in the Rain"/>
      </div>
      {/*app container*/}
      {/* videos */}
      {/* <videos /> */}
      {/* <videos /> */}
      {/* <videos /> */}
      {/* <videos /> */}
      {/* <videos /> */}


    </div>
  );
}

export default App;

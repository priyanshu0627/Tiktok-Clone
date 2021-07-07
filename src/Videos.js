import React, { useRef, useState } from 'react';
import "./Videos.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from "./VideoSidebar";

function Video({url,channel,description,song}) {
    const [playing , setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleClick = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }    
    }
    return (
        <div className="video">
            <video 
                className="video__player"
                onClick={handleClick}
                loop
                ref={videoRef} 
                src={url}>
            </video>

            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar />
            {/* VideoFooter */}
            {/* VideoSidebar */}
            
        </div>
    )
};
export default Video;

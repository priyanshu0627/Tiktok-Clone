import React, { useState } from 'react';
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function VideoSidebar() {
    const stats1 = Math.floor(Math.random()*10000);
    const stats2 = Math.floor(Math.random()*10000);
    const stats3 = Math.floor(Math.random()*10000);

    const [liked,setLiked] = useState(false);
    const [stats,setStats] = useState(stats1);
    const [comments] = useState(stats2);
    const [shares] = useState(stats3);
    
    const handleClick = (e) => {
        if (liked) {
            setLiked(false);
            setStats(stats-1);
        } else {
            setLiked(true);
            setStats(stats+1);
        }
    }

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                <IconButton color="inherit">
                    <FavoriteIcon  />
                </IconButton> ) : (
                    <IconButton color="inherit">
                        <FavoriteBorderIcon onClick={handleClick}/>
                    </IconButton>
                )  
                }
                <p>{stats}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon />
                <p>{comments}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar;

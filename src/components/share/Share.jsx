import './share.styles.css';
import {VideoCameraFront,Collections,Mood} from '@mui/icons-material';

export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                    <input placeholder="What's in your mind Gia Binh?" type="text" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <VideoCameraFront className='shareIcon' htmlColor='#e42645'/>
                            <span className="shareOptionText">Live video</span>
                        </div>
                        <div className="shareOption">
                            <Collections className='shareIcon' htmlColor='#41b35d'/>
                            <span className="shareOptionText">Photo/video</span>
                        </div>
                        <div className="shareOption">
                            <Mood className='shareIcon' htmlColor='#eab026'/>
                            <span className="shareOptionText">Feeling/activity</span>
                        </div>
                    </div>
                    {/* <button className="shareButton">Share</button> */}
                </div>
            </div>
        </div>
    )
}

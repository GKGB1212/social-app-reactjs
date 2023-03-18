import "./post.styles.css";
import { MoreHoriz, Close, ChatBubbleOutline ,ThumbUp, Share} from '@mui/icons-material';
import Comment from "../comment/Comment";

export default function Post({userAvatar,imgSrc, userName, time, likeCounter, commentCounter, title}) {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postUserImg" src={userAvatar} alt="" />
                        <span className="postUsername">{userName}</span>
                        <span className="postDate">{time}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreHoriz className="postMoreButton" />
                        <Close className="postMoreButton" />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{title}</span>
                    <img src={imgSrc} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postReact">
                        <div className="postReactLeft">
                            <img src="./assets/like.png" alt="" className="likeIcon" />
                            <img src="./assets/heart.png" alt="" className="likeIcon" />
                            <span className="postLikeCounter">You and {likeCounter} others</span>
                        </div>
                        <div className="postReactRight">
                            <span className="postCommentCounter">{commentCounter} comments</span>
                        </div>
                    </div>
                    <hr className="postReactHr" />
                    <div className="postOptions">
                        <div className="postOption">
                            <ThumbUp className='postOptionIcon postOptionIconActive'/>
                            <span className="postOptionText postOptionTextActive">Like</span>
                        </div>
                        <div className="postOption">
                            <ChatBubbleOutline className='postOptionIcon'/>
                            <span className="postOptionText">Comment</span>
                        </div>
                        <div className="postOption">
                            <Share className='postOptionIcon' />
                            <span className="postOptionText">Share</span>
                        </div>
                    </div>
                    <hr className="postReactHr" />
                    <div className="postComment">
                    <Comment avt="./assets/person/BP.jpeg" userName="BLACKPINK" content="I don't want a boy i need a man 🤔"/>
                    <Comment avt="./assets/person/NJ.jpeg" userName="Newjean" content="You got me looking for attention!!!"/>
                    <Comment avt="./assets/person/Twice.jpeg" userName="Twice" content="You make me feel special 😘"/>
                    </div>
                    <p className="postSeeMoreComment">View more comments</p>
                </div>
            </div>
        </div>
    )
}

import "./comment.css"

export default function Comment({avt,userName,content}) {
  return (
    <div className="comment">
        <div className="commentWrapper">
            <img className="commentImg" src={avt} alt="avt" />
            <div className="commentContentWrapper">
                <p className="commentUserName">{userName}</p>
                <span className="commentContent">{content}</span>
            </div>
        </div>
    </div>
  )
}

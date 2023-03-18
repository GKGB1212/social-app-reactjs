import "./story.styles.css";

export default function Story() {
  return (
    <div className="story">
      <div className="storyWrapper">
        <div className="storyLeft"></div>
        <div className="storyCenter">
        <div className="storyItem" style={{backgroundImage:'url("./assets/post/1.jpeg")'}}>
            <div className="storyUser"></div>
            <span className="storyUserName">You</span>
          </div>
          <div className="storyItem" style={{backgroundImage:'url("./assets/post/1.jpeg")'}}>
            <div className="storyUser"></div>
            <span className="storyUserName">You</span>
          </div>
          <div className="storyItem" style={{backgroundImage:'url("./assets/post/1.jpeg")'}}>
            <div className="storyUser"></div>
            <span className="storyUserName">You</span>
          </div>
          <div className="storyItem" style={{backgroundImage:'url("./assets/post/1.jpeg")'}}>
            <div className="storyUser"></div>
            <span className="storyUserName">You</span>
          </div>
        </div>
        <div className="storyRight"></div>
      </div>
    </div>
  )
}

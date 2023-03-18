import Post from "../post/Post"
import Share from "../share/Share"
import Story from "../story/Story"
import "./feed.styles.css"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Story/>
        <Post userAvatar="./assets/person/1.jpeg" imgSrc="./assets/person/1.jpeg" userName="Gia Binh" time="5 min ago" title="Hello! I'm developer 🤭🤭" likeCounter="11" commentCounter="5"/>
        <Post userAvatar="./assets/person/7.jpeg" imgSrc="./assets/post/1.jpeg" userName="Binh's lover" time="30 min ago" title="HomeSick 😔😔" likeCounter="11" commentCounter="5"/>
        <Post userAvatar="./assets/person/1.jpeg" imgSrc="./assets/post/2.jpeg" userName="Gia Binh" time="5 min ago" title="Hello! I'm developer 🤭🤭" likeCounter="11" commentCounter="5"/>
        <Post userAvatar="./assets/person/1.jpeg" imgSrc="./assets/post/3.jpeg" userName="Gia Binh" time="5 min ago" title="Hello! I'm developer 🤭🤭" likeCounter="11" commentCounter="5"/>
        <Post userAvatar="./assets/person/1.jpeg" imgSrc="./assets/post/4.jpeg" userName="Gia Binh" time="5 min ago" title="Hello! I'm developer 🤭🤭" likeCounter="11" commentCounter="5"/>
      </div>
    </div>
  )
}

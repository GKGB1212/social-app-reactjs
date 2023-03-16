import "./sidebar.styles.css";
import { RssFeed, People, Chat, PlayCircle, Group, Bookmark, QuestionAnswer, Work, Event, School } from '@mui/icons-material';
export default function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapped">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeed className="sideBarIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <People className="sideBarIcon" />
            <span className="sideBarListItemText">Friends</span>
          </li>
          <li className="sideBarListItem">
            <Chat className="sideBarIcon" />
            <span className="sideBarListItemText">Chat</span>
          </li>
          <li className="sideBarListItem">
            <PlayCircle className="sideBarIcon" />
            <span className="sideBarListItemText">Videos</span>
          </li>
          <li className="sideBarListItem">
            <Group className="sideBarIcon" />
            <span className="sideBarListItemText">Groups</span>
          </li>
          <li className="sideBarListItem">
            <Bookmark className="sideBarIcon" />
            <span className="sideBarListItemText">Bookmarks</span>
          </li>
          <li className="sideBarListItem">
            <QuestionAnswer className="sideBarIcon" />
            <span className="sideBarListItemText">Questions</span>
          </li>
          <li className="sideBarListItem">
            <Work className="sideBarIcon" />
            <span className="sideBarListItemText">Jobs</span>
          </li>
          <li className="sideBarListItem">
            <Event className="sideBarIcon" />
            <span className="sideBarListItemText">Events</span>
          </li>
          <li className="sideBarListItem">
            <School className="sideBarIcon" />
            <span className="sideBarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sideBarButton">Show more</button>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/3.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/4.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/5.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/7.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/8.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/9.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/10.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

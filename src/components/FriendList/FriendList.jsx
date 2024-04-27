import css from "./FriendList.module.css"
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={css.container}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
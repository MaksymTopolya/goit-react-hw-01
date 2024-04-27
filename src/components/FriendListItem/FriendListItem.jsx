import css from "./FriendListItem.module.css"
export default function FriendListItem({ friend }) {
    return (
        <div className={css.container}>
  <img src={friend.avatar} alt="Avatar" width="48" />
  <p>{friend.name}</p>
  <p className={friend.isOnline ? css.active : css.offline}>
  {friend.isOnline ? "Online" : "Offline"}
</p>
</div>
    )
}
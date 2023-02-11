import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem.js';

export default function FriendList({ friends }) {
    return (
      <ul className={css.friend_list}>
        {friends.map(friend => (
          <li key={friend.id} className={css.item}>
            <FriendListItem
              avatar={friend.avatar}
              isOnline={friend.isOnline}
              name={friend.name}
            />
          </li>
        ))}
      </ul>
    );
  }
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number.isRequired })
    ).isRequired,
  };
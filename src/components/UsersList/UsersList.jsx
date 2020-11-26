import React from 'react';
import { connect } from 'react-redux';
import './UsersList.scss';
import UserListItem from '../UserListItem/UserListItem';

import getUsers from '../../selectors/getUsers';

function mapStateToProps(state) {
  return {
    users: getUsers(state),
  };
}

function UsersList({ users, onDoubleClick }) {
  return (
    <div className="users-list">
      <div className="title-block">
        <span className="title-block__item">Name:</span>
        <span className="title-block__item">Email:</span>
        <span className="title-block__item">Rights:</span>
        <span className="title-block__item">Status:</span>
      </div>

      <div className="users custom-scroll">
        {users.map((user) => {
          return (
            <UserListItem
              key={user.id}
              name={user.name}
              email={user.email}
              rights={user.rights}
              status={user.status}
              id={user.id}
              onDoubleClick={() => {
                onDoubleClick();
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, null)(UsersList);

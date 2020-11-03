import React from 'react';
import { connect } from 'react-redux';
import './UsersList.scss';
import User from '../User/User';
import getUsers from '../../actions/getUsers';

function mapStateToProps(state) {
  return {
    users: state.usersTable.users,
  };
}

const mapDispatchToProps = {
  getUsers,
};

function UsersList({ users }) {
  return (
    <div className="users-list">
      <div className="title-block">
        <span className="title-block__item">Name:</span>
        <span className="title-block__item">Email:</span>
        <span className="title-block__item">Rights:</span>
        <span className="title-block__item">Status:</span>
      </div>

      <div className="users">
        {users.map((user) => {
          return <User key={user.id} name={user.name} email={user.email} rights={user.rights} status={user.status} />;
        })}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

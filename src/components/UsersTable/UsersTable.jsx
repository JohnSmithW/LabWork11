import React from 'react';
// import { connect } from 'react-redux';
import './UsersTable.scss';
import Header from '../Header/Header';
import UsersList from '../UsersList/UsersList';

export default function UsersTable() {
  return (
    <div className="usersTable">
      <Header />
      <UsersList />
    </div>
  );
}

// export default connect()(UsersTable);

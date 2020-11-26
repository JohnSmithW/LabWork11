import React from 'react';
import { connect } from 'react-redux';
import './UserListItem.scss';
import getUser from '../../actions/getUser';

function User({ id, name, email, rights, status, onDoubleClick, dispatch }) {
  return (
    <div
      onDoubleClick={() => {
        onDoubleClick();
        dispatch(getUser(id));
      }}
      className="user">
      <span className="user__item">{name}</span>
      <span className="user__item">{email}</span>
      <span className="user__item">{rights}</span>
      <span className="user__item">{status}</span>
    </div>
  );
}

export default connect(null, null)(User);

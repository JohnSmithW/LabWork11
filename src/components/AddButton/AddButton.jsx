import React from 'react';
import './AddButton.scss';
import { removeUser } from '../../actions/user';
import { connect } from 'react-redux';

function AddButton({ onClick, remove, dispatch, users }) {
  return (
    <div
      onClick={() => {
        onClick();
        remove && users.length > 0 && dispatch(removeUser);
      }}
      className="add-button">
      <span className="add-button__text">{remove && users.length > 0 ? 'Remove user' : 'Add user'}</span>
    </div>
  );
}

export default connect(null, null)(AddButton);

import React from 'react';
import { connect } from 'react-redux';
import addUser from '../../actions/addUser';
import editUser from '../../actions/editUser';

function AppendUserButton({ name, email, rights, status, onClick, dispatch, edit, id }) {
  return (
    <button
      type="submit"
      onClick={(event) => {
        event.preventDefault();
        if (name !== '' && email !== '' && !edit) {
          dispatch(addUser({ name: name, email: email, rights: rights, status: status }));
          onClick();
        } else if (edit) {
          dispatch(editUser(id, { name: name, email: email, rights: rights, status: status }));
          onClick();
        }
      }}
      className="add-button add-button_modal">
      <span className="add-button__text">Add user</span>
    </button>
  );
}

export default connect(null, null)(AppendUserButton);

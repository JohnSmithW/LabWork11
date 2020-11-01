import React from 'react';
import { connect } from 'react-redux';
import './AddButton.scss';
import toggleModalWindow from '../../actions/toggleModalWindow';

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(toggleModalWindow),
  };
}

function AddButton({ onClick }) {
  return (
    <div onClick={onClick} className="add-button">
      <span className="add-button__text">Add user</span>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(AddButton);

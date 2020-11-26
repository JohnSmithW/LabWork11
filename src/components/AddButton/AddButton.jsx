import React from 'react';
import './AddButton.scss';

export default function AddButton({ onClick }) {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className="add-button">
      <span className="add-button__text">Add user</span>
    </div>
  );
}

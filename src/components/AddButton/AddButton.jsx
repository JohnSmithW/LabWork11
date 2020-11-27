import React from 'react';
import './AddButton.scss';

export default function AddButton({ onClick, remove }) {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className="add-button">
      <span className="add-button__text">{remove ? 'Remove user' : 'Add user'}</span>
    </div>
  );
}

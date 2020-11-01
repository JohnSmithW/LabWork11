import React from 'react';
import './UsersList.scss';
import User from '../User/User';

export default function UsersList() {
  return (
    <div className="users-list">
      <div className="title-block">
        <span className="title-block__item">Name:</span>
        <span className="title-block__item">Email:</span>
        <span className="title-block__item">Rights:</span>
        <span className="title-block__item">Status:</span>
      </div>

      <div className="users">
        <User name="John" email="john@gamil.com" rights="admin" status="active" />
      </div>
    </div>
  );
}

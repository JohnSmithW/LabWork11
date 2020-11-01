import React from 'react';
import './User.scss';

export default function User({ name, email, rights, status }) {
  return (
    <div className="user">
      <span className="user__item">{name}</span>
      <span className="user__item">{email}</span>
      <span className="user__item">{rights}</span>
      <span className="user__item">{status}</span>
    </div>
  );
}

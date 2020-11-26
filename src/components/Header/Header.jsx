import React from 'react';
import './Header.scss';

export default function Header({ content }) {
  return (
    <div className="header">
      <span className="header__title">Users</span>
      {content}
    </div>
  );
}

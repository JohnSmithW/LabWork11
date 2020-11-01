import React from 'react';
import './Header.scss';
import AddButton from '../AddButton/AddButton';

export default function Header() {
  return (
    <div className="header">
      <span className="header__title">Users</span>
      <AddButton />
    </div>
  );
}

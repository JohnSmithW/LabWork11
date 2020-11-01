import React from 'react';
import './scss/main.scss';
import UsersTable from './components/UsersTable/UsersTable';
import ModalWindow from './components/ModalWindow/ModalWindow';

export default function App() {
  return (
    <div className="main">
      <ModalWindow />
      <UsersTable />
    </div>
  );
}

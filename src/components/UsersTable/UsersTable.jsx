import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
import './UsersTable.scss';
import Header from '../Header/Header';
import UsersList from '../UsersList/UsersList';
import ModalWindow from '../ModalWindow/ModalWindow';
import AddButton from '../AddButton/AddButton';

export default function UsersTable() {
  const [isModalOpen, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    <div className="usersTable">
      <ModalWindow
        open={isModalOpen}
        add={() => {
          setModal(false);
          setEdit(false);
        }}
        close={() => {
          setModal(false);
          setEdit(false);
        }}
        edit={edit}
      />
      <Header
        content={
          <AddButton
            onClick={() => {
              setModal(true);
            }}
          />
        }
      />
      <UsersList
        onDoubleClick={() => {
          setModal(true);
          setEdit(true);
        }}
      />
    </div>
  );
}

// export default connect()(UsersTable);

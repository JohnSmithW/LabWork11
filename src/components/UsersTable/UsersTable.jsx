import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './UsersTable.scss';
import Header from '../Header/Header';
import UsersList from '../UsersList/UsersList';
import ModalWindow from '../ModalWindow/ModalWindow';
import AddButton from '../AddButton/AddButton';
import { removeUser } from '../../actions/user';
import store from '../../store';

function UsersTable({ dispatch }) {
  const [isModalOpen, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState({ id: null, status: false });
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
              remove.status ? dispatch(removeUser(remove.id)) : setModal(true);
            }}
            remove={remove.status}
          />
        }
      />
      <UsersList
        onClick={(id) => {
          setRemove({ id: id, status: !remove.status });
          console.log(remove);
        }}
        onDoubleClick={() => {
          setModal(true);
          setEdit(true);
        }}
      />
    </div>
  );
}

export default connect(null, null)(UsersTable);

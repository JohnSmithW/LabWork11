import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './UsersTable.scss';
import Header from '../Header/Header';
import UsersList from '../UsersList/UsersList';
import ModalWindow from '../ModalWindow/ModalWindow';
import AddButton from '../AddButton/AddButton';
import getUsers from '../../selectors/getUsers';

function mapStateToProps(state) {
  return {
    users: getUsers(state),
  };
}

function UsersTable({ users }) {
  const [isModalOpen, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState({ status: false });
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
              remove.status && users.length > 0 ? null : setModal(true);
              if (remove.status) {
                setRemove(false);
              }
            }}
            remove={remove.status}
            users={users}
          />
        }
      />
      <UsersList
        onClick={() => {
          setRemove({ status: !remove.status });
        }}
        onDoubleClick={() => {
          setModal(true);
          setEdit(true);
        }}
      />
    </div>
  );
}

export default connect(mapStateToProps, null)(UsersTable);

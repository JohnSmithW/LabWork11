import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './ModalWindow.scss';
import AppendUserButton from '../AppendUserButton/AppendUserButton';
import getUser from '../../selectors/getUser';

function mapStateToProps(state) {
  return {
    item: getUser(state),
  };
}

function ModalWindow({ open, close, add, edit, item }) {
  useEffect(() => {
    setOpen(open);
  });

  useEffect(() => {
    if (edit) {
      setName(item.name);
      setEmail(item.email);
      setRights({ ...rights, selected: item.rights });
      setStatus({ ...status, selected: item.status });
    }
  }, [item.name]);

  const [isOpen, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rights, setRights] = useState({
    isOpen: false,
    selected: 'user',
    options: [
      { id: 0, option: 'user' },
      { id: 1, option: 'admin' },
    ],
  });
  const [status, setStatus] = useState({
    isOpen: false,
    selected: 'active',
    options: [
      { id: 0, option: 'active' },
      { id: 1, option: 'inactive' },
    ],
  });

  return (
    <div
      onClick={() => {
        close();
        setName('');
        setEmail('');
        setRights({ ...rights, selected: 'user' });
        setStatus({ ...status, selected: 'active' });
      }}
      className={isOpen ? 'modal-window' : 'modal-window modal-window_closed'}>
      <form
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="modal-window-form">
        <span className="modal-window-form__title">Add user</span>
        <div className="form-container">
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
            className="form-container__input"
            type="text"
            placeholder="John Doe"
          />
        </div>

        <div className="form-container">
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
            className="form-container__input"
            type="email"
            placeholder="johndoe@gmail.com"
          />
        </div>

        <div className="dropdown">
          <span
            onClick={() => {
              setRights({ ...rights, isOpen: !rights.isOpen });
            }}
            className="dropdown__selected ">
            {rights.selected}
          </span>
          <div className={rights.isOpen ? 'dropdown-options dropdown-options_open' : 'dropdown-options'}>
            {rights.options.map((item) => {
              return (
                <span
                  onClick={() => {
                    setRights({ ...rights, selected: item.option, isOpen: false });
                  }}
                  key={item.id}
                  className="dropdown-options__item"
                  value={item.option}>
                  {item.option}
                </span>
              );
            })}
          </div>
        </div>

        <div className="dropdown">
          <span
            onClick={() => {
              setStatus({ ...status, isOpen: !status.isOpen });
            }}
            className="dropdown__selected ">
            {status.selected}
          </span>
          <div className={status.isOpen ? 'dropdown-options dropdown-options_open' : 'dropdown-options'}>
            {status.options.map((item) => {
              return (
                <span
                  onClick={() => {
                    setStatus({ ...status, selected: item.option, isOpen: false });
                  }}
                  key={item.id}
                  className="dropdown-options__item"
                  value={item.option}>
                  {item.option}
                </span>
              );
            })}
          </div>
        </div>

        <AppendUserButton
          name={name}
          email={email}
          rights={rights.selected}
          status={status.selected}
          edit={edit}
          id={item.id}
          onClick={() => {
            add();
            setName('');
            setEmail('');
            setRights({ ...rights, selected: 'user' });
            setStatus({ ...status, selected: 'active' });
          }}
        />
      </form>
    </div>
  );
}

export default connect(mapStateToProps, null)(ModalWindow);

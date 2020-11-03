import React from 'react';
import { connect } from 'react-redux';
import './ModalWindow.scss';
import closeModalWindow from '../../actions/closeModalWindow';
import getName from '../../actions/getName';

function mapStateToProps(state) {
  return {
    isOpen: state.modalWindow.isModalWindowOpen,
    name: state.modalWindow.name,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onClick: () => {
//       dispatch(closeModalWindow);
//     },
//     handleName: () => {
//       dispatch(getName);
//     },
//   };
// }

function ModalWindow({ isOpen, name, dispatch }) {
  return (
    <div
      onClick={() => {
        dispatch(closeModalWindow);
      }}
      className={isOpen ? 'modal-window' : 'modal-window modal-window_closed'}>
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="modal-window-form">
        <span className="modal-window-form__title">Add user</span>
        <div className="form-container">
          <input
            onChange={(event) => {
              dispatch(getName(event.target.value));
            }}
            value={name}
            className="form-container__input"
            type="text"
            placeholder="John Doe"
          />
        </div>

        <div className="form-container">
          <input className="form-container__input" type="email" placeholder="johndoe@gmail.com" />
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, null)(ModalWindow);

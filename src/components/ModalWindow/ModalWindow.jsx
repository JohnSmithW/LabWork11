import React from 'react';
import { connect } from 'react-redux';
import './ModalWindow.scss';

function mapStateToProps(state) {
  return {
    isOpen: state.modalWindow.isModalWindowOpen,
  };
}

function ModalWindow({ isOpen }) {
  return <div className={isOpen ? 'modal-window' : 'modal-window modal-window_closed'}></div>;
}

export default connect(mapStateToProps, null)(ModalWindow);

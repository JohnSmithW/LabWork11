import { combineReducers } from 'redux';

function modalWindow(state = { isModalWindowOpen: false }, action) {
  switch (action.type) {
    case 'open':
      return { isModalWindowOpen: action.isModalWindowOpen };
    default:
      return state;
  }
}

const app = combineReducers({
  modalWindow,
});

export default app;

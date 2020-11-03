import { combineReducers } from 'redux';
import modalWindow from './modalWindow';
import usersTable from './usersTable';

const app = combineReducers({
  modalWindow,
  usersTable,
});

export default app;

import { combineReducers } from 'redux';
import addUserModal from './addUserModal';
import usersTable from './usersTable';

const app = combineReducers({
  addUserModal,
  usersTable,
});

export default app;

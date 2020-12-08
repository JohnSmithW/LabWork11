import { combineReducers } from 'redux';
import usersTable from './usersTable';

const app = combineReducers({
  usersTable,
});

export default app;

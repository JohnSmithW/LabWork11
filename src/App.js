import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './scss/main.scss';
import UsersTable from './components/UsersTable/UsersTable';

export default function App() {
  return (
     <Provider store={store}>
    <div className="main">
      <UsersTable />
    </div>
 </Provider>
  );
}

export default function usersTable(
  state = {
    users: [],
    selectedUser: { id: 0, name: '1', email: '1', rights: 'user', status: 'active' },
  },
  action
) {
  switch (action.type) {
    case 'ADD_USER':
      const newState = state.users;
      newState.push({
        id: state.users.length + 1,
        name: action.user.name,
        email: action.user.email,
        rights: action.user.rights,
        status: action.user.status,
      });

      return { ...state, users: [...newState] };

    case 'GET_USER':
      return { ...state, selectedUser: state.users[action.id] };

    case 'EDIT_USER':
      const newUsers = state.users;
      newUsers[action.id - 1] = {
        id: state.selectedUser.id,
        name: action.payload.name,
        email: action.payload.email,
        rights: action.payload.rights,
        status: action.payload.status,
      };
      return { ...state, users: [...newUsers] };

    case 'REMOVE_USER':
      // refreshedUsers.users.splice(state.selectedUser.id - 1, 1);

      const users = state.users.filter((item) => {
        return item.id !== state.selectedUser.id && item;
      });

      return {
        ...state,
        users,
      };
    default:
      return state;
  }
}

// state = { ...state, users: state.users.concat(action.user) };

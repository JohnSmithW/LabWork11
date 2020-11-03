export default function usersTable(
  state = {
    users: [{ id: 0, name: 'John', email: 'john@gmail.com', rights: 'admin', status: 'active' }],
  },
  action
) {
  switch (action.type) {
    case 'getUsers':
      return state.users;
    default:
      return state;
  }
}

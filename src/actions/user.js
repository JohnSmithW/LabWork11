export function addUser(user) {
  return {
    type: 'ADD_USER',
    user: user,
  };
}

export function editUser(id, payload) {
  return {
    type: 'EDIT_USER',
    id: id,
    payload: payload,
  };
}

export function getUser(id) {
  return {
    type: 'GET_USER',
    id: id,
  };
}

export const removeUser = {
  type: 'REMOVE_USER',
};

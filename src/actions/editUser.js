function editUser(id, payload) {
  return {
    type: 'EDIT_USER',
    id: id,
    payload: payload,
  };
}

export default editUser;

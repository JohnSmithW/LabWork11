function addUser(user) {
  return {
    type: 'ADD_USER',
    user: user,
  };
}

export default addUser;

function getUser(id) {
  return {
    type: 'GET_USER',
    id: id,
  };
}

export default getUser;

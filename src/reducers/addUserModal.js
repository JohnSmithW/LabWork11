export default function addUserModal(
  state = { isModalWindowOpen: false, id: null, name: '', email: '', rights: '', status: '' },
  action
) {
  switch (action.type) {
    // case 'OPEN':
    //   return { ...state, isModalWindowOpen: true };
    // case 'CLOSE':
    //   return { ...state, isModalWindowOpen: false };
    // case 'GET_ID':
    //   return {
    //     ...state,
    //     id: state.id + 1,
    //   };
    // case 'GET_NAME':
    //   return { ...state, name: action.value };
    // case 'GET_EMAIL':
    //   return { ...state, email: action.value };
    // case 'GET_RIGHTS':
    //   return { ...state, rights: action.value };
    // case 'GET_STATUS':
    //   return { ...state, status: action.value };
    default:
      return state;
  }
}

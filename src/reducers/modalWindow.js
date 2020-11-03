export default function modalWindow(state = { isModalWindowOpen: false, name: '' }, action) {
  switch (action.type) {
    case 'open':
      return { isModalWindowOpen: action.isModalWindowOpen };
    case 'close':
      console.log('1');
      return { isModalWindowOpen: action.isModalWindowOpen };
    case 'getName':
      return { name: action.value };
    default:
      return state;
  }
}

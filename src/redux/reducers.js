// reducer.js
const initialState = {
  isSticky: false,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_STICKY_SCROLL':
      console.log('New isSticky:', action.payload);
      return {
        ...state,
        isSticky: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

  
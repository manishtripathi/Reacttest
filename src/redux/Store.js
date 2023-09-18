
 import { createStore } from 'redux';

 const initialState = {
   scrollPosition: 0,
 };

 const reducer = (state = initialState, action) => {
   switch (action.type) {
     case 'SET_SCROLL_POSITION':
       return { ...state, scrollPosition: action.payload };
     default:
       return state;
   }
 };

 const store = createStore(reducer);

 export default store;





 import {
   ADD_USER, EDIT_USER, DELETE_USER,
 } from '../actions/userActions';

 export const userReducer = ( users=[], action ) => {
  switch (action.type) {
    case ADD_USER:
      return [ ...users, action.payload];

    case EDIT_USER:
      return users.map( user => {
        if (user.id !== action.payload.id) {
          return user
        }

        const { name, password } = action.payload;

        return ({
          name,
          password,
          id: user.id,
        });
      });

    case DELETE_USER:
      return users.filter(user => user.id !== action.payload.id);

    default:
      console.warn(`We don't have this action: ${action.type}`);
      return users;
  };
 };
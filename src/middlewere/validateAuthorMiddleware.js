import { ADD_RATE } from '../actions/bookActions';

export const validateAuthorMiddleware = store => next => action => {
  if (action.type === ADD_RATE && !action.payload.author.length) {
    console.warn('Autor nie ma imienia i nazwiska');
    return;
  }

  // or 

  // export const validateAuthorMiddleware = ({ dispatch }) => next => ({ payload, type }) => {
  //   if (type === ADD_RATE && !payload.author.length) {
  //     console.warn('Autor nie ma imienia i nazwiska');
  //     return;
  //   }
  
  next(action);
}


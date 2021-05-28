export const ADD_RATE = 'ADD_RATE';
export const DELETE_RATE = 'DELETE_RATE';
export const EDIT_RATE = 'EDIT_RATE';

export const addRate = ({author, comment, rate, title}) => ({
  type: ADD_RATE,
  payload: {
     title,
     author,
     comment,
     id: Math.floor(Math.random() * 1024),
     rate,
  }
})

export const deleteRate = ({id}) => ({
  type: DELETE_RATE,
  payload: {
    id,
  }
})

export const editRate = ({ author, comment, id, rate, title }) => ({
  type: EDIT_RATE,
  payload: {
    author,
    comment,
    id,
    rate,
    title,
  }
})

// Sample type of data in Redux
// {
//   "type" is obligatory, "payload" opcional
//   type: ADD_RATE,
//   payload: {
//     author: 'Jan Kowalski',
//     rate: 5,
//     comment: 'very good book',
//   }
// }
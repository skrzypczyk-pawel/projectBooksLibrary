export const ADD_USER = "ADD_USER";
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";

export const addUser = ({ name, password }) => ({
  type: ADD_USER,
    payload: {
      name,
      password,
      id: Math.floor(Math.random() * 1024),
    }
})

export const editUser = ({ name, password, id }) => ({
  type: EDIT_USER,
    payload: {
      name,
      password,
      id,
    }
})

export const deleteUser = ({ id, password }) => ({
  type: DELETE_USER,
    payload: {
      id,
      password,
    }
})

export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';

// Zamienić nazwy akcji bo nie mogą być potem takie same w innym np ADD_USER

export const addRate = ({author, comment, rate, title}) => ({
  type: ADD,
  payload: {
     title,
     author,
     comment,
     id: Math.floor(Math.random() * 1024),
     rate,
  }
})


//Stwórz funkcje zwracającą akcje która odejmuje i akcje która umożliwia edycje komentarza.
export const deleteRate = ({id}) => ({
  type: DELETE,
  payload: {
    id,
  }
})

export const editRate = ({ author, comment, id, rate, title }) => ({
  type: EDIT,
  payload: {
    author,
    comment,
    id,
    rate,
    title,
  }
})

// Przykłądowy rodzaj danych w Redux
// {
//   //type jest obowiązkowy a payload opcjonalny
//   type: ADD_RATE,
//   //Ładunek
//   payload: {
//     author: 'Jan Kowalski',
//     rate: 5,
//     comment: 'Bardzo dobra książka',
//   }
// }
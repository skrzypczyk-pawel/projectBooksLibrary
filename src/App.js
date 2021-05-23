import React from 'react';
import { Provider } from 'react-redux';

import Form from './Form'
import List from './List'

import store from './store/store'

import './styles/App.css';

// stworzyć drugi store

// Wyczyściliśmy inputy po dodaniu. dodać input do opisu książki

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <div className="ui">
          <h1>Twoja biblioteka</h1>
          <p>Dodaj swoje ulubione tytuły, oceń je, napisz komentarz i krótki opis, ułatwi Ci to polecenie twoich ulubionych pozycji!</p>
          <Form />
          <List />
        </div>
      </div>
    </Provider>
  );
}

export default App;
import React from 'react';
import { Provider } from 'react-redux';

import Form from './Form'
import List from './List'

import store from './store/store'

import './styles/App.css';

// drugi store
// commit 1: Udało się stworzyć do btn do usuwania, aczkolwiek działą prawidłowo w konsoli, ale nie zmienia nic w ui
// commit 2: Udało się!!! stworzyliśmy przycisk który działa!!! 21may2021!!! we are the champions!
// commit 3: Wyczyściliśmy inputy po dodaniu. Dodać rzeczy z commit 1, plus input do opisu książki, i wyciemniony tekst w inputie typu "wpisz autora".


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
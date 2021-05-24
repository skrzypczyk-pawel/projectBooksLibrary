import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from './actions/userActions';

import UserInput from './UserInput';
import UserList from './UserList';

import './styles/Menu.css'

const Menu = ({
  addUser,
  id,
  password = '',
  name = '',
}) => {

  const [nameInput, setNameInput] = useState(name);
  const [passwordInput, setPasswordInput] = useState(password);

  const handleChange = ( event, type ) => {
    switch (type) {
      case "name":
        return setNameInput(event.target.value);
      case "pass":
        return setPasswordInput(event.target.value);
      default: return;
    };
  };

  const handleClearInputs = () => {
    setNameInput('');
    setPasswordInput('');
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    console.log(passwordInput.length);

    if (!nameInput.length || !passwordInput.length) {
      return;
    };

    const rateObject = {
      id,
      name: nameInput,
      password: passwordInput,
    };

    addUser(rateObject);

    // callback???

    handleClearInputs();
  }

  return ( 
  <div className="menu">
    <h3>Menu</h3>
    <div>
      <p>Make new user</p>
      <form onSubmit={handleOnSubmit}>
        <UserInput
        onChange={(e) => handleChange(e, "name")}
        value={nameInput}
        placeholder="User name"
        />
        <UserInput
        onChange={(e) => handleChange(e, "pass")}
        value={passwordInput}
        placeholder="Password"
        type="password"
        />
        <button type="submit">Add</button>
      </form>
        <UserList />
    </div>
  </div>
   );
};

const connectActionsToProps = ({
  addUser,
})

const MenuConsumer = connect(null, connectActionsToProps)(Menu);
 
export default MenuConsumer;
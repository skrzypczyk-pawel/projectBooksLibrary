import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from './actions/userActions';

const User = ({
  id,
  name,
  password,
  checkPass = '',
}) => {

  const [checkPasswordInput, setCheckPasswordInput] = useState(checkPass);

  const dispatch = useDispatch();
  
  const handleCheckPasswordChange = event =>
    setCheckPasswordInput(event.target.value);

  const rateObject = { id };

  const handleDelete = () => dispatch(deleteUser(rateObject));

  // const showBtnLog = () => {
  //   if(password === {checkPasswordInput}) {
  //     return (
  //       <>
  //       <button>Log in</button>
  //       <button onClick={handleDelete}>Delete</button>
  //       </>
  //     )
  //   } else return null;
  // }

 


  return ( 
    <div className="user">
      <p>{name}</p>
      <input 
      type="password"
      placeholder="password"
      value={checkPasswordInput}
      onChange={handleCheckPasswordChange}
      />
      <button>Log in</button>
        <button onClick={handleDelete}>Delete</button>
      {/* {showBtnLog} */}
    </div>
   );
}

export default User;
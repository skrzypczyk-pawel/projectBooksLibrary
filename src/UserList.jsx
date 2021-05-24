import React from 'react';
import { connect } from 'react-redux';
import User from './User';


const UserList = ({users}) => {
  const usersAccounts = users.map(user => <User 
  key={user.id}
  {...user}
  />)
  return ( 
    <div className="users">
      {usersAccounts}
    </div>
   );
}

const connectReduxStateToProps = store => ({
  users: store.users,
});

const userListConsumer = connect(connectReduxStateToProps)(UserList);

export default userListConsumer;
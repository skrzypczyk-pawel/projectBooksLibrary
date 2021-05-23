import React from 'react';
import { connect } from 'react-redux';
import Rete from './Rete';

const List = ({rates}) => {
  const ratesElements = rates.map(rate => <Rete 
    key={rate.id} 
    {...rate}
  />)

  return (
    <ul>
      {ratesElements}
    </ul>
  );
};

const connectReduxStateToProps = store => ({
  rates: store.rates,
})

const ListConsumer = connect(connectReduxStateToProps)(List);

export default ListConsumer;
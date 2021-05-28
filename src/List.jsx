import React from 'react';
import { useSelector } from 'react-redux';
import Rete from './Rete';

const List = () => {
  const rates = useSelector(store => store.rates);
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

export default List;
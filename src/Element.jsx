import React, { useState } from 'react';
import { connect } from 'react-redux';

import Form from './Form';

import { deleteRate } from './actions/appActions';

import './styles/Element.css';

const Element = ({author, comment, deleteRate, id, rate, title  }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const toggleElements = () => setIsVisibleForm(prev => !prev); 
 
  const rateObject = { id };
  
  const formOrButtonElement = isVisibleForm 
  ? (
    <Form 
      author = {author}
      callback = {toggleElements}
      comment = {comment}
      id={id}
      rate = {rate}
      title = {title}
     />
  ) : (
    <>
    <button onClick={toggleElements}>Edytuj</button>
    </> 
  )

  const handleDelete = () => { deleteRate(rateObject) };
  
  const handleRateColor = (rate) => {
    if(rate === 1) {
      return "red";
    }
    if (rate === 2) {
      return "orange";
    }
    else if(rate === 3) {
      return "yellow";
    } else {
      return "green";
    }
    
  }
  console.log(rate);
  console.log(handleRateColor());


  return (
    <li className="element">
      <p>Tytuł: {title}.</p>
      <p>Autor książki: {author}.</p>
      <p>Komentarz: {comment}.</p>
      <div 
      className="rate"
      style={{color: `${handleRateColor()}`}}
      ><p>{rate}/5</p></div>
      {formOrButtonElement}
      <button onClick={handleDelete}>Usuń</button>  
    </li>
  );
};

const connectActionsToProps = ({ deleteRate });

const ElementConsumer = connect(null, connectActionsToProps)(Element);

export default ElementConsumer;
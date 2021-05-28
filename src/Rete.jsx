import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Form from './Form';

import { deleteRate } from './actions/bookActions';

import './styles/Element.css';

const Rete = ({
  author, 
  comment,
  id, 
  rate, 
  title  
}) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const dispatch = useDispatch();

  const toggleElements = () => setIsVisibleForm(!isVisibleForm); 
 
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
    <button onClick={toggleElements}>Edytuj</button>
  )

  const handleDelete = () => dispatch(deleteRate(rateObject));
  
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

  return (
    <li className="element">
      <p>Tytuł: {title}.</p>
      <p>Autor książki: {author}.</p>
      <p>Komentarz: {comment}.</p>
      <div 
      className="rate"
      style={{color: handleRateColor()}}
      ><p>{rate}/5</p></div>
      {formOrButtonElement}
      <button onClick={handleDelete}>Usuń</button>  
    </li>
  );
};


export default Rete;
import React, { useState } from 'react';
import { connect } from 'react-redux';

import Form from './Form';

import { deleteRate } from './actions/appActions';

import './styles/Element.css';

const Element = ({author, comment, rate, id, deleteRate }) => {
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
     />
  ) : (
    <>
    <button onClick={toggleElements}>Edytuj</button>
    </> 
  )

  const handleDelete = () => { deleteRate(rateObject) };

  return (
    <li className="element">
      <p>Autor oceny: {author}.</p>
      <p>Komentarz: {comment}.</p>
      <p>Ocena: {rate}/5.</p>
      {formOrButtonElement}
      <button onClick={handleDelete}>Usuń</button>  
    </li>
  );
};

const connectActionsToProps = ({ deleteRate });

const ElementConsumer = connect(null, connectActionsToProps)(Element);

export default ElementConsumer;
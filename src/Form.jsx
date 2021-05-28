import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRate, editRate } from './actions/bookActions';
import FormInput from './FormInput';

const Form = ({
  author = '',
  callback,
  comment = '',
  id,
  rate = '',
  title = '',
}) => {
  const [titleInput, setTitleInput] = useState(title);
  const [authorInput, setAuthorInput] = useState(author);
  const [rateInput, setRateInput] = useState(rate);
  const [commentInput, setCommentInput] = useState(comment);

  const dispatch = useDispatch();

  const handleChange = ( event, type ) => {
    switch (type) {
      case "title":
       return setTitleInput(event.target.value);
      case "author":
       return setAuthorInput(event.target.value);
      case "rate":
       return setRateInput(event.target.value);
      case "comment":
       return setCommentInput(event.target.value);
      default: return;
    }
  }

  const handleClearInputs = () => {
    setTitleInput('');
    setAuthorInput('');
    setRateInput('');
    setCommentInput('');
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    if (!titleInput.length) {
      return;
    }

    const rateObject = {
      author: authorInput,
      callback,
      comment: commentInput,
      id,
      rate: rateInput,
      title: titleInput,
    };

    id 
      ? dispatch(editRate(rateObject))
      : dispatch(addRate(rateObject));

    //Change to bollen
    !!id && callback();

    handleClearInputs();
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <FormInput 
      onChange={(e) => handleChange(e, "title")}
      value={titleInput}
      placeholder="Wpisz tytuł" 
      />
      <FormInput 
      onChange={(e) => handleChange(e, "author")}
      value={authorInput}
      placeholder="Podaj Autora" 
      />
      <FormInput 
      onChange={(e) => handleChange(e, "rate")}
      value={rateInput}
      placeholder="Wpisz ocene" 
      />
      <FormInput 
      onChange={(e) => handleChange(e, "comment")}
      value={commentInput}
      placeholder="Wpisz komentarz" 
      />
      <button type="submit">
        {id ? 'Edycja oceny' : 'Dodaj'}
      </button>
    </form>
  );
};



export default Form;
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addRate, editRate } from './actions/appActions';

const Form = ({
  addRate,
  author = '',
  callback,
  comment = '',
  editRate,
  id,
  rate = '',
  title = '',
}) => {

  const [titleInput, setTitleInput] = useState(title);
  const [authorInput, setAuthorInput] = useState(author);
  const [rateInput, setRateInput] = useState(rate);
  const [commentInput, setCommentInput] = useState(comment);

  const handleChangeTitle = event => setTitleInput(event.target.value);
  const handleChangeAuthor = event => setAuthorInput(event.target.value);
  const handleChangeRate = event => setRateInput(event.target.value);
  const handleChangeComment = event => setCommentInput(event.target.value);
  
  const handleClearInputs = () => {
    setTitleInput('');
    setAuthorInput('');
    setRateInput('');
    setCommentInput('');
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    if (!authorInput.length) {
      return;
    }

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

    id ? editRate(rateObject) : addRate(rateObject);

    if (id) {
      callback() 
    }

    handleClearInputs();
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
      <label>
          <input
            onChange={handleChangeTitle}
            type="text"
            value={titleInput}
            placeholder="Podaj Tytuł"
          />
        </label>
      </div>
       <div>
        <label>
          <input
            onChange={handleChangeAuthor}
            type="text"
            value={authorInput}
            placeholder="Podaj autora"
          />
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={handleChangeRate}
            type="text"
            value={rateInput}
            placeholder="Podaj ocene od 1 do 5"
          />
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={handleChangeComment}
            type="text"
            value={commentInput}
            placeholder="Wpisz komentarz"
          />
        </label>
      </div>
      <button type="submit">
        {/* Jeśli mieliśmy podane id to na przycisku wyświetli się edytuj */}
        {id ? 'Edycja oceny' : 'Dodaj'}
      </button>
    </form>
  );
};

const connectActionsToProps = ({
  addRate,
  editRate,
})

const FormConsumer = connect(null, connectActionsToProps)(Form);

export default FormConsumer;
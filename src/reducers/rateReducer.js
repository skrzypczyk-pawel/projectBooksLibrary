import {
  ADD_RATE, EDIT_RATE, DELETE_RATE,
} from '../actions/bookActions';

export const rateReducer = ( state=[], action ) => {

  switch (action.type) {
    
    case ADD_RATE:
      return [ ...state, action.payload];

    case EDIT_RATE:
      return state.map( currentStateElement => {
        if (currentStateElement.id !== action.payload.id) {
          return currentStateElement
        }

        const { author, comment, rate, title } = action.payload;

        return ({
          author,
          comment,
          id: currentStateElement.id,
          rate,
          title,
        });
      });

    case DELETE_RATE:
      return state.filter(currentStateElement => currentStateElement.id !== action.payload.id);

    default:
      console.warn(`We don't have this action: ${action.type}`);
      return state;
  };
};


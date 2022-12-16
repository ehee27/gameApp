import redux, {createStore} from 'redux';
// import loggerMiddleware from 'redux-logger';
// import { applyMiddleware } from 'redux';
// import GroceryItem from './GroceryItem';

const initialState = {
  game: []
}

const VIEW_ALL_GAMES = 'VIEW_ALL_GAMES';

export const viewAllGames = (games) => {
  return {
    type: VIEW_ALL_GAMES,
    games
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case VIEW_ALL_GAMES:
      return {
        ...state,
      }
      default:
        return state;
  }
}

const store = createStore(reducer);

export default store;
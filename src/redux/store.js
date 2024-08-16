import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import moviesReducer from './reducers/movieReducers';
import favouritesReducer from './reducers/favoriteReducers';

const rootReducer = combineReducers({
    movies: moviesReducer,
    favourites: favouritesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

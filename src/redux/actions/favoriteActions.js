import { ADD_FAVOURITE, REMOVE_FAVOURITE, TOGGLE_SHOW_FAVOURITES } from '../actionTypes';

export const addFavourite = (movie) => ({
    type: ADD_FAVOURITE,
    payload: movie,
});

export const removeFavourite = (movieId) => ({
    type: REMOVE_FAVOURITE,
    payload: movieId,
});

export const toggleShowFavourites = () => ({
    type: TOGGLE_SHOW_FAVOURITES,
});

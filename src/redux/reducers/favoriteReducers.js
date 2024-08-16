import { ADD_FAVOURITE, REMOVE_FAVOURITE, TOGGLE_SHOW_FAVOURITES } from '../actionTypes';

const initialState = {
    favourites: [],
    showFavourites: false,
};

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVOURITE:
            if (!state.favourites.some((favMovie) => favMovie.id === action.payload.id)) {
                return {
                    ...state,
                    favourites: [...state.favourites, action.payload],
                };
            }
            return state;
        case REMOVE_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter((movie) => movie.id !== action.payload),
            };
        case TOGGLE_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: !state.showFavourites,
            };
        default:
            return state;
    }
};

export default favouritesReducer;

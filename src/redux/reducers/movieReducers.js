import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
   
} from '../actionTypes';

const initialState = {
    movies: [],
    loading: false,
    error: null,
    voteCount: 0,
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: action.payload,
                error: null,
            };
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload,
            };
        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
           
        default:
            return state;
    }
};

export default moviesReducer;

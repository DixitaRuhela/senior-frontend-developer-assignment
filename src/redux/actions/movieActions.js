import axios from 'axios';
import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
 
} from '../actionTypes';

export const fetchMoviesRequest = (boolean) => ({
    type: FETCH_MOVIES_REQUEST,
    payload:boolean,
});

export const fetchMoviesSuccess = (movies) => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
});

export const fetchMoviesFailure = (error) => ({
    type: FETCH_MOVIES_FAILURE,
    payload: error,
});

export const fetchMovies = (page, searchTerm, isSearching) => {

    return async (dispatch) => {
        dispatch(fetchMoviesRequest(true));
        try {
            const response = await axios.get(
                isSearching
                    ? 'https://api.themoviedb.org/3/search/movie'
                    : 'https://api.themoviedb.org/3/movie/popular',
                {
                    params: {
                        api_key: `${process.env.REACT_APP_API_KEY}`,
                        page: page,
                        query: isSearching ? searchTerm : '',
                    },
                }
            );
            dispatch(fetchMoviesSuccess(response.data.results));
            dispatch(fetchMoviesRequest(false));
        } catch (error) {
            dispatch(fetchMoviesFailure('Error fetching data'));
        }
    };
};




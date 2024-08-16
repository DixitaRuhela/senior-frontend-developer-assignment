import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Pagination } from '@mui/material';
import MovieHeader from '../Components/MovieHeader';
import MovieCard from '../Components/MovieCard';
import { fetchMovies } from '../redux/actions/movieActions';
import { addFavourite, removeFavourite, toggleShowFavourites } from '../redux/actions/favoriteActions';
import CircularProgress from '@mui/material/CircularProgress';
import NoContent from '../CommonComponents/NoContent';

export default function MoviesPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { movies, loading, error } = useSelector((state) => state.movies);
    const { favourites, showFavourites } = useSelector((state) => state.favourites);

    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [voteCount, setVoteCount] = useState(''); // Add voteCount state
    const [displayedMovies, setDisplayedMovies] = useState([]);

    useEffect(() => {
        dispatch(fetchMovies(page, searchTerm, isSearching));
    }, [page, searchTerm, isSearching, dispatch]);

    useEffect(() => {
        if (searchTerm === '') {
            setIsSearching(false);
        } else {
            setIsSearching(true);
            setPage(1);
        }
    }, [searchTerm]);

    useEffect(() => {
        // Combine filtering logic for favourites and vote count
        const moviesToFilter = showFavourites ? favourites : movies;
        filterMovies(moviesToFilter, voteCount);
    }, [movies, favourites, voteCount, showFavourites]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handleAddToFavourites = (movie) => {
        const isFavourite = favourites.some(favMovie => favMovie.id === movie.id);

        if (isFavourite) {
            dispatch(removeFavourite(movie.id));
        } else {
            dispatch(addFavourite(movie));
        }
    };

    const handleFavouriteClick = () => {
        dispatch(toggleShowFavourites());
    };

    const handleFilterChange = (newVoteCount) => {
        setVoteCount(newVoteCount); // Update voteCount state
    };

    const filterMovies = (moviesToFilter, voteCount) => {
        if (voteCount !== '') {
            const filteredMovies = moviesToFilter.filter((movie) =>
                movie.vote_average >= voteCount
            );
            setDisplayedMovies(filteredMovies);
        } else {
            setDisplayedMovies(moviesToFilter);
        }
    };

    if (loading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    backgroundColor: '#111',
                }}
            >
                <CircularProgress color="primary" />
            </Box>
        );
    }

    if (error) {
        console.error(error);

        // Handling the case if user is not connected to internet
        navigate('/noNetwork');
        return null;
    }

    return (
        <Box sx={{ backgroundColor: '#111', color: '#fff', minHeight: '95.5vh', padding: 2,overflow:"hidden" }}>
            <Grid>
            <MovieHeader
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                name={props.name}
                handleFavouriteClick={handleFavouriteClick}
                showFavourites={showFavourites}
                voteCount={voteCount}
                handleFilterChange={handleFilterChange} // Pass the filter change handler
            />
            </Grid>
          
            <Grid container  xs={12} style={{overflow : "auto", maxHeight : "72.5vh"}}>
        
            {
                displayedMovies && displayedMovies.length > 0 ? displayedMovies.map((movie, index) => (
                    <Grid item xs={6} sm={6} md={2} key={index}>
                        <MovieCard
                            movie={movie}
                            isFavourites={favourites}
                            handleAddToFavourites={handleAddToFavourites}
                        />
                    </Grid>
                )) :
                // In case there is no movie, loading no record page
                <NoContent/>
            }
                
            </Grid>

            {/* Pagination bar component */}
            {!showFavourites && (
                <PaginationComponent
                    currentPage={page}
                    onChange={handlePageChange}
                />
            )}
        </Box>
    );
}

function PaginationComponent(props) {

    const {currentPage, onChange} = props;

    return <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 4,
            backgroundColor: '#333',
            padding: 2,
            borderRadius: 1,
        }}
    >
        <Pagination
            count={500} // Assuming totalPages is 500 as per your code
            page={currentPage}
            onChange={onChange}
            color="primary"
            sx={{
                '& .Mui-selected': {
                    backgroundColor: '#1E88E5',
                    color: '#fff',
                },
                '& .MuiPaginationItem-root': {
                    color: '#fff',
                },
            }}
        />
    </Box>;
}

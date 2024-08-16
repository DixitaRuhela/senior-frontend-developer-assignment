import React, { useState } from 'react';
import { Grid, Typography, Box, Button, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchComponent from '../CommonComponents/Search'; // Import the SearchComponent

const useStyles = makeStyles({
    container: {
        padding: '24px',
    },
    title: {
        fontWeight: 'bold',
    },
    welcomeMessage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    filterBox: {
        paddingRight: '16px',
        border: '1px solid #BDBDBD',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '16px', // Add gap between filter input and button
    },
   
    inputLabel: {
        color: 'white',

    },
    button: {
        backgroundColor: '#1E88E5',
        color: '#fff',
        height: '40px', // Match height of button with input field
        padding: '0 16px', // Adjust padding for better button size
    },
});


const MovieHeader = ({
    handleFilterChange,
    searchTerm,
    setSearchTerm,
    name,
    handleFavouriteClick,
    showFavourites,
}) => {
    const classes = useStyles();
    const [voteCount, setVoteCount] = useState('');

    const handleVoteAverageChange = (event) => {
        const value = event.target.value;
        setVoteCount(value);
        handleFilterChange(value); // Notify parent component of the filter change
    };

    return (
        <Box className={classes.container}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" gutterBottom className={classes.title}>
                        Movies
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
                        <Grid item>
                            <Typography variant="h6">
                                Welcome, <strong>{name}</strong>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Box className={classes.filterBox}>
                        <TextField
                            label="Filter by Vote Average"
                            variant="outlined"
                            type="number"
                            inputProps={{ min: 0, max: 10, step: 0.1 }}
                            value={voteCount}
                            onChange={handleVoteAverageChange}
                            margin="normal"
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            InputProps={{
                                style: { color: '#fff' },
                                sx: {
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#fff',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#fff',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#fff',
                                    },
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            className={classes.button}
                            onClick={handleFavouriteClick}
                        >
                            {showFavourites ? 'Show All Movies' : 'Show Favourites'}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MovieHeader;

import React, { useState } from 'react';
import { Grid, Typography, Box, FormControl, InputLabel, Select, MenuItem, Switch } from '@mui/material';
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

const MovieHeader = (props) => {
    let {
        handleFilterChange,
        searchTerm,
        setSearchTerm,
        name,
        handleFavouriteClick,
        showFavourites,
    } = props;

    name = name ? name : "User";

    const classes = useStyles();

    const [voteCount, setVoteCount] = useState('');

    const handleVoteAverageChange = (event) => {
        const currentState = setVoteCount(event.target.value);
        handleFilterChange(voteCount); // Notify parent component of the filter change
    };

    return (
        <Grid container alignItems={"center"} justifyContent="space-between">
            <Grid item xs={12} md={2}>
                <Typography variant="h3" gutterBottom className={classes.title} >
                    Movies
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                {/* Increased width of the Search Input */}
                <SearchComponent
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    sx={{ width: '100%' }} // Make the search input take full width of its grid item
                />
            </Grid>
            <Grid item xs>
                <Grid container alignItems={"center"} justifyContent="flex-end" spacing={1}>

                    <Grid item xs={6} md={3}>
                        {/* Adding Show Favorites Checkbox */}

                        <Switch checked={showFavourites} sx={{
                            '& .MuiSwitch-track': {
                                backgroundColor: 'white', // Track color when unchecked
                            },

                        }}
                            onChange={handleFavouriteClick} color={"secondary"} />
                        {showFavourites ? "Show All" : "Show Favorites"}
                    </Grid>
                    <Grid item xs={6} md={3}>
                        {/* Adding filter dropdown for filter by rating */}
                        <FilterByRating
                            value={voteCount}
                            onChange={handleVoteAverageChange} />
                    </Grid>
                    <Grid item xs md={1} />
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6">
                            Welcome, <strong style={{ color: "#f00" }}>{name}</strong>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

function FilterByRating(props) {
    const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <FormControl sx={{ m: 1, minWidth: 180, borderColor: "#fff", color: "#fff" }} size="small">
            <InputLabel id="demo-select-small-label" sx={{
                color: '#fff', // Label color when not focused
                '&.Mui-focused': {
                    color: '#fff', // Label color when focused
                },
            }}>Filter By Rating</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={props.value}
                label="Filter By Rating"
                onChange={props.onChange}
                inputLabelProps={{
                    style: { color: '#fff' },
                }}
                style={{ color: "#fff" }}
                sx={{
                    '& .MuiInputLabel-root': {
                        color: 'white', // Label color
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#fff',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#fff',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#fff',
                    },
                }}
            >
                <MenuItem value={-1}>
                    <em>None</em>
                </MenuItem>
                {ratings.map((rating) => (
                    <MenuItem key={rating} value={rating}>{rating}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default MovieHeader;

// MovieCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { makeStyles } from '@mui/styles';
import TooltipTitle from '../CommonComponents/TooltipComponent'; // Adjust the import if needed
const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      backgroundColor: '#333',
      position: 'relative',
    },
    iconBox: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingBottom: '16px', 
    },
});
const MovieCard = ({ movie, handleAddToFavourites, isFavourites, showFavourites }) => {
const classes=useStyles();
    const fav = isFavourites.map(ele => ele.title);

// Check if the movie's title is in the fav array
const check = fav.includes(movie.title);


    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <Card className={classes.card}>
      <CardMedia
        component="img"
        alt={movie.title}
        height="300"
        image={`${imageBaseUrl}${movie.poster_path}`}
      />
      <CardContent>
        <Grid container alignItems={'center'}>
          <Grid item xs={11}>
            <TooltipTitle title={movie.title} />
            <Typography variant="body2" color="white">
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Box className={classes.iconBox}>
                            <IconButton
                                sx={{
                                    color: check ? 'red' : 'white',
                                    '&:hover': {
                                        color: 'red',
                                    },
                                }}
                                aria-label="add to favorites"
                                onClick={() => handleAddToFavourites(movie)}
                            >
                                <FavoriteIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                </Grid>



            </CardContent>

        </Card>

    );
};

export default MovieCard;























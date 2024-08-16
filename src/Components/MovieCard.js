// MovieCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card: {
        backgroundColor: '#333',
        position: 'relative',
        margin : "10px"
    },
    iconBox: {
        display: 'flex',
        justifyContent: 'flex-end',

    },

    textAlignRight : {
        textAlign : "right"
    }
});

const MovieCard = ({ movie, handleAddToFavourites, isFavourites }) => {
    
    const classes = useStyles();
    
    const fav = isFavourites.map(ele => ele.title);

    // Check if the movie's title is in the fav array
    const check = fav.includes(movie.title);

    const { title, vote_average, release_date } = movie;

    let cardTitle = ShortMovieName(title);

    return (
        <Card className={classes.card}>

            {/* Render Image Card */}
            <MovieImageCard
                {...movie}
            />

            <CardContent style={{ padding: "0px 10px 10px 10px" }}>

                {/* Card Content first row for card title and like button */}
                <Grid container alignItems={'center'}>
                    <Grid item xs={11}>

                        {/* Show Card Title  */}
                        <Text
                            text={cardTitle}
                            variant="body5"
                            color="white" />

                    </Grid>
                    <Grid item xs={1}>

                        {/* Show favorite icon  */}
                        <FavoriteIconButton
                            isChecked={check}
                            onClick={() => handleAddToFavourites(movie)} />
                    </Grid>
                </Grid>

                {/* Card Content second row for extra movie details */}
                <Grid container margin={0} padding={0} alignItems={'center'}>
                    <Grid item xs={6}>

                        {/* Show Rating  */}
                        <Text
                            style={{fontSize : "0.7rem"}}
                            title={"Rating"}
                            text={`${Math.round(vote_average * 10) / 10}`}
                            variant="body5"
                            color="white" />
                    </Grid>

                    <Grid item xs className={classes.textAlignRight}>

                        {/* Show Release Date  */}
                        <Text
                            style={{fontSize : "0.7rem"}}
                            title={"Release Date"}
                            text={release_date}
                            variant="body3"
                            color="white" />
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    );
};

function Text(props) {
    return <Typography
        {...props}
    >
        {props.text}
    </Typography>
}

function FavoriteIconButton(props) {

    const classes = useStyles();

    return <Box className={classes.iconBox}>
        <IconButton
            sx={{
                color: props.isChecked ? 'red' : 'white',
                '&:hover': {
                    color: 'red',
                },
            }}
            aria-label="add to favorites"
            onClick={props.onClick}
        >
            <FavoriteIcon />
        </IconButton>
    </Box>
}

function MovieImageCard(props) {

    const {title, poster_path} = props;

    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

    return <CardMedia
        component="img"
        alt={title}
        height="200"
        image={`${imageBaseUrl}${poster_path}`}
        sx={{ padding: "5px 0px 5px 0px", objectFit: "scale-down" }}
    />;
}

function ShortMovieName(title) {
    let allowedLength = 20;
    return title.length > allowedLength ? title.substring(0, allowedLength) + "..." : title;
}

export default MovieCard;























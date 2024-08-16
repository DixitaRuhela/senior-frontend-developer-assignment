import React, { useEffect, useState } from 'react';
import { Typography, TextField, Button, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import LoginBackgroundImage from '../assets/image/LoginBackgroundImage.png'

const useStyles = makeStyles({
    rootContainer: {
        backgroundImage: `url(${LoginBackgroundImage})`,
        backgroundSize: "cover",
        justifyContent: "center",
        alignItems: "center"
    },
    headingContainer: {
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        background: "rgba(0,0,0,0.9)"
    }
});

const Login = (props) => {

    const classes = useStyles();

    return (
        <Grid container className={classes.rootContainer}>
            <Grid item>
                <Grid container className={classes.headingContainer}>

                    <Grid item xs={12} md={12} sx={{ marginTop: 'auto' }}>

                        {/* Project title heading as banner */}
                        <MainTitle />

                    </Grid>
                    <Grid item xs={12} md={4}>

                        {/* User name input box */}
                        <UserInputBox {...props} />
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )

};


function MainTitle() {
    return (
    <Typography
        textAlign={"center"}
        style={{
            textShadow: "10px 10px 10px rgba(255,255,255,0.3)",
            color: "#eee",
            fontSize: "12vw"
        }}
        role="heading"
        aria-level="1"
    >
        <span style={{ color: "red" }}>C</span>ine<span style={{ color: "red" }}>F</span>avorites
    </Typography>);
}

function UserInputBox(props) {

    const [validate, setValidate] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const inputName = event.target.value;
        props.setName(inputName);

        const isValid = /^[a-zA-Z0-9 ]{3,}$/.test(inputName);
        setValidate(isValid);

        if (inputName.length === 0) {
            setErrorMessage('Please Enter the Name.');
        } else if (!isValid) {
            setErrorMessage('Name must be at least 3 characters long and contain only letters and numbers.');
        } else {
            setErrorMessage(''); // Clear the error message when input is valid
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.name.length !== 0 && validate) {
            navigate('/movies');
            localStorage.setItem(props.name, []); // Ensure empty array is saved as a string
        }
    };
    useEffect(() => {

        if (props.name.length === 0) {
            setErrorMessage("Please Enter Valid Name")
        }


    }, [props.name])

    return <Grid container>
        <Grid item xs={12} md={12}>
            <Typography
                variant="h4"
                style={{ fontSize: "4vw" }}
                gutterBottom
                textAlign="center"
                color="#fff"
                role="heading"
                aria-level="2"
            >
                Enter Your Name
            </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={props.name}
                onChange={handleChange}
                margin="normal"
                autoFocus
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
                aria-required="true"
            />
            {!validate && (
                <span style={{ color: 'red' }} aria-live="polite">
                    {errorMessage}
                </span>
            )}
        </Grid>

        <Grid item xs={12} md={12}>
            {props.name && <Button
                type="submit"
                variant="contained"
                fullWidth
                style={{ marginTop: '16px', background: "red" }}
                onClick={handleSubmit}
            >
                Submit
            </Button>}

        </Grid>
    </Grid>
}

export default Login;

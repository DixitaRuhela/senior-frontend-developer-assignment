import React, { useEffect, useState } from 'react';
import { Typography, TextField, Button, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import   LoginBackgroundImage  from '../assets/image/LoginBackgroundImage.png'

const Login = (props) => {
    console.log(props.name.length, "dixita")
    const [validate, setValidate] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const inputName = event.target.value;
        props.setName(inputName);

        const isValid = /^[a-zA-Z0-9]{3,}$/.test(inputName);
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
    
    return (
        <Grid
            container
            justifyContent="center"
            direction={"row"}
            style={{
                backgroundImage: `url(${LoginBackgroundImage})`,
                backgroundSize: "cover",
                height: "100vh",
            }}
            role="main"
        >
            <Grid item xs={12} style={{ height: "30vh", marginTop: "15vh", background: "rgba(0,0,0,0.9)" }}>
                <Typography
                    textAlign={"center"}
                    style={{
                        textShadow: "10px 10px 10px rgba(255,255,255,0.3)",
                        color: "#eee",
                        fontSize: "9.2rem"
                    }}
                    role="heading"
                    aria-level="1"
                >
                    <span style={{ color: "red" }}>C</span>ine<span style={{ color: "red" }}>F</span>avorites
                </Typography>
            </Grid>
            <Grid
                item
                style={{
                    background: "rgba(0,0,0,0.9)",
                    padding: "20px",
                    marginTop: "-20vh",
                    height: "40vh",
                    width: "100vw"
                }}
            >
                <Grid container justifyContent={"center"}>
                    <Box sx={{ width: "40%" }}>
                        <Typography
                            variant="h4"
                            gutterBottom
                            textAlign={"center"}
                            color="#fff"
                            role="heading"
                            aria-level="2"
                        >
                            Enter Your Name
                        </Typography>
                        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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

                            {
                                props.name ?
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        style={{ marginTop: '16px', background: "red" }}

                                    >
                                        Submit
                                    </Button>

                                    : ''
                            }

                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Login;

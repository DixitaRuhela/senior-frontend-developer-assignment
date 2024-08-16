import React from 'react';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  textField: {
    width: '250px',
    marginLeft: '2px',
    marginBottom: '16px', 
    backgroundColor: '#222',
    borderRadius: '4px',
    '& .MuiInputBase-input': {
      color: 'white', // Text color inside the input field
    },
    '& .MuiInputLabel-root': {
      color: 'white', // Label color
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#555', // Border color
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#777', // Border color on hover
    },
  },
});

const SearchComponent = ({ searchTerm, setSearchTerm }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Search for movies..."
      value={searchTerm}
      onChange={handleChange}
      className={classes.textField}
    />
  );
};

export default SearchComponent;

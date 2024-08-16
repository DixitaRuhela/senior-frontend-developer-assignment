import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  textField: {
    width: '100%',
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

  const [query, setQuery] = useState(searchTerm);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    // Set a timeout to update the debounced query
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms debounce time

    // Clear the timeout if the input value changes before the timeout duration
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    setSearchTerm(query);
  }, [debouncedQuery]);

  return (
    <TextField
      variant="outlined"
      placeholder="Search for movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className={classes.textField}
    />
  );
};

export default SearchComponent;

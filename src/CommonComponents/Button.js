import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/Icon';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
const FavouriteButton = styled(Button)({
  textTransform: 'none',
  padding: '6px 12px',
  borderRadius: '16px',
  border: '1px solid #e1e4e8',
  color: '#24292f',
  backgroundColor: '#ffffff',
  fontSize: '14px',
  boxShadow: '0 1px 0 rgba(27, 31, 35, 0.04)',
  '&:hover': {
    backgroundColor: '#f6f8fa',
  },
});

export default function Favourite() {
  return (
    <FavouriteButton
      startIcon={
        <IconButton>
           <FavoriteIcon />
        </IconButton>
      }
      variant="contained"
    >
      Show Favorites Only
    </FavouriteButton>
  );
}

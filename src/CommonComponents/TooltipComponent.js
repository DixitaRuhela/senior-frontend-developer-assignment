import React from 'react';
import { Tooltip, Typography } from '@mui/material';

const TooltipTitle = ({ title }) => {
  return (
    <Tooltip title={title} arrow aria-posinset={"top"}>
      <Typography 
        variant="h5" 
        component="div" 
        color={"white"}
        
        sx={{ 
          whiteSpace: 'nowrap', 
          overflow: 'hidden', 
          textOverflow: 'ellipsis', 
          maxWidth: 200 
        }}
      >
        {title}
      </Typography>
    </Tooltip>
  );
};

export default TooltipTitle;

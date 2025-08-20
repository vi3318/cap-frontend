import React from 'react';
import { Fab, Tooltip, Box } from '@mui/material';
import { motion } from 'framer-motion';

const FloatingActionButton = ({ icon, tooltip, onClick, color = "primary", sx = {} }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
    >
      <Tooltip title={tooltip} placement="left">
        <Fab
          color={color}
          onClick={onClick}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 1000,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
            '&:hover': {
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
            },
            ...sx
          }}
        >
          {icon}
        </Fab>
      </Tooltip>
    </motion.div>
  );
};

export default FloatingActionButton; 
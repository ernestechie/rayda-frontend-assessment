import { Stack, Typography, Box, IconButton, Badge } from '@mui/material';
import React from 'react';
import { NotificationsOutlined } from '@mui/icons-material';

const Navbar = () => {
  return (
    <Stack
      component='nav'
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      sx={{ pb: '20px', borderBottom: '1px solid rgba(234, 236, 240, 1)' }}
    >
      <Box>
        <Typography component='h1' fontSize={30} fontWeight={600}>
          Welcome
        </Typography>
        <Typography>Your current sales auction and activity</Typography>
      </Box>
      <IconButton
        aria-label='notifications'
        sx={{
          background: '#fff',
          borderRadius: 2,
          '&:hover': {
            background: 'rgb(254, 254, 254)',
          },
        }}
      >
        <Badge
          badgeContent={2}
          color='secondary'
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <NotificationsOutlined />
        </Badge>
      </IconButton>
    </Stack>
  );
};

export default Navbar;

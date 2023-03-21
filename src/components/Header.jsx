import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import contentLogo from '../assets/content-logo.svg';

const Header = () => {
  return (
    <Box
      component='header'
      mt={6}
      mb={3}
      p={2}
      sx={{
        background: '#FFFFFF',
        border: '1px solid #EAECF0',
        boxShadow:
          '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
        borderRadius: 3,
      }}
    >
      {/* GRADIENT BOX */}
      <Box
        height={192}
        width='100%'
        sx={{
          background:
            'linear-gradient(127deg, rgba(158,49,233,1) 0%, rgba(203,105,214,1) 49%, rgba(253,230,124,1) 100%)',
          borderRadius: 3,
        }}
      ></Box>
      <Stack
        p={2}
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        justifyContent={{
          xs: 'flex-start',
          sm: 'flex-start',
          md: 'space-between',
        }}
        alignItems='flex-start'
      >
        <Stack
          gap={2}
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent={{
            xs: 'flex-start',
            sm: 'space-between',
          }}
          alignItems='flex-start'
        >
          <img src={contentLogo} alt='Content logo' className='content-logo' />
          <Box mb={2}>
            <Typography fontWeight={600} fontSize={{ xs: 20, sm: 20, md: 24 }}>
              Starts in: 3 days : 2 hours : 24 minutes{' '}
            </Typography>
            <Stack direction='row' gap={1} alignItems='center' mt={1}>
              <Button
                variant='contained'
                color='pale'
                disableElevation
                startIcon={<FiberManualRecordIcon fontSize='small' />}
                sx={{
                  borderRadius: 8,
                  color: 'rgba(181, 71, 8, 1)',
                  textTransform: 'capitalize',
                }}
                component='span'
              >
                Not Live
              </Button>
              <Typography>Layers Auction</Typography>
            </Stack>
          </Box>
        </Stack>
        {/* 'Dark' is a custom theme in main.jsx */}
        <Button
          variant='outlined'
          color='dark'
          disableElevation
          startIcon={<ThumbUpAltRoundedIcon />}
          sx={{ borderRadius: 2 }}
        >
          Accept Invite
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;

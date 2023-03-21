import React, { useState } from 'react';
import { Box, Divider, Grid, Stack, Typography, Button } from '@mui/material';
import ItemCard from './ItemCard';
import { useGetItemsQuery } from '../../api/apiSlice';

const ItemsList = () => {
  const { isLoading, data } = useGetItemsQuery();

  return (
    <Box
      mt={3}
      p={3}
      sx={{
        borderRadius: '12px',
        background: '#fff',
        border: '1px solid #EAECF0',
        boxShadow:
          '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
      }}
    >
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        mb={2}
      >
        <Typography fontWeight={600}>Featured Items</Typography>
        <Button
          variant='outlined'
          color='dark'
          disableElevation
          sx={{ borderRadius: 2 }}
        >
          View Auction
        </Button>
      </Stack>
      <Divider my={3} />
      {isLoading && <h1>Loading items...</h1>}
      {!isLoading && data && (
        <Grid
          container
          mx='auto'
          rowSpacing={{ xs: 2, sm: 2, lg: 3 }}
          columnSpacing={{ sm: 2, md: 2, lg: 3 }}
          columns={12}
          sx={{ marginTop: 20 }}
        >
          {data.data.map((item, index) => (
            <Grid
              item
              key={item.name + ' ' + index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              width='100%'
            >
              <ItemCard item={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ItemsList;

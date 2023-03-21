import React, { useState } from 'react';
import { Box, Divider, Grid, Stack, Typography, Button } from '@mui/material';
import ItemCard from './ItemCard';

const ItemsList = () => {
  const [items, setItems] = useState([
    {
      name: 'John Doe',
      title: 'Apple MacBook Air 13 M1 Chip 8GB 256GB 2020 Model - Rose Gold',
      bid: '₦795,000',
      image: 'https://i.ibb.co/h7Bts6w/Imagelaptop.png',
    },
    {
      name: 'Peter Doe',
      title: 'Apple MacBook Air 13 M1 Chip 8GB 256GB 2020 Model - Rose Gold',
      bid: '₦795,000',
      image: 'https://i.ibb.co/h7Bts6w/Imagelaptop.png',
    },
    {
      name: 'Mary Doe',
      title: 'Apple MacBook Air 13 M1 Chip 8GB 256GB 2020 Model - Rose Gold',
      bid: '₦795,000',
      image: 'https://i.ibb.co/h7Bts6w/Imagelaptop.png',
    },
    {
      name: 'Paul Doe',
      title: 'Samsung Galaxy A23, 4GB/128GB Memory, Android 12 - Balck',
      bid: '₦141,999',
      image: 'https://i.ibb.co/h7Bts6w/Imagelaptop.png',
    },
    {
      name: 'John Andrew',
      title: 'Modern Office Table Desk Computer Table Furniture',
      bid: '₦₦37,000',
      image: 'https://i.ibb.co/h7Bts6w/Imagelaptop.png',
    },
    {
      name: 'Abi Jones',
      title: 'Modern Office Table Desk Computer Table Furniture',
      bid: '₦37,000',
      image: 'https://i.ibb.co/h7Bts6w/Imagelaptop.png',
    },
    {
      name: 'John Doe',
      title: 'Apple MacBook Air 13 M1 Chip 8GB 256GB 2020 Model - Rose Gold',
      bid: '₦120,000',
      image: 'https://i.ibb.co/h7Bts6w/Imagelaptop.png',
    },
    {
      name: 'Andrew Doe',
      title: 'Phone 8 - 256GB, 4G LTE, Green (Refurbished)',
      bid: '₦141,999',
      image: 'https://i.ibb.co/h7Bts6w/Imagelaptop.png',
    },
  ]);

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
      <Grid
        container
        mx='auto'
        rowSpacing={{ xs: 2, sm: 2, lg: 3 }}
        columnSpacing={{ sm: 2, md: 2, lg: 3 }}
        columns={12}
        sx={{ marginTop: 20 }}
      >
        {items.map((item, index) => (
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
    </Box>
  );
};

export default ItemsList;

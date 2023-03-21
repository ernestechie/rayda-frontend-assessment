import { Avatar, Button, Card, Stack, Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        p: 1.5,
        boxShadow: 'none',
        border: '1px solid #D0D5DD',
        borderRadius: 3,
        mx: 'auto',
        mt: 2,
      }}
    >
      <CardMedia
        component='img'
        alt='green iguana'
        height='140'
        image={item.image}
        sx={{ borderRadius: 3 }}
      />
      <CardContent sx={{ px: 0 }}>
        <Stack direction='row' alignItems='center' gap={1}>
          <Avatar sx={{ width: 32, height: 32 }}>
            {/* Split the names into array, using the space as a separator. Then return the first letter of each array item */}
            {item.name.split(' ')[0][0]}
            {item.name.split(' ')[1][0]}
          </Avatar>
          <Typography fontWeight={600} fontSize={14}>
            {item.name}{' '}
            <Typography fontSize='inherit' component='span'>
              (Highest Bidder)
            </Typography>
          </Typography>
        </Stack>
        <Typography color='dark' fontWeight={600} fontSize={14} my={2}>
          {/* The below code truncates the text if more than 50 characters */}
          {item.title.slice(0, 50) + '...'}
        </Typography>
        <Stack direction='row' alignItems='center' gap={1}>
          <Typography fontSize={14}>Current Bid:</Typography>
          <Typography fontWeight={600} fontSize={14}>
            {item.bid}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ px: 0 }}>
        <Button
          variant='contained'
          color='primary'
          disableElevation
          fullWidth
          sx={{ borderRadius: 2, p: 1 }}
        >
          Add to wishlist
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;

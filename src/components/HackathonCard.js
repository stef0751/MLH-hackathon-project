import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const HackathonCard = ({ name, date, location }) => (
  <Card sx={{ margin: 2, backgroundColor: '#f0f8ff' }}>
    <CardContent>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="body2">Date: {date}</Typography>
      <Typography variant="body2">Location: {location}</Typography>
    </CardContent>
  </Card>
);

export default HackathonCard;

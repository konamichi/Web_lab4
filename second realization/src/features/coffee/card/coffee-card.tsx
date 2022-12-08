import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../../shared/store'

export const CoffeeCard = () => {
  const { currentCoffee } = useAppSelector(state => state.coffee)
  return (
    <Card sx={{width: '300px', background: 'linear-gradient(0deg, rgba(208, 188, 255, 0.05), rgba(208, 188, 255, 0.05)), #1C1B1F;'}}>
      <CardMedia height={200} image={currentCoffee.image} component={'img'}/>
      <CardContent>
        <Typography variant='h6'>{currentCoffee.title}</Typography>
        <Typography>{currentCoffee.description}</Typography>
      </CardContent>
    </Card>
  )
}

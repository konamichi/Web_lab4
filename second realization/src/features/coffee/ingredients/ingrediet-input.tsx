import { Checkbox, FormControl, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../shared/store'
import { changeIngredient, Ingredient as IngredientType } from '../coffee-slice'

interface IngredientProps extends IngredientType { 
  onChange: () => void 
}

export const Ingredient: React.FC<IngredientProps> = ( {name, selected, shortname, onChange} ) => {

  return (
    <Stack direction="row" alignItems='center' justifyContent={'space-between'}>
        <Typography sx={{
          width: '50px',
          height: '50px',
          borderRadius: '25px',
          backgroundColor: 'plum',
          color: 'white',
          textAlign: 'center',
          lineHeight: '48px'
        }}>
          {shortname}
        </Typography>
        <Typography sx={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
          {name}
        </Typography>
        <Checkbox checked={selected} onChange={onChange} />
      </Stack>
    )
}

export const Ingredients = () => {
  const { ingredientsList } = useAppSelector(state => state.coffee)
  const dispatch = useAppDispatch()

  return (
    <FormControl>
      <Grid columns={12} container spacing={1}>
      { ingredientsList.map((ingr, idx) => 
          (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Ingredient 
                onChange={() => { dispatch(changeIngredient(ingr.name)) }} 
                key={ingr.name} 
                {...ingr} 
              /> 
            </Grid>
          )
      ) }
      </Grid>
    </FormControl>
  )
}
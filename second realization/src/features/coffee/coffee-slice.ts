import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import coffies from './coffies.json'
import {shallowEqual} from 'react-redux'

export type Coffee = {
  id: number,
  title: string,
  description: string,
  ingredients: string[],
  image: string
}

export type Ingredient = {
  name: string,
  shortname: string,
  selected: boolean
}

type CoffeeState = {
  ingredientsList: Ingredient[],
  coffies: Coffee[],
  currentCoffee: Coffee
}

const byDefault: Coffee = {
  title: 'Not found',
  description: 'Coffee is not found in our list',
  id: -1,
  image: 'https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png',
  ingredients: [

  ]
}

const initialState: CoffeeState = {
  ingredientsList: [
    {
      name: "Coffee",
      shortname: 'Co',
      selected: false,
    },
    {
      name: "Espresso",
      shortname: 'Es',
      selected: false
    },
    { 
      name: "Steamed Milk",
      shortname: "St",
      selected: false
    },
    { 
      name: "Foam",
      shortname: "Fo",
      selected: false
    },
    { 
      name: "Hot Water",
      shortname: "HW",
      selected: false
    },
    { 
      name: "1oz Espresso",
      shortname: "1E",
      selected: false
    },
    { 
      name: "2oz Espresso",
      shortname: "2E",
      selected: false
    },
    { 
      name: "1oz Steamed Milk",
      shortname: "1S",
      selected: false
    },
    { 
      name: "Foamed milk",
      shortname: "FM",
      selected: false
    },
    { 
      name: "Long pulled espresso",
      shortname: "LE",
      selected: false
    },
    { 
      name: "Chocolate",
      shortname: "Ch",
      selected: false
    },
    { 
      name: "Short pulled espresso",
      shortname: "SE",
      selected: false
    },
    { name: "Ice cream",
      shortname: "IC",
      selected: false
    },
    { 
      name: "Whiskey",
      shortname: "Wh",
      selected: false
    },
    { 
      name: "Sugar",
      shortname: "Su",
      selected: false
    },
    { 
      name: "Cream",
      shortname: "Cr",
      selected: false
    },
    { 
      name: "Traditional",
      shortname: "Tr",
      selected: false
    },
    { 
      name: "Milk",
      shortname: "Mi",
      selected: false
    },
    { 
      name: "Sweet",
      shortname: "Sw",
      selected: false
    },
    { 
      name: "Panela",
      shortname: "Pa",
      selected: false
    },
  ],
  coffies,
  currentCoffee: byDefault,
}

const coffeeSlice = createSlice({
  name: 'coffeeSlice',
  initialState,
  reducers: {
    changeIngredient: (state, action: PayloadAction<string>) => {
      const query = action.payload
      
      const candidateIngredient = state.ingredientsList.find(el => el.name === query)
      if (!query || !candidateIngredient) return

      candidateIngredient.selected = !candidateIngredient.selected

      const currentIngredients = state.ingredientsList.filter(el => el.selected).map(el => el.name)
      
      state.currentCoffee = state.coffies.find(el => shallowEqual(el.ingredients, currentIngredients)) || byDefault
    }
  },
})

export default coffeeSlice.reducer
export const { changeIngredient } = coffeeSlice.actions
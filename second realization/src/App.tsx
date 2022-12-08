import React from 'react';
import { Provider } from 'react-redux';
import { Ingredients } from './features/coffee';
import { CoffeeCard } from './features/coffee/card/coffee-card';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import store from './shared/store';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      
        <Stack direction={'column'} alignItems='center' sx={{mb: '48px'}}>
          <Typography variant='h5'>What's the coffee?</Typography>
          <Typography variant='body2'>We mix the ingredients and get a drink</Typography>
        </Stack>
        
        <Ingredients />
        <Stack alignItems='center' sx={{mt: '24px'}}><CoffeeCard /></Stack>
    </Provider>
  );
}

export default App;

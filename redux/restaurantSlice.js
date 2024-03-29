import { createSlice } from '@reduxjs/toolkit'
const initialState =  {
   restaurant : {
    id : null,
    imgUrl : null,
    short_description : null,
    title : null,
    rating : null,
    genere : null,
    address : null,
    dishes : null
   },
  };

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
   setRestaurant : (state,action) => {
    state.restaurant = action.payload;
   }
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './feature/recipesSlice';
import cartReducer from './feature/cartSilce';
export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    cart: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

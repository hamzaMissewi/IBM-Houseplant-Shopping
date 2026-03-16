import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export interface RootState {
  cart: {
    items: Array<{
      id: number;
      name: string;
      price: number;
      thumbnail: string;
      category: string;
      quantity: number;
    }>;
    totalItems: number;
    totalCost: number;
  };
}

export type AppDispatch = typeof store.dispatch;

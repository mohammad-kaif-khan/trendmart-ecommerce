



import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";

const saveState = (state) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(state)
  );
};

const loadState = () => {
  const data = localStorage.getItem("cart");

  if (!data) return undefined;

  return JSON.parse(data);
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
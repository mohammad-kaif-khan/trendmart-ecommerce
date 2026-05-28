// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";

// export default configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });


import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const saveState = (state) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(state)
  );
};

const loadState = () => {
  const data =
    localStorage.getItem("cart");

  if (!data) return undefined;

  return JSON.parse(data);
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
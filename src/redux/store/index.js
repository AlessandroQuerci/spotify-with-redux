import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../reducers/playerReducer";
import heartReducer from "../reducers/heartReducer";

const store = configureStore({
  reducer: {
    player: playerReducer,
    heart: heartReducer,
  },
});

export default store;

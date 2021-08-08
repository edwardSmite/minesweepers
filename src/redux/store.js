import { configureStore } from '@reduxjs/toolkit'
import myReducer from "./slice"

export const store = configureStore({
  reducer: {
    generator: myReducer,
  },
})
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const slice = createSlice({
  name: 'generator',
  initialState,
  reducers: {
    generator: (state, action) => {
      const newArray = [Math.floor(Math.random * action.payload.rows), Math.floor(Math.random * action.payload.columns)] 
      state.push(newArray)
    },
  },
})

// Action creators are generated for each case reducer function
export const { generator } = slice.actions

export default slice.reducer
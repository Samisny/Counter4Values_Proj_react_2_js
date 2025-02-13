

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export const counterSlice = createSlice({name: 'counter', initialState: {count: 0},
  
  reducers: {
            increment: (state) => {state.count += 1},
            decrement: (state) => {state.count -= 1},
            decrementByAmount: (state) => {state.count -= 5},
            incrementByAmount: (state, action) => {state.count += action.payload},
            },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions

export default counterSlice.reducer
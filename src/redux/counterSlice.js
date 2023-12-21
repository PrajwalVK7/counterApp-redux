//here we define the action and reducer

import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counterApp',
    initialState: {
        value: 0,
    },
    reducers: {
        //actions are created inside this reducers key. (Actions are logics)
        //logic to update the data
        increment: (state) => {
            state.value = state.value + 1;

        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
})

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
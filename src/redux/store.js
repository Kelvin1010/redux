import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        counter: 0
    },
    reducers: {
        Increment(state,action) {
            state.counter++;
        },
        Decrement(state,action) {
            state.counter--;
        },
        addBy(state,action) {
            state.counter += action.payload;
        }
    }
})

export const actions = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store;
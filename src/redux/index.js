// import {createStore} from 'redux';


// const reducerFn = (state= {counter: 0},action) => {

//     //Synchronous funtion
//     //We should not mutate the original state
//     if(action.type === 'INC') {
//         return {counter: state.counter+1}
//     } else if(action.type === 'DEC') {
//         return {counter: state.counter-1}
//     }

//     if(action.type === 'ADD') {
//         return {counter: state.counter + action.payload}
//     }

//     return state;
// }



// const store = createStore(reducerFn);
// export default store;

// ++ 

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
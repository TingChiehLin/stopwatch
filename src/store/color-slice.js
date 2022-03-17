import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 'blue'
}

const colorSlice = createSlice({
    name: "colorScheme",
    initialState,
    reducers: {
        changeColor(state, action) {
            state.value = action.payload
        },
    }
})

export const colorActions = colorSlice.actions;

export default colorSlice.reducer;



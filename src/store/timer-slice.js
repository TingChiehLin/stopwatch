import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isTimeOn: false,
    isReset: false,
    timeRecords: [],
}

const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        startTimer(state) {
            state.isTimeOn = true
            state.isReset = false
        },
        pauseTimer(state) {
            state.isTimeOn = !state.isTimeOn
            state.isReset = false
        },
        resetTimer(state) {
            state.isReset = true
            state.timeRecords = []
        },
        lapTimerHandler(state, action) {
            state.timeRecords.push(action.payload)
        }
    }
});

export const timerActions = timerSlice.actions;
export default timerSlice.reducer;



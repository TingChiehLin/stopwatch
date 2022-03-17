import {configureStore} from "@reduxjs/toolkit";

import timerReducer from './timer-slice';
import colorReducer from './color-slice';

const store = configureStore({
    reducer: {timer: timerReducer, color: colorReducer}
});

export default store;

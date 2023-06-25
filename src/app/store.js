import { configureStore } from '@reduxjs/toolkit';

import terminalSlice from '../features/terminalSlice';
import districtSlice from '../features/districtSlice';
import profileSlice from '../features/profileSlice';
import loginSlice from '../features/loginSlice';

export const store = configureStore({
    reducer: {
        terminal: terminalSlice,
        district: districtSlice,
        profile: profileSlice,
        login: loginSlice
    }
})

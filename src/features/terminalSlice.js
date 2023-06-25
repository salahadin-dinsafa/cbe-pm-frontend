import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    terminals: []
}


export const terminalSlice = createSlice({
    name: 'terminal',
    initialState,
    reducers: {
        addTerminals: (state, action) => {
            state.terminals = action.payload
        }
    }
})

export const {addTerminals} =   terminalSlice.actions;
export default terminalSlice.reducer; 
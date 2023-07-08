import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    date: null,
    searchValue: null,
    district: 'DIRE DAWA',
    terminals: []
}


export const terminalSlice = createSlice({
    name: 'terminal',
    initialState,
    reducers: {
        addTerminals: (state, action) => {
            state.terminals = action.payload
        },
        setDate: (state, action) => {
            state.date = action.payload
        },
        setDistrict: (state, action) => {
            state.district = action.payload;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        }
    }
})

export const { addTerminals, setDate, setDistrict, setSearchValue } = terminalSlice.actions;
export default terminalSlice.reducer; 
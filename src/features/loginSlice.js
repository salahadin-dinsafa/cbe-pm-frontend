import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLogged: null
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIsLogged: (state, action) => {
            state.isLogged = action.payload;
        },

    }
})

export const { setIsLogged } = loginSlice.actions;
export default loginSlice.reducer;
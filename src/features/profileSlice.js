import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isBlured: false,
    user: {},
    avatar: null
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setIsBlured: (state, action) => {
            state.profile = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setAvatar: (state, action) => {
            state.avatar = action.payload;
        }
    }
})

export const { setIsBlured, setUser, setAvatar } = profileSlice.actions;
export default profileSlice.reducer;
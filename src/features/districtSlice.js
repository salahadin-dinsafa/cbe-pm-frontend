import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    districts: []
}

export const districtSlice = createSlice({
    name: 'district',
    initialState,
    reducers: {
        addDistricts: (state, action) => {
            state.districts = action.payload;
        }
    }
})

export const {addDistricts} = districtSlice.actions;
export default districtSlice.reducer;

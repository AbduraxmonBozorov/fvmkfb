import { createSlice } from "@reduxjs/toolkit";


const tokenSlice = createSlice({
    name: "token",
    initialState: "none",
    reducers: {
        getToken: () => localStorage.getItem("token") ? localStorage.getItem("token") : "none"
    }
})


export const {getToken} = tokenSlice.actions;
export default tokenSlice.reducer;
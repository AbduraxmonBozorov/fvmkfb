import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const registerUser = createAsyncThunk(
    'user/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/user/register`, userData,
                { headers: { "Content-Type": "application/json" } });
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default userSlice.reducer;

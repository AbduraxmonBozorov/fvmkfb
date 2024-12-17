import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const createTask = createAsyncThunk(
    "task/create",
    async (taskData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/task`, taskData);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const fetchTasks = createAsyncThunk(
    "task/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/task`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const updateTaskStatus = createAsyncThunk(
    "task/updateStatus",
    async (statusData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/task/status`, statusData);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const completeTask = createAsyncThunk(
    "task/complete",
    async (fileData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/task/complete`, fileData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const fetchTaskById = createAsyncThunk(
    "task/fetchById",
    async (taskId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/task/${taskId}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const updateTask = createAsyncThunk(
    "task/update",
    async ({ id, updatedData }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${BASE_URL}/task/${id}`, updatedData);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deleteTask = createAsyncThunk(
    "task/delete",
    async (taskId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`${BASE_URL}/task/${taskId}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: [],
        task: null,
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tasks.push(action.payload);
            })
            .addCase(createTask.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchTasks.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateTaskStatus.fulfilled, (state, action) => {
                state.tasks = state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task
                );
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
            })
            .addCase(fetchTaskById.fulfilled, (state, action) => {
                state.task = action.payload;
            });
    },
});

export default taskSlice.reducer;

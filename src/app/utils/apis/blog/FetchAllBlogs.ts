import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchAllBlogs = createAsyncThunk('fetchAllBlogs', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch('api/blogs', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        return data

    } catch (err: any) {
        rejectWithValue(err.message)
    }
})
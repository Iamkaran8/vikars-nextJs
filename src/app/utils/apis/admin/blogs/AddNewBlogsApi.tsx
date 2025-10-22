import { createAsyncThunk } from "@reduxjs/toolkit";

interface Payload {
    title: string,
    description: string,
    image: string,
    date: string,
    category: string

}

export const AddNewBlogsApi = createAsyncThunk('add/NewBlog', async (Payload: Payload, { rejectWithValue }) => {
    try {
        const response = await fetch('/api/blogs', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(Payload)
        })
        if (!response.ok) {
            return rejectWithValue("Failed To Post");
        }
        const data = response.json()
        return data
    }
    catch (err: unknown) {
        return rejectWithValue(err)
    }
})
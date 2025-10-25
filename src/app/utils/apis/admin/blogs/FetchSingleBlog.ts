import { createAsyncThunk } from "@reduxjs/toolkit";

interface PayloadType {
    id: string;
}

export const FetchSingleBlog = createAsyncThunk(
    "Fetch/SingleBlog",
    async ({ id }: PayloadType, { rejectWithValue }) => {
        try {
            const response = await fetch(`/api/blogs/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });


            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData?.message || "Failed to fetch blog");
            }

            // Parse response data
            const data = await response.json();
            return data;
        } catch (error: unknown) {
            return rejectWithValue(error || "Something went wrong");
        }
    }
);

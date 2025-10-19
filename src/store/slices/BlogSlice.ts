import { createSlice } from "@reduxjs/toolkit";
import { FetchAllBlogs } from "@/app/utils/apis/blog/FetchAllBlogs";

export interface Blog {
    _id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    category?: string; // ✅ optional
    createdAt?: string;
    updatedAt?: string;
    __v?: string;
}

export interface BlogState {
    allBlogs: Blog[];
    loading: boolean;
    error: string | null;
}

const initialState: BlogState = {
    allBlogs: [],
    loading: false,
    error: null,
};

export const BlogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FetchAllBlogs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(FetchAllBlogs.fulfilled, (state, action) => {
                state.allBlogs = action.payload.blogs;
                console.log("printing all the state", state.allBlogs);
                state.loading = false;
                state.error = null;
            })
            .addCase(FetchAllBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = (action.payload as string) ?? "Failed to fetch blogs";
            });
    },
});

export default BlogSlice.reducer;

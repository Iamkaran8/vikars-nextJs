// src/store/slices/BlogSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { FetchAllBlogs, Blog } from "@/app/utils/apis/blog/FetchAllBlogs";

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
        // ensure __v and category types are correct
        state.allBlogs = action.payload.blogs.map((blog) => ({
          ...blog,
          __v: blog.__v ?? 0,
          category: blog.category ?? "General",
        }));
        state.loading = false;
        state.error = null;
      })
      .addCase(FetchAllBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to fetch blogs";
      });
  },
});

export default BlogSlice.reducer;

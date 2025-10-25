// // src/store/slices/BlogSlice.ts
// import { createSlice } from "@reduxjs/toolkit";
// import { FetchAllBlogs, Blog } from "@/app/utils/apis/blog/FetchAllBlogs";

// export interface BlogState {
//   allBlogs: Blog[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: BlogState = {
//   allBlogs: [],
//   loading: false,
//   error: null,
// };

// export const BlogSlice = createSlice({
//   name: "blog",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(FetchAllBlogs.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(FetchAllBlogs.fulfilled, (state, action) => {
//         // ensure __v and category types are correct
//         state.allBlogs = action.payload.blogs.map((blog) => ({
//           ...blog,
//           __v: blog.__v ?? 0,
//           category: blog.category ?? "General",
//         }));
//         state.loading = false;
//         state.error = null;
//       })
//       .addCase(FetchAllBlogs.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload ?? "Failed to fetch blogs";
//       });
//   },
// });

// export default BlogSlice.reducer;



// src/store/slices/BlogSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { FetchAllBlogs, Blog } from "@/app/utils/apis/blog/FetchAllBlogs";
import { FetchSingleBlog } from "@/app/utils/apis/admin/blogs/FetchSingleBlog";


export interface BlogState {
  allBlogs: Blog[];
  singleBlog: Blog | null;
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  allBlogs: [],
  singleBlog: null,
  loading: false,
  error: null,
};

export const BlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ----- Fetch All Blogs -----
    builder
      .addCase(FetchAllBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchAllBlogs.fulfilled, (state, action) => {
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
        state.error = (action.payload as string) ?? "Failed to fetch blogs";
      });

    // ----- Fetch Single Blog -----
    builder
      .addCase(FetchSingleBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchSingleBlog.fulfilled, (state, action) => {
        state.singleBlog = action.payload.blog;
        state.loading = false;
        state.error = null;
      })
      .addCase(FetchSingleBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) ?? "Failed to fetch single blog";
      });
  },
});

export default BlogSlice.reducer;

// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const FetchAllBlogs = createAsyncThunk('fetchAllBlogs', async (_, { rejectWithValue }) => {
//     try {
//         const response = await fetch('api/blogs', {
//             method: "GET",
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })

//         const data = await response.json()
//         return data

//     } catch (err: null | any | string) {
//         rejectWithValue(err.message)
//     }
// })


// src/app/utils/apis/blog/FetchAllBlogs.ts
import { createAsyncThunk } from "@reduxjs/toolkit";

// Blog interface matches API response
export interface Blog {
  _id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number; // matches MongoDB API
}

// Response from API
interface FetchBlogsResponse {
  blogs: Blog[];
}

// Async thunk to fetch all blogs
export const FetchAllBlogs = createAsyncThunk<
  FetchBlogsResponse,       // return type
  void,                     // argument type
  { rejectValue: string }   // rejectWithValue type
>(
  "fetchAllBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/blogs", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        return rejectWithValue("Failed to fetch blogs");
      }

      const data: FetchBlogsResponse = await response.json();
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong";
      return rejectWithValue(errorMessage);
    }
  }
);

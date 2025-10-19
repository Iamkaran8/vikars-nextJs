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


import { createAsyncThunk } from "@reduxjs/toolkit";

interface Blog {
    _id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    category?: string;
    createdAt: string;
    updatedAt: string;
    __v?: number;
}

interface FetchBlogsResponse {
    blogs: Blog[];
}

export const FetchAllBlogs = createAsyncThunk<
    FetchBlogsResponse,          // ✅ return type (fulfilled)
    void,                        // ✅ argument type (since you’re not passing any)
    { rejectValue: string }      // ✅ type for rejectWithValue
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
        } catch (err: unknown) {
            const errorMessage =
                err instanceof Error ? err.message : "Something went wrong";
            return rejectWithValue(errorMessage);
        }
    }
);

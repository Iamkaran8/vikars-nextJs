import { FetchAllBlogs } from "@/app/utils/apis/blog/FetchAllBlogs";
import { createSlice } from "@reduxjs/toolkit";



interface allBlogsType {
    _id: string,
    title: string,
    description: string,
    image: string,
    date: string,
    category: string,
    createdAt: string,
    updatedAt: string,
    __v: string
}
interface blogType {
    allBlogs: allBlogsType[],
    loading: boolean,
    error: null | string | any
}


const initialState: blogType = {
    allBlogs: [],
    loading: false,
    error: null
}

export const BlogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(FetchAllBlogs.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(FetchAllBlogs.fulfilled, (state, action) => {
                state.allBlogs = action.payload.blogs;
                console.log("printing all the state", state.allBlogs)
                state.loading = false;
                state.error = null
            })
            .addCase(FetchAllBlogs.rejected, (state, action) => {
                state.error = action.payload
            })
    }
})



export default BlogSlice.reducer;

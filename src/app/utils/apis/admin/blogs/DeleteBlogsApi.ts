import { createAsyncThunk } from "@reduxjs/toolkit";

interface Payload {
  id: string;
}

export const DeleteBlogsApi = createAsyncThunk(
  "Delete/blog",
  async ({ id }: Payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      const data = await response.json();
      return data;
    } catch (err: any) {
        // return custom error message
        return rejectWithValue(err.message || "Something went wrong");
    }
  }
);

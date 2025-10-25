


// import { createAsyncThunk } from "@reduxjs/toolkit";

// interface AdminLoginPayload {
//   email: string;
//   password: string;
// }

// interface AdminLoginResponse {
//   token: string;
//   admin: {
//     id: string;
//     name: string;
//     email: string;
//   };
// }

// export const AdminLogin = createAsyncThunk<
//   AdminLoginResponse,
//   AdminLoginPayload,
//   { rejectValue: string }
// >(
//   "auth/login",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await fetch('/api/auth/login', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const errData = await response.json();
//         return rejectWithValue(errData.message || "Login failed");
//       }

//       const data: AdminLoginResponse = await response.json();
//       return data;
//     } catch (err: unknown) {
//       const errorMessage =
//         err instanceof Error ? err.message : "Something went wrong";
//       return rejectWithValue(errorMessage);
//     }
//   }
// );


import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface AdminLoginPayload {
  email: string;
  password: string;
}

export interface AdminLoginResponse {
  _id: string;
  name: string;
  email: string;
  type: "Admin" | "User";
  token: string;
}

export const AdminLogin = createAsyncThunk<
  AdminLoginResponse,      // ✅ return type (fulfilled)
  AdminLoginPayload,       // ✅ argument type (payload)
  { rejectValue: string }  // ✅ reject type
>(
  "auth/AdminLogin",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/admin/login", credentials);
      return data as AdminLoginResponse;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

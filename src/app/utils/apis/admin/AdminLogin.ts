// // import { createAsyncThunk } from '@reduxjs/toolkit';

// // interface LoginPayload {
// //     email: string;
// //     password: string;
// // }

// // interface LoginResponse {
// //     email: string;
// //     token: string;
// // }

// // export const AdminLogin = createAsyncThunk<LoginResponse, LoginPayload>(
// //     'auth/AdminLogin',
// //     async (payload, { rejectWithValue }) => {
// //         try {
// //             const res = await fetch('/api/auth/login', {
// //                 method: 'POST',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify(payload),
// //             });

// //             const data = await res.json();

// //             if (!res.ok) return rejectWithValue(data.error || 'Invalid credentials');

// //             return { email: payload.email, token: data.token };
// //         } catch (err: string | null | any) {
// //             return rejectWithValue(err.message);
// //         }
// //     }
// // );


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
//   AdminLoginResponse,           // ✅ return type
//   AdminLoginPayload,            // ✅ argument type
//   { rejectValue: string }       // ✅ rejected value type
// >(
//   "auth/login",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/admin/login`, {
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

interface AdminLoginPayload {
  email: string;
  password: string;
}

interface AdminLoginResponse {
  token: string;
  admin: {
    id: string;
    name: string;
    email: string;
  };
}

export const AdminLogin = createAsyncThunk<
  AdminLoginResponse,           // return type
  AdminLoginPayload,            // argument type
  { rejectValue: string }       // rejected value type
>(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errData = await response.json();
        return rejectWithValue(errData.message || "Login failed");
      }

      const data: AdminLoginResponse = await response.json();
      return data;
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong";
      return rejectWithValue(errorMessage);
    }
  }
);

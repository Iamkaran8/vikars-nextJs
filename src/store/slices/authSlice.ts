// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AdminLogin } from "@/app/utils/apis/admin/AdminLogin";



// export interface User {
//   _id: string;
//   name: string;
//   email: string;
//   type: "Admin" | "User"; 
//   token?: string;
// }

// interface AuthState {
//   isAuthenticated: boolean;
//   user: User | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   isAuthenticated: false,
//   user: null,
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(AdminLogin.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(AdminLogin.fulfilled, (state, action: PayloadAction<User>) => {
//         state.loading = false;
//         state.isAuthenticated = true;
//         state.user = action.payload;
//         state.error = null;
//       })
//       .addCase(AdminLogin.rejected, (state, action) => {
//         state.loading = false;
//         state.isAuthenticated = false;
//         state.error = action.payload ?? "Login failed";
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";
import { AdminLogin, AdminLoginResponse } from "@/app/utils/apis/admin/AdminLogin";

export interface User {
  _id: string;
  name: string;
  email: string;
  type: "Admin" | "User";
  token?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AdminLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AdminLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload; // ✅ no type error now
        state.error = null;
      })
      .addCase(AdminLogin.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload ?? "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

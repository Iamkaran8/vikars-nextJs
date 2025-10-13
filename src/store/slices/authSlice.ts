import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdminLogin } from '@/app/utils/apis/admin/AdminLogin';


interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
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
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; token: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
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
        state.user = action.payload;
        state.error = null;
      })
      .addCase(AdminLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
      });
  },
});


export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

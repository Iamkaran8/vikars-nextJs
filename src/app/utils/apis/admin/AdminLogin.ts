import { createAsyncThunk } from '@reduxjs/toolkit';

interface LoginPayload {
    email: string;
    password: string;
}

interface LoginResponse {
    email: string;
    token: string;
}

export const AdminLogin = createAsyncThunk<LoginResponse, LoginPayload>(
    'auth/AdminLogin',
    async (payload, { rejectWithValue }) => {
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) return rejectWithValue(data.error || 'Invalid credentials');

            return { email: payload.email, token: data.token };
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);

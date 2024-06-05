import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '@/store';

interface AuthState {
    isAuthenticated: boolean,
    username: string | null,
}

const initialState: AuthState = {
    isAuthenticated: false,
    username: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true,
            state.username = action.payload
        },
        logout: (state) => {
            state.isAuthenticated = false,
            state.username = null
        }
    }
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer;
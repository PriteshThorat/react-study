import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    status: false,
    userData: null
}

const authSice = createSlice({
    name: 'auth',
    initalState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});

export const {login, logout} = authSice.actions;

export default authSice.reducer;
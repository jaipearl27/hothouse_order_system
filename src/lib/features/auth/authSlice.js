const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    userData: null,
    isUserLoggedIn: false,
    forgetPasswordEmail: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setForgetPasswordEmail: (state, action) => {
            state.forgetPasswordEmail = action.payload
        },
        userLogout: (state, action) => {
            // localStorage.removeItem("userData")
            state.isUserLoggedIn = false
            state.userData = null
        }
    }
})


export const { getUserData, setForgetPasswordEmail, userLogout } = authSlice.actions;

export default authSlice.reducer;
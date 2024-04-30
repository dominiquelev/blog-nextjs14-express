
import { User } from "@/types/user.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";



const initialState: User = {
    id: 0,
    fullName: "",
    email: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginAction: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id,
            state.email = action.payload.email,
                state.fullName = action.payload.fullName
        },
        logoutAction: (state) => {
            state.id = 0
            state.email = "",
            state.fullName = ""
        },
    },
});

export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;
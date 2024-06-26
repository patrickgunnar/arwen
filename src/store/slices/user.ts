import { createSlice } from "@reduxjs/toolkit";

export type UserType = {
    email: string;
    username: string;
    organizationName: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
};

const initialState: UserType = {
    username: "",
    email: "",
    organizationName: "",
    firstName: "",
    lastName: "",
    imageUrl: "",
    createdAt: "",
    updatedAt: "",
};

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (_, action) => {
            return { ...action.payload };
        },
    },
});

export const { setUser } = user.actions;
export default user.reducer;

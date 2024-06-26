import { createSlice } from "@reduxjs/toolkit";

export type UserType = {
    email: string;
    username: string;
    organizationName: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
};

const initialState: UserType = {
    username: "",
    email: "",
    organizationName: "",
    firstName: "",
    lastName: "",
    imageUrl: "",
    createdAt: new Date(),
    updatedAt: new Date(),
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

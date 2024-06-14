import { createSlice } from "@reduxjs/toolkit";

export interface Language {
    Home: {
        title: string;
        description: string;
    };
}

const initialState: Language | {} = {};

const language = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (_, action) => {
            return { ...action.payload };
        },
    },
});

export const { setLanguage } = language.actions;
export default language.reducer;

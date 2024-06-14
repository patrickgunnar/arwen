import { configureStore } from "@reduxjs/toolkit";

import language from "./slices/language";

const store = configureStore({
    reducer: {
        language,
    },
});

export type StoreType = ReturnType<typeof store.getState>;
export default store;

import { configureStore } from "@reduxjs/toolkit";

import language from "./slices/language";
import user from "./slices/user";

const store = configureStore({
    reducer: {
        language,
        user,
    },
});

export type StoreType = ReturnType<typeof store.getState>;
export default store;

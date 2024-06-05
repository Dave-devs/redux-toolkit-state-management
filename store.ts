import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";
import TodoSlice from "./slices/TodoSlice";
import AuthSlice from "./slices/AuthSlice";
import ThemeSlice from "./slices/ThemeSlice";
import ProfileSlice from "./slices/ProfileSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    todo: TodoSlice,
    auth: AuthSlice,
    theme: ThemeSlice,
    profile: ProfileSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
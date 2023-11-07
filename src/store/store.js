import { configureStore } from "@reduxjs/toolkit";
import EventDetailSlice from "./EventDetailSlice";


export const store = configureStore({
  reducer: {
    eventDetail: EventDetailSlice,
  },
});

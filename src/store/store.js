import { configureStore } from "@reduxjs/toolkit";
import EventDetailSlice from "./EventDetailSlice";
import  SearchSlice  from "./SearchSlice";



export const store = configureStore({
  reducer: {
    eventDetail: EventDetailSlice,
    name: EventDetailSlice,
    allEvents: SearchSlice,
    filtered: SearchSlice,
  },
});

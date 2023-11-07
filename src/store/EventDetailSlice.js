import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// get data from fake endpoint for event detail page.

const initialState = {
    eventDetail: [],
}

export const getEventDetail = createAsyncThunk("get events", async() => {
    const response = await axios.get("https://restcountries.com/v3.1/name/turkey");
    return response.data[0];
})

export const eventDetailSlice = createSlice({
    name: "eventDetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
         builder.addCase(getEventDetail.fulfilled, (state,action) => {
            state.eventDetail = action.payload;
         })
    }
})


export default eventDetailSlice.reducer;
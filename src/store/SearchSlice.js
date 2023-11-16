import {createSlice, createAsyncThunk } from  "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    allEvents: [],
    filtered: [],
    keyword: '',
}

export const getAllEvents = createAsyncThunk("get-all-events", async()=> {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
})

export const searchSlice = createSlice({
    name: "searchResult",
    initialState,
    reducers: {
        getSearchWord: (state,action) => {

          state.keyword = action.payload.toLowerCase();
          console.log(state.keyword);
        },
        
       filterEvents: (state) => {
        state.filtered = state.allEvents.filter((event) => 
        event.name.common.toLowerCase().includes(state.keyword));
       },

    },


    extraReducers: (builder) => {
        builder.addCase(getAllEvents.fulfilled, (state,action) => {
            state.allEvents = action.payload;
        })
    }
})

export const {getSearchWord, filterEvents } = searchSlice.actions;

export default searchSlice.reducer;
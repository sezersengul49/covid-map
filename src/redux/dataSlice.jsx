import { createSlice } from "@reduxjs/toolkit";
import { getCountryData } from "./actions";

const initialState = {
  data: null,
  isLoading: true,
  error: null,
};

const covidSlice = createSlice({
  name: "covid",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCountryData.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getCountryData.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    builder.addCase(getCountryData.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.data = payload;
    });
  },
});

export default covidSlice.reducer;

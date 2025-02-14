"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLibraries } from "./librarysApi";

// Initial State
const initialState = {
  libraries: [],
  isLoading: false,
  isError: false,
  error: null,
};

// Async Thunk for fetching libraries
export const getLibraries = createAsyncThunk(
  "libraries/getLibraries",
  async (searchValue = "") => {
    try {
      const libraries = await fetchLibraries(searchValue);
      return libraries;
    } catch (error) {
      throw new Error(error.message || "Failed to fetch libraries");
    }
  }
);

// Library Slice
const librarySlice = createSlice({
  name: "libraries",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getLibraries.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(getLibraries.fulfilled, (state, action) => {
        state.libraries = action.payload;
        console.log(action.payload);

        state.isLoading = false;
      })
      .addCase(getLibraries.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default librarySlice.reducer;

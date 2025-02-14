"use client";
import { configureStore } from "@reduxjs/toolkit";
import librarySlice from '../features/librarys/librarySlice'; // librarySlice এক্সপোর্ট করার পর।

const store = configureStore({
  reducer: {
    libraries: librarySlice
  }
});

export default store;

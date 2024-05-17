import { configureStore } from "@reduxjs/toolkit";
 import covid from "./dataSlice"

export default configureStore({reducer: covid});
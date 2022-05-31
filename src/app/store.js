import { configureStore } from "@reduxjs/toolkit";
//import slices
import topicsSlice from "../features/topics/topicsSlice";

export default configureStore({
  reducer: {
    topics: topicsSlice
  },
});

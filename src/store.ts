import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./slices/MessagesSlice";

const store = configureStore({
  reducer: {
    messages: messagesReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});
export default store;

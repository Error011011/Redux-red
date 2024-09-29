import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favouritesReducer } from "./favourites/favourites.slice";
import { userSlice } from "./user/user.slice";
import { api } from "./api/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { createLogger } from "redux-logger";

const logger = createLogger({
    collapsed: true
})


const rootReducer = combineReducers({
    favourites: favouritesReducer,
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware).concat(logger)
})


setupListeners(store.dispatch)
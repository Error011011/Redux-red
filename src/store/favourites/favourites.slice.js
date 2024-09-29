import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        toggleFavourites: (state, action) => {
            if(state.some(recipe => recipe.id === action.payload.id)) {
                const index = state.findIndex(item => item.id === action.payload.id)
                if(index !== -1) { 
                    state.splice(index, 1)
                }
            } else {
                state.push(action.payload)
            }
        }
    }
    
})

export const {actions, reducer} = favouritesSlice


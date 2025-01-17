import { createAsyncThunk } from "@reduxjs/toolkit"

// fake fetch to api returning user object
const fetchUserById = (userId) => {
    return new Promise((resolve) => 
    setTimeout(()=> resolve({id: 1, name: 'Vlad'}), 1000))
}

export const getUserById = createAsyncThunk('users/by-id', async(userId, thunkApi)=> {

    try {
        const response = await fetchUserById(userId)
        return response
    } catch (error){ 
        thunkApi.rejectWithValue(error)
    }
    
})


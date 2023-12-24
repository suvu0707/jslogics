import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const UserSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUser(state,action){
            console.log("assdd",action,state)
            state.splice(action.payload,1)
        },
        removeAllUser(state,action){
            return []
        },
    },
})
console.log(UserSlice)  //action Creators
export const {addUser,removeUser,removeAllUser} = UserSlice.actions
// export  {UserSlice}
export default UserSlice.reducer
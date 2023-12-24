import { createSlice } from '@reduxjs/toolkit'
import {removeAllUserType} from './CreateActions'

const UserSlice1=createSlice({
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
        // removeAllUser(state,action){
        //     return []
        // },
    },
    extraReducers(builder){
        builder.addCase(removeAllUserType,()=>{
            return []
        })
    }
})

export const {addUser,removeUser} = UserSlice1.actions
// export  {UserSlice1}
export default UserSlice1.reducer
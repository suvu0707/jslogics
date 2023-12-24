import { configureStore } from "@reduxjs/toolkit";
import UserSlice1 from "./User/User2/UserSlice1";
import ItemsSlice from "./Item/ItemDetails/ItemsSlice";


const Store=configureStore({
    reducer:{
        // users:UserSlice.reducer    //Now we can access all microreducers of UserSlice
        users:UserSlice1,
        items:ItemsSlice
    }
})
export default Store

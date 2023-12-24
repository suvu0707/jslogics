import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    items: [],
    error: null,
    editingItemId: null, // Track the ID of the item being edited
    editedItem: null, 
};

export const fetchItems = createAsyncThunk(
    "fetchItems",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch("http://localhost:1234/itemlist");
            const data = await res.json();
            return data;
        }
        catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const addItems = createAsyncThunk(
    "addItems",
    async (ItemData, { rejectWithValue }) => {
        try {
            const requestOptions = {
                method: "POST",
                body: JSON.stringify(ItemData),
                headers: { "Content-Type": "application/json" }
            }
            const res = await fetch("http://localhost:1234/itemlist", requestOptions)
            const data = await res.json();
            return data
        }
        catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const editItems= createAsyncThunk(
    "editItems",
    async (ItemID,{rejectWithValue})=>{
        try{
            const res=await fetch("http://localhost:1234/itemlist/"+ItemID,{method:"GET"});
            const data=await res.json();
            console.log("data",data)
            return data;
        }
        catch(err){
            return rejectWithValue(err.message)
        }
    }
);

export const updateItems= createAsyncThunk(
    "updateItems",
    async ({itemId,ItemData},{rejectWithValue})=>{
        console.log("UPdata",itemId,566,ItemData)
        try{
            const requestOptions = {
                method: "PUT",
                body: JSON.stringify(ItemData),
                headers: { "Content-Type": "application/json" }
            }
            const res=await fetch("http://localhost:1234/itemlist/"+itemId,requestOptions);
            const data=await res.json();
            
            return data;
        }
        catch(err){
            return rejectWithValue(err.message)
        }
    }
);

export const deleteItems=createAsyncThunk(
    "deleteItems",
    async(ItemID,{rejectWithValue})=>{
        try{
            const res=await fetch("http://localhost:1234/itemlist/"+ItemID,{method:"DELETE"});
            const data=await res.json();
            console.log("ressdxs",data,res,ItemID)
            return data;
        }
        catch(err){
            return rejectWithValue(err.message);
        }
    }
)

const ItemsSlice = createSlice({
    name: "item",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addItems.pending,(state)=>{
                state.loading=true;
                state.error=null;
            })
            .addCase(addItems.fulfilled,(state,action)=>{
                state.loading=false;
                state.items.push(action.payload);
            })
            .addCase(addItems.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload
            })
            .addCase(editItems.pending,(state)=>{
                state.loading=true;
                state.error=null;
            })
            .addCase(editItems.fulfilled,(state,action)=>{
                console.log("state",state,action.payload)
                state.loading = false;
                state.editedItem = action.payload;
            })
            .addCase(editItems.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload
            })
            .addCase(updateItems.pending,(state)=>{
                state.loading=true;
                state.error=null;
            })
            .addCase(updateItems.fulfilled,(state,action)=>{
                state.loading=false;
                state.items = state.items.map(item =>
                    item.id === action.payload.id ? action.payload : item
                );
            })
            .addCase(updateItems.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload
            })
            .addCase(deleteItems.pending,(state)=>{
                state.loading=true;
                state.error=null;
            })
            .addCase(deleteItems.fulfilled,(state,action)=>{
                console.log("deleteDta",action.payload,state.items)
                state.loading=false;
                state.items=state.items.filter((item)=>item.id !== action.payload)
            })
            .addCase(deleteItems.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload
            })

    }
});
export default ItemsSlice.reducer;
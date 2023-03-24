import  {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const BestSaleSlice = createSlice({
    name: 'BestSale',
    initialState: {
        value:[],
        status: "pending",
        error: null
    },
    reducers:{},
    extraReducers: builder => builder.addCase(fetchHomepageData.pending,(state,action) => {
        state.status = "pending";
    })
    .addCase(fetchHomepageData.rejected,(state,action) => {
        state.status = "rejected";
        state.error = action.error;
    })
    .addCase(fetchHomepageData.fulfilled, (state,action)=>{
        state.status = "fulfilled";
        state.value = action.payload;
    })
});

export const fetchHomepageData = createAsyncThunk("BestSale/fetch",async()=>{
    try {
        const {data} = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668791034/React%20Class/B.%20Saraswati/bestSelling_hie4zu.json");
        return data;
    } catch (error) {
        return error.message;
    }
});

export default BestSaleSlice;





















































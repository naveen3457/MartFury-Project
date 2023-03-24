import  {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const RecommendedSlice = createSlice({
    name: 'RecommendedItems',
    initialState: {
        items:[],
        status: "pending",
        error: null
    },
    reducers:{},
    extraReducers: builder => builder.addCase(fetchRecommendedData.pending,(state,action) => {
        state.status = "pending";
    })
    .addCase(fetchRecommendedData.rejected,(state,action) => {
        state.status = "rejected";
        state.error = action.error;
    })
    .addCase(fetchRecommendedData.fulfilled, (state,action)=>{
        state.status = "fulfilled";
        state.items = action.payload;

    })
});

export const fetchRecommendedData = createAsyncThunk("RecommendedItems/fetch",async()=>{
    try {
        const {data} = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668791034/React%20Class/B.%20Saraswati/recommended_gwirco.json");
        return data;
    } catch (error) {
        return error.message;
    }
});

export default RecommendedSlice;



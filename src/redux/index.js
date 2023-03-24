import BestSaleSlice from "./slice/bestsaleslice";
import RecommendedSlice from "./slice/recommendeditems";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartslice";

const Store = configureStore({
    reducer:{
        BestSale:BestSaleSlice.reducer,
        RecommendedItems:RecommendedSlice.reducer,
        Cart: cartSlice.reducer
             
    }
})

export default Store;
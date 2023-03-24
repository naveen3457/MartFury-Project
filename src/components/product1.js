import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendedData } from "../redux/slice/recommendeditems";

// import Home from "../pages/home";
import "../styles/product1.scss";
import ProductCard1 from "./productcard1";

const Products1 = ()=>{ 
    const products1 = useSelector(state=> state.RecommendedItems.items);

console.log(products1);

const dispatch = useDispatch();
useEffect(()=>{
    dispatch(fetchRecommendedData());

},[])


return(
    <div className="product-body1">{products1.length && products1.map(e=><ProductCard1 product={e}/>)}</div>
    
)



}


export default Products1;




























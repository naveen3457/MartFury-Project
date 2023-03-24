import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepageData } from "../redux/slice/bestsaleslice";
// import Home from "../pages/home";
import ProductCard from "./productCard";
import "../styles/product.scss";

const Products = ()=>{ 
    const products = useSelector(state=> state.BestSale.value);

console.log(products);

const dispatch = useDispatch();
useEffect(()=>{
    dispatch(fetchHomepageData());

},[])

// here empty array data push cheyadaniki
// useeefect usedispatch nduku thesukuntam antey data ni change cheyadaniki

return(
    
    <div className="product-body">{products.length && products.map(e=><ProductCard product={e}/>)}</div>
    
)



}


export default Products;




























import React from "react";
import "../styles/productcard1.scss";
import { addtocart, removeFromCart } from "../redux/slice/cartslice";
import { useDispatch } from "react-redux";
import {AiOutlineStar,AiFillStar } from "react-icons/ai";


const ProductCard1= ({product})=>{
    const dispatch = useDispatch();

    return(
        <div className="productcard-body1">
            <img className="productcard-img" src={product.images[0].url}/>
            <hr></hr>
            <p>{product.vendor}</p>
            <p className="productcard-title">({product.title})</p>
            <p><AiFillStar className="star"/>
                <AiFillStar className="star"/>
                <AiFillStar className="star"/>
                <AiFillStar className="star"/>
                <AiOutlineStar className="star"/>{product.review}</p>
            <p className="productcard-price">${product.sale_price}</p>
            <span className="cart-body"><button onClick={()=>dispatch(removeFromCart(product))}>-</button><button onClick={()=>dispatch(addtocart(product))}>ADD TO CART</button><button onClick={()=>dispatch(addtocart(product))}>+</button></span>

        </div>
    )
}

export default ProductCard1;
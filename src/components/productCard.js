import React from "react";
import "../styles/productcard.scss";
import { addtocart, removeFromCart } from "../redux/slice/cartslice";
import { useDispatch } from "react-redux";
import {AiOutlineStar,AiFillStar } from "react-icons/ai";

const imgUrl = "https://beta.apinouthemes.com/uploads/2c1147dfe0994cdb980fcd6f216ac3a9.jpg";

const ProductCard= ({product})=>{
    const dispatch = useDispatch();
    return(
        <div className="productcard-body">
            <img className="productcard-imgs" src={product.images[0].url}/>
            <hr></hr>
            <p>{product.vendor}</p>
            <p className="productcard-title">{product.title || "imgUrl" }</p>
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


export default ProductCard;







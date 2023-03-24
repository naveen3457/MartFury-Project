
import React, { useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import {MdDeleteForever} from "react-icons/md";
import {AiOutlineClose,AiOutlineCloseSquare} from "react-icons/ai";
import "../styles/cart.scss";
import { removeFromCart } from "../redux/slice/cartslice";


const Cart = (prop)=>{
    const cart = useSelector(state => state.Cart);
    const dispatch=useDispatch();
    return(
        <div className={prop.pass? ("cart"+" "+" "+"cartmove"):"cart"} >
        <AiOutlineClose onClick={()=>prop.setPass(false)} className="closeebtn"/>
        <div className="cart-container">
                <h1> Cart</h1>
                <div className="cart-product-container"> 
                    {cart.items.length && cart.items.map(e=>{
                        console.log(e);
                        return(
                            <div className="cart-item"> 

                             <div className="cart-item-header">
                                <div className="cart-item-price">
                                    <p>{e.name}</p>
                                    <p>{e.cartQty}x{e.price && e.price[0]}</p>
                                   <AiOutlineCloseSquare onClick={()=>dispatch(removeFromCart(e))}/>
                                </div>                               
                                <img className="cart-img" src={e.images && e.images[0].url}></img>
                             </div>                            
                            </div>                           
                            )                           
                        })}                        
                </div>
                
                  <h4>SUBTOTAL: ${cart.totalPrice}.00</h4>
                  <button className="cart-btn">CHECKOUT</button>           
        </div>
        </div>
    )}

export default Cart;
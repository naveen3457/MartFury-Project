import React, { useState } from "react";
import "../styles/navbar.scss";
import { BsBarChartLine } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import Cart from "./cart";
import Register from "./register";
import Login from "./login";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [openn, setOpenn] = useState(false);


    const [display, setDisplay] = useState(false);
    const cart = useSelector(state => state.Cart);

    return (
        <nav className="nav-container">
            <img className="nav-img" src="https://reactstorefronts.com/static/img/logo_light.png" />
            <div>
                <span>
                    <select className="select-body">
                        <option>ALL</option>
                        <option>Accessories</option>
                        <option>Babies and Moms</option>
                        <option>Androids</option>
                        <option>Books and office</option>
                        <option>Cars and motorcycles</option>
                        <option>Bags</option>
                        <option>Shoes</option>
                    </select>
                </span>
                <span><input className="nav-input" placeholder="I'm shopping for..." /></span>
                <span><button className="nav-search">SEARCH</button></span>
            </div>
            <div className="nav-icons">
                <Badge badgeContent={4} color="primary">
                    <BsBarChartLine className="barchart-icon" />
                </Badge>
                <Badge badgeContent={2} color="primary">
                    <AiOutlineHeart className="heart-icon" />
                </Badge>

                <p onClick={() => setDisplay(true)}><Badge badgeContent={cart.totalQty} color="primary">
                    <HiShoppingBag className="bag-icon" />
                </Badge> </p>
                <Badge badgeContent={3} color="primary">
                    <HiOutlineUser className="user-icon" />
                </Badge>

                <span>
                    <button className="register-btn" onClick={() => {setOpen(!open)}}>REGISTER</button>
                    <br /> <button className="login-btn" onClick={() => setOpenn(!openn)}>LOGIN</button>
                </span>
            </div>
            <div><Cart pass={display} setPass={setDisplay} /></div>

            <div className={`modal ${open ? 'dflex' : 'dnone'}`} onClick={() => setOpen(false)}>
                <div className='content' onClick={(q) => q.stopPropagation()}>
                    <p className="register-container"><Register  setRegister={setOpen} setLogin={setOpenn} /></p>

                </div>
            </div>
            <div className={`modal ${openn ? 'dflex' : 'dnone'}`} onClick={() => setOpenn(false)}>
                <div className='content' onClick={(q) => q.stopPropagation()}>
                    <p className="login-container"><Login setRegister={setOpen} setLogin={setOpenn} /></p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
import "../styles/header.scss";
import Flag from "react-world-flags";

import {GoThreeBars} from "react-icons/go";


const Header = () => {
    return(
        <header>
        <div className="header-container">
            <div className="shop-body">
                <GoThreeBars className="threebar"/>
                <p>Shop By Department</p>
            </div>
            <div className="home-body">
                <select className="home">
                    <option>Home</option>
                </select>
                <select className="shop">
                    <option>Shop</option>
                </select>
                <select className="pages">
                    <option>Pages</option>
                </select>
                <select className="blogs">
                    <option>Blogs</option>
                </select>
            </div>
            <ul className="sell" type="none">
                <li>Sell on Martfury</li>
                <li className="blank"></li>
                <li>Tract your order</li>
                <li className="blank"></li>
                <li>
                <select className="usd-select-btn">
                    <option>USD</option>
                </select>
                </li>
                <li className="blank"></li>
                <li>
                <select className="lang">
                    <p><Flag code='US' /></p>
                    <option>English</option>
                </select>
                </li>
            </ul>
        </div>

           <div className="home-shopdefault">
                <span className="home-home">Home</span>
                <span>/</span>
                <span>Shop Default</span>
           </div>
           
        </header>
    )
}

export default Header;
import "../styles/footer.scss";

const Footer = ()=>{
    return(
        <div className="footer-container">
            <div className="footer-email">
                <div>
                    <li type="none">Newsletter</li> 
                    <p>Subcribe to get information about products and coupons</p>
                </div>
                <span>
                   <input className="emailinput" placeholder="Email address" />
                   <button className="subscribe-btn">Subscribe</button>
                </span>
            </div>
            <div className="footer-body">
                <div>
                    <h6>Contact Us</h6>
                    <p>Call us 24/7</p>
                    <p className="num">1800 97 97 69</p>
                    <p>502 New Design Str, Melbourne, Australia <br/> contact@martfury.co</p>
                </div>
                <div>
                    <h6>Quick links</h6>
                    <p>Policy</p>
                    <p>Term & Condition</p>
                    <p>Shipping</p>
                    <p>FAQ</p>

                </div>
                <div>
                    <h6>Company</h6>
                    <p>About Us</p>
                    <p>Affilate</p>
                    <p>Career</p>
                    <p>Contact</p>
                </div>
                <div>
                    <h6>Bussiness</h6>
                    <p>Our Press</p>
                    <p>Checkout</p>
                    <p>My account</p>
                    <p>Shop</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;
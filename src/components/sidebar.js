import "../styles/sidebar.scss";


const Sidebar = ()=>{
    return(
        <div className="sidebar-container">
            <ul type="none" className="categories-list">
            <li className="categories">CATEGORIES</li>
            <li>Clothing & Apparel</li>
            <li>Garden & Kitchen</li>
            <li>Consumer Electrics</li>
            <li>Health & Beauty</li>
            <li>Computers & Technologies</li>
            <li>Jewelry & Watches</li>
            <li>Phones & Accessories</li>
            <li>Sport & Outdoor</li>
            <li>Babies and Moms</li>
            <li>Books & Office</li>
            <li>Cars & Motocycles</li>
            <li>Fruits</li>
            <li>Meat</li>
            <li>Book</li>
            </ul>
        </div>
    )
}

export default Sidebar;
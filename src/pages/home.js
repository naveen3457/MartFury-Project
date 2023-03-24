import "../styles/home.scss";

import Carousel2 from "../components/carousel2";
import Carousel3 from "../components/carousel3";


const Home =()=>{


    return(
        <div className="home-container">
        <h2 className="home-title">Best Sale Items</h2>
        <div className="home-module">
            <Carousel2/>
        </div>
        <h2 className="home-title">Recommended Items</h2>
        <div className="home-module">
            <Carousel3/>
        </div>
          
      </div>
    )
}

export default Home;
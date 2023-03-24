import Navbar from "./components/navbar";
import Header from "./components/header";
import Carousel from "./components/carousel";
import Logos from "./components/logos";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/cart";
import Footer from "./components/footer";
import Model from "./components/modal";
import Register from "./components/register";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Routes>     
        <Route index element={<Register/>}></Route>
        <Route  path="login" element={<Login/>}></Route>
      </Routes> */}
      <Cart/>
      <Header/>
      <Model/>    
      <Carousel/>
      <Logos/>
      <Sidebar/>
      <Routes>
        <Route index element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}


export default App;

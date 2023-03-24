import React,{useState} from "react";
import { Link } from "react-router-dom";
import Register from "./register";
import "../styles/login.scss";
import {AiOutlineCloseCircle} from "react-icons/ai";

const Login = ({setLogin})=>{
  
    const [openn, setOpenn] = useState(true);   

    const [data, setData] = useState({
        username:"",     
        password:"",    
    });
const {username,password} = data;
    const onchange = (e)=>{
        setData({...data,[e.target.name]:e.target.value});

    }
    const onsubmit = (e)=>{
        e.preventDefault();
        console.log(data);
    } 
    return(    
        <>
            {openn && <form className="login-container" onSubmit={onsubmit}>
            <AiOutlineCloseCircle className="closbtnn" onClick={() => setLogin(false)} />
                < span className="form-title">LOG-IN</span>
             <p><Link to="/"><p>Sign Up</p></Link></p>
            <input name="username" type={"text"} placeholder="Name:" value={username} onChange={onchange}/>
            <input name="password" type={"password"} placeholder="password:" value={password}  onChange={onchange}/>
            <button className="btn">SUBMIT</button>
        </form>}
        </>
    )
}

export default Login;









































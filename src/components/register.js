import React, { useState, useEffect } from "react";
import "../styles/register.scss";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";


const Register = ({ setRegister, setLogin }) => {

    const [open, setOpen] = useState(true);

    const navigate = useNavigate();
    const handlerSubmit = () => {
        navigate("/login");
    }
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        repassword: "",
    });
    const { username, email, password, repassword } = data;
    const onchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

    }
    const onsubmit = (e) => {
        e.preventDefault();
        console.log(data);


        if (password === repassword) {
            console.log("Succesful");
            setRegister(false);
            setLogin(true);
        }
        else {
            console.log("password doestn't match");
        }
    }



    return (
        <>
            {open && <form className="register-container" >

                < span className="form-title">REGISTER FORM</span>
                <AiOutlineCloseCircle className="closbtn" onClick={() => setRegister(false)} />
                <input name="username" type={"text"} placeholder="Name:" value={username} onChange={onchange} />
                <input name="email" type={"email"} placeholder="Email:" value={email} onChange={onchange} />
                <input name="password" type={"password"} placeholder="password:" value={password} onChange={onchange} />
                <input name="repassword" type={"password"} placeholder="Re-Password:" value={repassword} onChange={onchange} />
                <button className="btn" onClick={onsubmit}>SUBMIT</button>

                <span className="login-link" onClick={() => {
                    setRegister(false);
                    setLogin(true);
                }}><p>Login</p></span>

            </form>}

        </>

    )
}
export default Register;
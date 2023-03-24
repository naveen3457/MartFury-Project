import { useEffect, useState } from "react";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../styles/modal.scss";

export default function Model() {
    const [model, setModel] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setModel(true)
        }, 3000)
    }, [])
    return (
        <div className="model-container">
            <div className={model ? "model" : "model-none"}>
                <p onClick={() => setModel(false)} className="closebtn"><AiOutlineCloseCircle /></p>
                <div className="model-content">
                    <h1>SUBSCRIBE TO MARTFURY</h1>
                    <p>Subscribe to the Porto mailing list to receive updates on new arrivals,
                        special offers and our promotions</p>
                    <div className="model-email"><input placeholder="Your Email Address" /><button>SUBMIT</button></div>
                </div>
            </div>
        </div>
    )

}




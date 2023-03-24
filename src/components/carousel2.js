import React, { useState } from "react";
import{GrNext,GrPrevious} from 'react-icons/gr';
import "../styles/carousel2.scss";
import Products from "./product";


export default function Carousel2(){
    const [counter,setcounter] = useState(0);

    function previous(){
        setcounter(counter-1);
        let body = document.getElementById('cont1');
        if(counter>0){
            body.style.transform += "translateX(18rem)";
            body.style.transition = ".2s";
        }else{
            body.style.transform += "translateX(0)";
            setcounter(0)
        }
    }
    function Next(){
        setcounter(counter+1);
        let body = document.getElementById("cont1");
        if(counter<2){
            body.style.transform +="translateX(-17.2rem)";
            body.style.transition = ".3s";
        }else{
            body.style.transform += "translateX(0)";
            setcounter(2);
        }
    }
    return(
        <div className="carousel-container">
            <div id="cont1" className="carousel-item-cont">
            <Products/>
            </div>                                                                                                      
            <div className="prev" onClick={previous}><GrPrevious/></div>
            <div className="next" onClick={Next}><GrNext/></div>
        </div>
            
    )
}

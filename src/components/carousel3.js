import React, { useState } from "react";
import{GrNext,GrPrevious} from 'react-icons/gr';
import "../styles/carousel3.scss";
import Products1 from "./product1";



export default function Carousel3(){
    const [items,setitems] = useState(0);

    function previous(){
        setitems(items-1);
        let body = document.getElementById('cont2');
        if(items>0){
            body.style.transform += "translateX(20rem)";
            body.style.transition = ".2s";
        }else{
            body.style.transform += "translateX(0)";
            setitems(0)
        }
    }
    function Next(){
        setitems(items+1);
        let body = document.getElementById("cont2");
        if(items<2){
            body.style.transform +="translateX(-20rem)";
            body.style.transition = ".3s";
        }else{
            body.style.transform += "translateX(0)";
            setitems(2);
        }
    }
    return(
        <div className="carousel-container1">
            <div id="cont2" className="carousel-item-cont1">
            <Products1/>
            </div>                                                                                                      
            <div className="prev" onClick={previous}><GrPrevious/></div>
            <div className="next" onClick={Next}><GrNext/></div>
        </div>
        
    
    )
}

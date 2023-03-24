import React, { useState } from "react";
import{GrNext,GrPrevious} from 'react-icons/gr';
import "../styles/carousel.scss";


export default function Carousel(){
    const [count,setcount] = useState(0);    

    function previous(){
        setcount(count-1);
        let body = document.getElementById('cont');
        if(count>0){
            body.style.transform += "translateX(104rem)";
            body.style.transition = ".2s";
        }else{
            body.style.transform += "translateX(0)";
           setcount(0)
        }
    }
    function Next(){
        setcount(count+1);
        let body = document.getElementById("cont");
        if(count<11){
            body.style.transform +="translateX(-104rem)";
            body.style.transition = ".3s";
        }else{
            body.style.transform += "translateX(0)";
            setcount(11);
        }
    }
    return(
        <div className="carousel-container">
            <div id="cont" className="carousel-item-cont">
                <div className="carousel-item">
                    <img className='carousel-img' src="https://reactstorefronts.com/static/img/slider/shop-default/1.jpg"/>
                </div>
                <div className="carousel-item">
                    <img className='carousel-img' src="https://reactstorefronts.com/static/img/slider/shop-default/2.jpg"/>
                </div>
                <div className="carousel-item">
                    <img className='carousel-img' src="https://reactstorefronts.com/static/img/slider/shop-default/1.jpg"/>
                </div>
                <div className="carousel-item">
                    <img className="carousel-img" src="https://reactstorefronts.com/static/img/slider/shop-default/2.jpg" />
                </div>              
                <div className="carousel-item">
                    <img className="carousel-img" src="https://reactstorefronts.com/static/img/slider/shop-default/1.jpg" />
                </div>
                <div className="carousel-item">
                    <img className="carousel-img" src="https://reactstorefronts.com/static/img/slider/shop-default/2.jpg" />
                </div>
                <div className="carousel-item">
                    <img className="carousel-img" src="https://reactstorefronts.com/static/img/slider/shop-default/1.jpg" />
                </div>
                <div className="carousel-item">
                    <img className="carousel-img" src="https://reactstorefronts.com/static/img/slider/shop-default/2.jpg" />
                </div>
            </div>
            <div className="prev" onClick={previous}><GrPrevious/></div>
            <div className="next" onClick={Next}><GrNext/></div>
        </div>
        
        
    )
}

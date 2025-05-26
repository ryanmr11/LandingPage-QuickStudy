import React from "react";
import "./slider.css";
import ryan from '../../img/eu.jpg';
import jc from '../../img/jc.jpg';
import tai from '../../img/tainara.jpg';
import tais from '../../img/tais.jpg';
import wly from '../../img/wly.jpg';

const images = [ryan, tais, jc, tai, wly];

function InfiniteSlider(){
    return (
        <div className="slider">
            <div className="slider-track">
                {[...images, ...images].map((img, index) => (
                    <div className="slide" key={index}>
                        <img src={img} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteSlider;
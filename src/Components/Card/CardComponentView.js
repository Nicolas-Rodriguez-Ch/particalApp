import React, { useState } from 'react'
import './cardComponentStyle.css';
// import { usuarios } from "../../Utils/dataBase";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export const CardComponentView = ({ handleFoward, handleBack, name, testimonial, picture }) => {

    return (
        <div>
            <h1>Testimonials</h1>
            <div className='box'>
                <img src={picture}/>
                <h2>{name}</h2>
                <h3>{testimonial}</h3>
                <AiOutlineArrowLeft className="arrow"onClick={handleBack}/>
                <AiOutlineArrowRight className="arrow" onClick={handleFoward}/>
            </div>
        </div>
    )
}

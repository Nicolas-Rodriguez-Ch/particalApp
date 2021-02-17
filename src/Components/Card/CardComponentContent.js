import React, { useState } from 'react'
import {CardComponentView } from './CardComponentView'
import { usuarios } from "../../Utils/dataBase";

export const CardComponentContent = () => {

    const [state, setstate] = useState(0)

    const { name, testimonial, picture } = usuarios[state]

    const handleBack = () =>{
        if(state <= 0 ){
            setstate(2)
        } else {
            setstate(state - 1)
        }
    }
    const handleFoward = ()=>{
        if(state > usuarios.length -2){
            setstate(0)
        } else {
            setstate(state + 1)
        }
    }
    return (
        <div>
            <CardComponentView handleBack={handleBack} handleFoward={handleFoward} name={name} testimonial={testimonial} picture={picture}/>
        </div>
    )
}

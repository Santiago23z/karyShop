import React from "react";
import { GrFormClose } from 'react-icons/gr'

const OrderCart = (props) => {
    const {
        id,
        image,
        title,
        price,
        deletes
     } = props

     let icon;
     if (deletes) {
        icon = <GrFormClose onClick={() => {
            deletes(id)
        }}></GrFormClose>
     }
    return (
        <div className=" flex justify-between items-center p-3 m-4 border border-black rounded-md">
            <img src={image} alt="" className="w-24"/>
            <p className=" max-w-[150px]">{title},<br></br> <strong>{price}</strong></p>
            {icon}
        </div>
    )
}

export {
    OrderCart
}

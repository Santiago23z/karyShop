import React from 'react';
import { OrderCart } from '../orderCart/OrderCart';
import { contextGB } from '../../helpers/Context/Context';
import {IoIosReturnLeft} from 'react-icons/io'
import { Link } from 'react-router-dom';
export const MyOrder = () => {
    const { order } = React.useContext(contextGB);
    const path = window.location.pathname;
    let index = path.substring(path.lastIndexOf('/') + 1);
    console.log(index);
    if (index === "last") index = order?.length - 1
    console.log(index)
    return (
        <div className='text-center px-[20%]'>
            <p className='flex items-center justify-center relative'>
                <Link to="/mis-ordenes">
                    <IoIosReturnLeft className='text-3xl absolute left-0'/>
                </Link>
                <h1>Mi orden</h1>
            </p>
            <div>
            {order?.[index]?.products.map(product => (
                <OrderCart
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    price={product.price}
                    title={product.title}
                />
            ))}
            </div>
        </div>
    );
};

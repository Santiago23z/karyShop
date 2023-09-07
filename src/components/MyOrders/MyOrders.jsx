import React, { useContext } from 'react'
import { contextGB } from '../../helpers/Context/Context'
import { Link } from 'react-router-dom'
import OrdersCard from '../orderCart/ordersCart/OrdersCart'
import {IoIosReturnLeft} from 'react-icons/io'
const MyOrders = () => {
  const {order} = useContext(contextGB)
  
  return (
      <div className='text-center px-[20%]'>
            <p className='flex items-center justify-center relative'>
                <Link to="/mis-orden/last">
                    <IoIosReturnLeft className='text-3xl absolute left-0'/>
                </Link>
                <h1>Mis ordenes</h1>
            </p>
            <div>
            {order.map((product, index) => (
                <Link to={`/mi-orden/${index}`} key={index}>
                  <OrdersCard
                    dateProducts={product.date}
                    totalProducts={product.quantity}
                    totalPrice={product.totalPrice}
                />
                </Link>
            ))}
            </div>
        </div>
  )
}

export default MyOrders

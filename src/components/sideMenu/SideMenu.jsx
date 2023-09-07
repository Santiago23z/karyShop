import React from 'react'
import { Link } from 'react-router-dom'
import { CgClose } from 'react-icons/cg'
import { contextGB } from '../../helpers/Context/Context'
import { OrderCart } from '../orderCart/OrderCart'
import { total } from '../../helpers/utils'
const SideMenu = () => {
    const { sidebar, handleCloseSide, saveCart, setSaveCart, setOrder, order, setCount, count } = React.useContext(contextGB)

    const handleDelete = (ide) => {
      const index = saveCart.filter(product => product.id != ide)
      setSaveCart(index)
      setCount(count-1)
    }

    const handleOrder = ()  => {
      const checkCurrent = {
        date: '01/2/2022',
        products: saveCart,
        quantity : saveCart.length,
        totalPrice: total(saveCart)
      }
      setOrder([...order, checkCurrent])
      setSaveCart([])
    }
    

  return (
    <div>
        <aside className={`bg-white justify-between p-4 absolute right-0 top-[95px] w-96 border border-black ${sidebar ? 'flex flex-col' : "hidden"}`}>
        <p className='flex justify-between items-center'>
        <h3 className='p-3 bg-slate-900 rounded-full text-white '>Order</h3>
        <span onClick={handleCloseSide}><CgClose /></span>
        </p>
        <section>
         {
          saveCart.map((product) => (
            <OrderCart 
              key={product.id}
              id={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
              deletes={handleDelete}
            />
          ))
         }
        </section>
        <div>
          <p>
            <span>{`Total Price : ${total(saveCart)}`}</span>
          </p>
          <Link to="/mi-orden/last">
            <button className='w-full bg-black p-2 rounded-md text-white' onClick={() => handleOrder()}>Checkout</button>
          </Link>
        </div>
    </aside>
    </div>
  )
}

export default SideMenu
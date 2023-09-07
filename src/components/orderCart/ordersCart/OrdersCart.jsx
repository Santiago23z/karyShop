import {CiCalendarDate} from 'react-icons/ci'
import {MdProductionQuantityLimits} from 'react-icons/md'
const OrdersCard = props => {
  const { totalPrice, totalProducts, dateProducts } = props

  return (
    <div className="flex justify-between items-center mb-3 border border-black p-5">
      <p className="flex justify-between w-full items-center">
        <p className="flex flex-col">
        <span className="p-2 flex  items-center">{dateProducts} <span className='ml-2 text-xl'><CiCalendarDate/></span></span>
        <span className="p-2 text-xl flex items-center">{totalProducts} Products <span className='ml-2 text-xl'><MdProductionQuantityLimits/></span></span>
        </p>
        <span className="p-2">{totalPrice}</span>
      </p>
    </div>
  )
}

export default OrdersCard
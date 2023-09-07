import React from 'react'
import { CgClose } from 'react-icons/cg'
import './style.css'
import { HiMiniSquaresPlus } from 'react-icons/hi2'
import { contextGB } from '../../helpers/Context/Context'
const ProductDetail = () => {
    const { aside, handleCloseAside, products } = React.useContext(contextGB)
  return (
    <aside className={`bg-white justify-between p-4 absolute right-0 top-[95px] w-96 border border-black ${aside ? 'flex flex-col' : "hidden"}`}>
        <p className='flex justify-between items-center'>
        <h3 className='p-3 bg-slate-900 rounded-full text-white '>Detail</h3>
        <span onClick={handleCloseAside}><CgClose /></span>
        </p>
        <section className='h-full mt-10 sectionOne flex flex-col'>
            <img src={products.image} alt="" />
            <h2 className='  text-2xl text-center'>{products.title}</h2>
            <p className='border border-black'>
            <span className=''>{products.description}</span>
            </p>
            <p className='flex justify-between items-center'>
                <span className='p-2 bg-slate-900 text-white inline-block my-4 rounded-full'>{products.price}</span>
                <span className='text-3xl'><HiMiniSquaresPlus /></span>
            </p>
        </section>
    </aside>
  )
}

export default ProductDetail
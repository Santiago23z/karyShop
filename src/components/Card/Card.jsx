import React from 'react'
import { contextGB } from '../../helpers/Context/Context'
import { BsBagPlus, BsCheckLg } from 'react-icons/bs'
export const Card = ({  data }) => {
    let { setCount, count, handleAsideCart, setProducts, saveCart, setSaveCart, handleSide, sidebar } = React.useContext(contextGB)

    const showToProduct = () => {
        setProducts(data)
        handleAsideCart()
    }


    function handleCart(productData) {
        setSaveCart([...saveCart, productData])
        handleSide()
        // console.log(saveCart, 'save cart')
    }

    function renderIcons () {
        if (sidebar) {
            return (
                <BsCheckLg />
            )
        } else {
            setSaveCart([])
            return (
                <BsBagPlus />
            )
        }
    }


    function renderIcon(id) {
        const isInCart = saveCart.filter(product => product.id === id).length > 0;
    
        if (isInCart) {
            return (
                <button className='px-3 rounded-2xl bg-slate-900 text-white mt-6' >{renderIcons()}</button>
            );
        } else {
            return (
                <button className='px-3 rounded-2xl bg-slate-900 text-white mt-6' onClick={() => {
                    setCount(count+1)
                    handleCart(data)

                }}><BsBagPlus className=' inline-block'/></button>
            );
        }
    }

    return (
        <div className='border-2 rounded-sm border-slate-900 flex items-center justify-center flex-col w-64 p-5 h-auto' >
            <figure onClick={showToProduct}>
                <img src={data.image} alt="" className='w-46 h-44 object-fill ' />
            </figure>
            <div className=' flex flex-col justify-between'>
                <div className='m-5 flex flex-col justify-center items-center'>
                    <p className="w-[150px] text-elipsis overflow-hidden whitespace-nowrap">{data.title}</p>
                    <p className=' text-white text-center bg-red-400 inline-block rounded-full p-2'>{data.price}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='p-2 rounded-md border-2 border-slate/900 text-slate/900 text-center'>{data.category}</p>
                </div>
                {renderIcon(data.id)}
            </div>
        </div>
    )
}
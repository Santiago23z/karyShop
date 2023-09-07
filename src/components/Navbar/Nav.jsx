import React from 'react'
import { LuShoppingCart } from 'react-icons/lu'
import { NavLink } from 'react-router-dom'
import './style.css'
import { contextGB } from '../../helpers/Context/Context'
const Nav = () => {
  const { count } = React.useContext(contextGB)
  return (
    <nav className='w-full bg-slate-900 flex items-center justify-between p-2 px-4 mb-10 h-24'>
      <ul className='list flex items-center'>
        <li>
          <NavLink
            to="/"
            className={( {isActive} ) => isActive ? "underline underline-offset-8" : undefined}
          >
            <img src="https://i.imgur.com/dslSokE.png" className='w-28 h-10'/>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/All"
            className={( {isActive} ) => isActive ? "underline underline-offset-8" : undefined}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mens"
            className={( {isActive} ) => isActive ? "underline underline-offset-8" : undefined}
          >
            Men's Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Electronics"
            className={( {isActive} ) => isActive ? "underline underline-offset-8" : undefined}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Jewelery"
            className={( {isActive} ) => isActive ? "underline underline-offset-8" : undefined}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Woman"
            className={( {isActive} ) => isActive ? "underline underline-offset-8" : undefined}
          >
            Women's Clothing
          </NavLink>
        </li>
        
      </ul>
      <ul className='list flex items-center'>
        <li>
          <NavLink to="/mi-orden" className={({isActive}) => isActive ? "underline underline-offset-8" : undefined}>
            Mi orden
          </NavLink>
        </li>
        <li>
          <NavLink to="/mis-ordenes" className={({isActive}) => isActive ? "underline underline-offset-8" : undefined}>
            Mis ordenes
          </NavLink>
          </li>
        <li className='relative'><LuShoppingCart className='w-8 h-8'/><span className=' rounded-full w-[20px] h-[20px] absolute top-2 right-2 text-center flex justify-center items-center bg-slate-700'>{count}</span></li>
      </ul>
    </nav>
  )
}

export default Nav

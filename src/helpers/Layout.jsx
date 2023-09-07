import React from 'react'

export const Layout = ({ children }) => {
  return (
    <div className='flex justify-center items-center m-14 flex-col'>
        {children}
    </div>
  )
}

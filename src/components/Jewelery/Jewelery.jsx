import React from 'react'
import { contextGB } from '../../helpers/Context/Context'
import { Layout } from '../../helpers/Layout'
import { Card } from '../Card/Card'

export const Jewelery = () => {
  const {data} = React.useContext(contextGB)
  console.log(data, "d")
  let Jewelery = data.filter(item => item.category === "jewelery")
  return (
    <Layout>
      Jewelery 
      <div className='grid grid-cols-4 gap-5'>
      {Jewelery?.map(product => (
        <Card key={product.id} data={product}/>
      ))}
      </div>
    </Layout>
  )
}


import React from 'react'
import { contextGB } from '../../helpers/Context/Context'
import { Card } from '../Card/Card'
import { Layout } from '../../helpers/Layout'

export const Mens = () => {
  const {data} = React.useContext(contextGB)
  let men = data.filter(mens => mens.category == "men's clothing");

  console.log(men);
  
  return (
    <Layout>
      Mens clothing

      <div className='grid grid-cols-4 gap-5'>
      {men.map(product => (
        <Card 
          key={product.id}
          data={product}
        />
      ))}
      </div>
      
    </Layout>
  )
}

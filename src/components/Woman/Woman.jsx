import React from 'react'
import { contextGB } from '../../helpers/Context/Context'
import { Card } from '../Card/Card'
import { Layout } from '../../helpers/Layout'

export const Woman = () => {
  const {data} = React.useContext(contextGB)
  console.log(data, "d")
  let woman = data.filter(woman => woman.category === "women's clothing")
  console.log(woman, 'form woman');
  return (
    <Layout>
      Woman clothing
      <div className='grid grid-cols-4 gap-5'>
      {woman.map(product => (
        <Card key={product.id} data={product}/>
      ))}
      </div>
    </Layout>
  )
}


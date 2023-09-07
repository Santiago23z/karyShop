import React from 'react'
import { contextGB } from '../../helpers/Context/Context'
import { Layout } from '../../helpers/Layout'
import { Card } from '../Card/Card'

export const Electronics = () => {
  const {data} = React.useContext(contextGB)
  let electro = data.filter(product => product.category == "electronics")
   return (
    <Layout>
      electronics
      <div className='grid grid-cols-4 gap-5'>
          {electro?.map(product => (
            <Card key={product.id} data={product} />
          ))}
      </div>
    </Layout>
  )
}

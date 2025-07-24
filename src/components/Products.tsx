import React from 'react'
import dummyData from '../data/all-data.json'
import { Data } from '@/types'
import Card from './Card'

const Products = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-3 p-4 w-[90vw] mx-auto'>
      {dummyData.map((item: Data) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Products

import React from 'react'
import { Data } from '@/types'
import Card from './Card'
import Masonry from 'react-masonry-css'

const Products: React.FC<{ data: Data[] }> = ({ data = [] }) => {
  return (
    <Masonry
      breakpointCols={{ default: 6, 1200: 4, 900: 3, 600: 2 }}
      className='flex w-full gap-4 px-4 mt-5'
      columnClassName='masonry-column'
    >
      {data?.length > 0 ? (
        data?.map((item: Data) => <Card item={item} key={item.id} />)
      ) : (
        <>No data</>
      )}
    </Masonry>
  )
}

export default Products

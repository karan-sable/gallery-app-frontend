'use client'
import Drawer from '@/components/Drawer'
import Products from '@/components/Products'
import { Data } from '@/types'
import { NextPage } from 'next'
import React, { useState } from 'react'
import Crochetting_Figurine_Data from '@/data/Crochetting/Figurine.json'
import Crochetting_Mini_Data from '@/data/Crochetting/Mini.json'
import Abstract_All_Data from '@/data/Abstract/all.json'
import Mandala_All_Data from '@/data/Mandala Art/all.json'
import CategoriesData from '@/data/Masters/Categories.json'

const Page: NextPage = () => {
  const [data, setData] = useState<Data[]>(Crochetting_Figurine_Data)

  const getData = (categoryName: string) => {
    switch (categoryName) {
      case 'Crochetting':
        return [...Crochetting_Figurine_Data, ...Crochetting_Mini_Data]
      case 'Abstract':
        return [...Abstract_All_Data]
      case 'Mandala':
        return [...Mandala_All_Data]
      default:
        console.log('No case matched, returning default ==> Crochetting')
        return [...Crochetting_Figurine_Data, ...Crochetting_Mini_Data]
    }
  }

  return (
    <>
      {/* Tabs */}
      <div className='mt-2 mx-3 flex gap-2'>
        {CategoriesData?.map((item) => (
          <button
            key={item.id}
            className='px-2 py-1/2 bg-blue-100 text-blue-900 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer transition-all ease-in-out duration-300'
            onClick={() => setData(getData(item.name))}
          >
            {item.name}
          </button>
        ))}
      </div>
      <Products data={data} />

      <Drawer />
    </>
  )
}

export default Page

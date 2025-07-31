'use client'
import Drawer from '@/components/Drawer'
import Products from '@/components/Products'
import { CategoryState, Data, SubCategoryState } from '@/types'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

import CategoriesData from '@/data/Masters/Categories.json'
import SubCategoriesData from '@/data/Masters/Sub-Categories.json'

import Crochetting_All_Data from '@/data/Crochetting/all'
import Abstract_All_Data from '@/data/Abstract/all.json'
import Mandala_All_Data from '@/data/Mandala Art/all.json'
import Painting_All_Data from '@/data/Paintings/all'

const Page: NextPage = () => {
  const [data, setData] = useState<Data[]>(Crochetting_All_Data)
  const [activeCategory, setActiveCategory] = useState<string>(
    CategoriesData[0].name
  )
  const [activeSubCategory, setActiveSubCategory] = useState<string>('')

  const getData = (categoryName: string) => {
    switch (categoryName) {
      case 'Crochetting':
        return Crochetting_All_Data
      case 'Painting':
        return Painting_All_Data
      case 'Abstract':
        return Abstract_All_Data
      case 'Mandala':
        return Mandala_All_Data
      default:
        console.log('No case matched, returning default ==> Crochetting')
        return Crochetting_All_Data
    }
  }

  const handleTabClick = (item: CategoryState) => {
    setActiveCategory(item.name)
    setData(getData(item.name))
    setActiveSubCategory('')
  }

  useEffect(() => {
    setActiveSubCategory('')
  }, [activeCategory])

  return (
    <>
      {/* Tabs */}
      <div className='mt-5 flex gap-2 justify-center'>
        {CategoriesData?.map((item: CategoryState) => (
          <button
            key={item.id}
            onClick={() => handleTabClick(item)}
            className={`px-2 py-1/2 ${
              item.name === activeCategory ? 'bg-violet-100' : 'bg-background'
            } ${
              item.name === activeCategory
                ? 'text-violet-400'
                : 'text-foreground dark:text-white'
            } text-violet-900 text-xs md:text-base rounded-md hover:bg-violet-400 hover:text-white cursor-pointer transition-all ease-in-out duration-200`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className='flex gap-2 justify-center mt-5'>
        {SubCategoriesData?.filter(
          (el: SubCategoryState) => el.category === activeCategory
        )?.map((item: SubCategoryState) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveSubCategory(item.sub_category_name)
              setData(
                getData(item.category)?.filter((el: Data) =>
                  !!item.sub_category_name
                    ? el.sub_category === item.sub_category_name
                    : true
                )
              )
            }}
            className={`px-2 py-1/2 ${
              item.sub_category_name === activeSubCategory
                ? 'bg-violet-100'
                : 'bg-background'
            } ${
              item.sub_category_name === activeSubCategory
                ? 'text-violet-400'
                : 'text-foreground dark:text-white'
            } text-violet-900 text-xs md:text-base rounded-md hover:bg-violet-400 hover:text-white cursor-pointer transition-all ease-in-out duration-200`}
          >
            {item.sub_category_name}
          </button>
        ))}
      </div>
      <Products data={data} />

      {/* <Drawer /> */}
    </>
  )
}

export default Page

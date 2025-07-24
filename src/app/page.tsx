import { NextPage } from 'next'
import React from 'react'
import dummyData from '../data/all-data.json'
import { Data } from '@/types'
import Badge from '@/components/Badge'

const Page: NextPage = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-3 p-4 w-[90vw] mx-auto'>
      {dummyData.map((item: Data) => (
        <div
          key={item.id}
          className='bg-white rounded-2xl overflow-hidden z-10 shadow-lg relative'
        >
          <div className='relative'>
            <img
              src={item.path}
              alt={item.title}
              className='md:w-full object-cover hover:scale-110 transition duration-300 ease-in-out cursor-pointer'
            />

            <Badge type='sold' show={item.sold} />
            <Badge type='new' show={item.new} />

            <div
              className='p-2 w-full absolute bottom-0'
              style={{
                background:
                  'linear-gradient(0deg,rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 100%)',
              }}
            >
              <h3 className='text-lg text-gray-100 mb-1 w-fit relative'>
                {item.title}
                {/* <Badge type='new' show={item.new} /> */}
              </h3>
              <div className='flex gap-x-2'>
                <p className='text-xs bg-blue-500 text-white w-fit px-1 rounded-sm'>
                  {item.category}
                </p>
                <p className='text-xs bg-blue-500 text-white w-fit px-1 rounded-sm'>
                  {item.sub_category}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Page

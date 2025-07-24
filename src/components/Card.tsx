'use client'
import { Data } from '@/types'
import React, { Suspense, useEffect, useState } from 'react'
import Badge from './Badge'

const Card: React.FC<{ item: Data }> = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 10) // Delay ensures transition triggers after first paint
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      key={item.id}
      className={`bg-white rounded-2xl overflow-hidden z-10 shadow-lg relative transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='relative'>
        {/* 
           TODO: Add a fallback UI here
        */}
        <Suspense
          key={item.id}
          fallback={<div className='w-full bg-red-300'>Loading...</div>}
        >
          <img
            src={item.path}
            alt={item.title}
            className='md:w-full object-cover hover:scale-110 transition duration-300 ease-in-out cursor-pointer'
          />
        </Suspense>

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
  )
}

export default Card

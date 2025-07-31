'use client'
import { Data, StoreState } from '@/types'
import React, { useState } from 'react'
import Badge from './Badge'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { closeDrawer, openDrawer } from '@/store/slices/drawerSlice'

const Card: React.FC<{ item: Data }> = ({ item }) => {
  const dispatch = useDispatch()

  const [showName, setShowName] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const isDrawerOpen = useSelector((state: StoreState) => state.drawer.isOpen)

  let productURL = '/products'
  if (item.category) productURL += `/${item.category}`
  if (item.sub_category) productURL += `/${item.sub_category}`
  if (item.id) productURL += `/${item.id}`

  const handleCardClick = (item: Data) => {
    dispatch(isDrawerOpen ? openDrawer(item) : closeDrawer())
  }

  return (
    <div
      key={item.id}
      className='bg-white grid place-items-center rounded-2xl overflow-hidden z-10 shadow-lg relative transition-opacity duration-700 ease-in-out cursor-pointer'
      onMouseEnter={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
      onClick={() => handleCardClick(item)}
    >
      <div className='relative w-full'>
        {/* Shimmer */}
        {isLoading && (
          <div className='absolute inset-0 animate-pulse bg-gray-200 z-10 rounded-xl' />
        )}

        {/* Image */}
        <Image
          src={item.original_img_path}
          alt={item.title || 'Product'}
          width={600}
          height={400}
          onLoad={() => {
            setTimeout(() => {
              setIsLoading(false)
            }, 250)
          }}
          className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out rounded-xl ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Badges */}
        {/* <Badge type='sold' show={item.sold} />
        <Badge type='new' show={item.new} /> */}

        {/* Title Overlay */}
        <div
          className={`px-3 pb-2 pt-5 w-full left-0 bottom-0 absolute transform transition-transform duration-300 ease-in-out ${
            showName ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{
            background:
              'linear-gradient(0deg,rgba(0, 0, 0, 0.65) 15%, rgba(0, 0, 0, 0) 100%)',
          }}
        >
          <h3 className='text-lg text-gray-100 mb-1 w-fit relative'>
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Card

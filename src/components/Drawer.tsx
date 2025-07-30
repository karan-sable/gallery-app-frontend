'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeDrawer } from '@/store/slices/drawerSlice'
import { StoreState } from '@/types'

const Drawer: React.FC = () => {
  const dispatch = useDispatch()
  const showDrawer = useSelector((state: StoreState) => state.drawer.isOpen)
  const handleCloseClick = () => {
    dispatch(closeDrawer())
  }

  return (
    <div
      className={` overflow-hidden fixed top-0 right-[-10px] w-72 md:w-[600px] h-screen bg-[rgba(0,0,0,0.9)] shadow-xl shadow-[rgba(0,0,0,0.75)] rounded-2xl text-center z-20 transform transition-transform duration-500 ease-in-out ${
        showDrawer ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <span
        className='bg-red-400 text-white hover:bg-red-600 py-1 px-3 rounded-xl rounded-t-none rounded-bl-none font-bold  top-[-1px] left-[-2px] absolute cursor-pointer transition-all ease-in-out duration-300'
        onClick={handleCloseClick}
      >
        X
      </span>
    </div>
  )
}

export default Drawer

'use client'
import Drawer from '@/components/Drawer'
import Products from '@/components/Products'
import { NextPage } from 'next'
import React, { useState } from 'react'

const Page: NextPage = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

  const handleDrawerToggle = () => {
    if (drawerOpen) {
      setDrawerOpen(false)
    } else {
      setDrawerOpen(true)
    }
  }
  return (
    <>
      <button
        className='mt-4 ml-10 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer transition-all ease-in-out duration-300'
        onClick={handleDrawerToggle}
      >
        Click to Open Drawer
      </button>
      <Products />

      <Drawer open={drawerOpen} onClose={handleDrawerToggle} />
    </>
  )
}

export default Page

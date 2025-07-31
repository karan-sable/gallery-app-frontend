'use client'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'

const Page: NextPage = () => {
  const router = useRouter()

  return (
    <div className='flex justify-center items-center h-screen'>
      <button
        onClick={() => router.push('/products')}
        className='px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 cursor-pointer transition-all ease-in-out duration-300'
      >
        Click here to go to products
      </button>
    </div>
  )
}

export default Page

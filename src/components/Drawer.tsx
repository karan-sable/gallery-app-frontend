import React from 'react'

const Drawer: React.FC<{ open?: boolean; onClose?: () => void }> = ({
  open = false,
  onClose,
}) => {
  return (
    <div
      className={`fixed top-2 right-[-10px] w-80 md:w-[600px] h-screen bg-white shadow-xl shadow-[rgba(0,0,0,0.75)] rounded-2xl text-center z-20 transform transition-transform duration-500 ease-in-out ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <span
        className='bg-red-500 py-1 px-3 rounded-full font-bold text-white top-2 left-3 absolute cursor-pointer'
        onClick={onClose}
      >
        X
      </span>
    </div>
  )
}

export default Drawer

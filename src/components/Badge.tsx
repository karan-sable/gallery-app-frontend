import React from 'react'

const Badge: React.FC<{
  type?: 'new' | 'sold'
  show?: boolean
}> = ({ type = 'new', show = true }) => {
  const variants = {
    new: {
      color: 'bg-[rgba(0,0,0,0.35)] text-yellow-400',
      position: 'top-2 left-2',
      text: 'New ✨',
    },

    sold: {
      color: 'bg-red-200 text-red-500',
      position: 'top-2 right-2',
      text: 'Sold',
    },
  }

  return (
    show && (
      <span
        className={`absolute ${variants[type].position} ${variants[type].color} w-fit text-xs font-semibold px-2 py-0.5 rounded-full`}
      >
        {variants[type].text}
      </span>
    )
  )
}

export default Badge

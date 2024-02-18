import React from 'react'

interface Props {
  title: string
  value: number
  icon: React.ReactNode
}

const CardLabel = ({ title, value, icon }: Props) => {
  return (
    <div className='flex flex-col min-w-0 break-words bg-white rounded'>
      <div className='flex-auto p-4'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-fit max-w-full'>
            <h5 className='text-gray-400 uppercase font-bold text-xs'>
              {title}
            </h5>
            <span className='font-semibold text-xl text-gray-700'>
              {value.toLocaleString('th-TH')}
            </span>
          </div>
          <div className='w-fit pr-4 flex-initial'>{icon}</div>
        </div>
      </div>
    </div>
  )
}

export default CardLabel

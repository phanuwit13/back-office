import Icon from '@/components/Icons'
import { MENU_LIST } from '@/constants/menu'
import { isActiveRoute } from '@/utils/path'
import { forwardRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SideBar = forwardRef<HTMLDivElement>((_, ref) => {
  const router = useLocation()

  return (
    <div
      ref={ref}
      className='fixed w-[280px] h-full bg-white shadow-sm px-3 z-10'
    >
      <div className='flex justify-center mt-6 mb-10'>
        <picture>
          <img
            className='w-32 h-auto'
            src='/images/logo.webp'
            alt='company logo'
          />
        </picture>
      </div>
      <div className='flex flex-col gap-2'>
        {MENU_LIST.map((item) => {
          return (
            <Link to={item.path} key={item.title}>
              <div
                className={`px-6 py-3 rounded text-center cursor-pointer flex items-center transition-colors text-gray-500 hover:bg-primary-500 hover:text-white ${
                  (router.pathname === item.path ||
                    isActiveRoute(item.activePath)) &&
                  'bg-primary-400 text-white'
                }`}
              >
                <div className='mr-2'>
                  <Icon name={item.icon} className='h-[18px] aspect-square' />
                </div>
                <div>
                  <p className='text-[14px] font-semibold'>{item.title}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
})

SideBar.displayName = 'SideBar'

export default SideBar

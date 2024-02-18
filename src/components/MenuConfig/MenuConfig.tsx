import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import { useMenuConfig } from './MenuConfig.hook'
import Icon from '@/components/Icons'
import { Link } from 'react-router-dom'
import { ROUTE } from '@/constants/routes'
import { pathToUrl } from '@/utils/path'
import { typeIconDrink } from '@/utils/drink'

const MenuConfig = () => {
  const { menuResponse } = useMenuConfig()

  return (
    <div className='mt-4 space-y-5'>
      <Tab.Group>
        <Tab.List className='flex overflow-x-auto pb-3'>
          {menuResponse?.data.map((item) => {
            return (
              <Tab
                key={item.id}
                className={({ selected }) =>
                  classNames(
                    'border-primary-100 border-b-2 w-full flex justify-center text-nowrap text-center focus-visible:outline-none py-2 hover:opacity-70',
                    {
                      '!border-primary-400 border-b-4': selected,
                    }
                  )
                }
              >
                <h2 className='text-primary-400 font-semibold text-[14px] flex gap-4 items-end px-2'>
                  {item.type}
                </h2>
              </Tab>
            )
          })}
        </Tab.List>
        <Tab.Panels>
          {menuResponse?.data.map((item) => {
            return (
              <Tab.Panel key={item.id}>
                <div className='flex justify-between items-center'>
                  <h2 className='text-primary-400 font-semibold text-[18px] flex gap-4 items-end'>
                    <Icon name={typeIconDrink(item.type)} className='w-8 h-8' />
                    {item.type}
                  </h2>
                  <Link
                    to={pathToUrl(ROUTE.CONFIGS_MENU, {
                      id: item.id.toString(),
                    })}
                  >
                    <Icon name='Edit' className='w-4 h-4 text-gray-400' />
                  </Link>
                </div>
                <div className='grid grid-cols-1 max-w-[440px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
                  {item.menus.map((menu) => {
                    return (
                      <div
                        key={menu.name}
                        className='border border-gray-100 rounded py-2 px-4 space-y-3 flex flex-col justify-between'
                      >
                        <div className='flex justify-between'>
                          <h4 className='text-[14px] font-semibold text-[#38312c]'>
                            {menu.name}
                          </h4>
                        </div>
                        <div className='flex justify-between items-end'>
                          <p className='text-[12px] text-primary-600'>Price</p>
                          <p className='text-[14px] text-primary-600 font-semibold'>
                            {menu.price}{' '}
                            <span className='font-normal text-[12px]'>
                              Bath
                            </span>
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <hr className='my-7 border-gray-100' />
              </Tab.Panel>
            )
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default MenuConfig

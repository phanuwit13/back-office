import Icon from '@/components/Icons'
import { useAuth } from '@/store/auth'
import { Menu, Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

interface TopBarProps {
  showNav: boolean
  setShowNav: (v: boolean) => void
}

const TopBar = ({ showNav, setShowNav }: TopBarProps) => {
  const { logout,user } = useAuth()

  return (
    <div
      className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] px-6 ${
        showNav ? 'pl-[304px]' : ''
      }`}
    >
      <div className=''>
        <Icon
          name='Menu'
          className='w-6 aspect-square text-gray-700 cursor-pointer'
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className='flex items-center'>
        <Popover className='relative'>
          <Popover.Button className='outline-none mr-5 md:mr-8 cursor-pointer text-gray-700'>
            <Icon name='Bell' className='h-6 w-6' />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform scale-95'
            enterTo='transform scale-100'
            leave='transition ease-in duration=75'
            leaveFrom='transform scale-100'
            leaveTo='transform scale-95'
          >
            <Popover.Panel className='absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen'>
              <div className='relative p-3'>
                <div className='flex justify-between items-center w-full'>
                  <p className='text-gray-700 font-medium'>Notifications</p>
                  <a className='text-sm text-orange-500' href='#'>
                    Mark all as read
                  </a>
                </div>
                <div className='mt-4 grid gap-4 grid-cols-1 overflow-hidden'>
                  <div className='flex'>
                    <div className='rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center'>
                      <Icon name='Check' className='h-4 w-4 text-green-600' />
                    </div>
                    <div className='ml-4'>
                      <p className='font-medium text-gray-700'>
                        Notification Title
                      </p>
                      <p className='text-sm text-gray-500 truncate'>
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center'>
                      <Icon name='Check' className='h-4 w-4 text-green-600' />
                    </div>
                    <div className='ml-4'>
                      <p className='font-medium text-gray-700'>
                        Notification Title
                      </p>
                      <p className='text-sm text-gray-500 truncate'>
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center'>
                      <Icon name='Check' className='h-4 w-4 text-green-600' />
                    </div>
                    <div className='ml-4'>
                      <p className='font-medium text-gray-700'>
                        Notification Title
                      </p>
                      <p className='text-sm text-gray-500 truncate'>
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center'>
                      <Icon name='Check' className='h-4 w-4 text-green-600' />
                    </div>
                    <div className='ml-4'>
                      <p className='font-medium text-gray-700'>
                        Notification Title
                      </p>
                      <p className='text-sm text-gray-500 truncate'>
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='inline-flex w-full justify-center items-center space-x-2'>
              <picture>
                <img
                  src='/images/profile.png'
                  className='rounded-full h-10 aspect-square border-2 p-1 shadow-sm'
                  alt='profile picture'
                />
              </picture>
              <span className='hidden md:block font-medium text-gray-700'>
                {user?.username}
              </span>
              <Icon
                name='ChevronDownIcon'
                className='ml-2 h-4 w-4 text-gray-700'
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform scale-95'
            enterTo='transform scale-100'
            leave='transition ease-in duration=75'
            leaveFrom='transform scale-100'
            leaveTo='transform scale-95'
          >
            <Menu.Items className='absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm'>
              <div className='p-1'>
                <Menu.Item>
                  <Link
                    to='#'
                    className='flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center'
                  >
                    <Icon name='Pencil' className='h-4 w-4 mr-2' />
                    Edit
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    to='#'
                    className='flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center'
                  >
                    <Icon name='CreditCard' className='h-4 w-4 mr-2' />
                    Billing
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <button
                    onClick={() => logout()}
                    className='w-full flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center'
                  >
                    <Icon name='LogOut' className='h-4 w-4 mr-2' />
                    Logout
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}

export default TopBar

import Icon from '@/components/Icons'
import { useAuth } from '@/store/auth'
import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { Fragment } from 'react'

interface TopBarProps {
  showNav: boolean
  setShowNav: (v: boolean) => void
}

const TopBar = ({ showNav, setShowNav }: TopBarProps) => {
  const { logout, user } = useAuth()

  return (
    <div
      className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] px-6 bg-white z-10 ${
        showNav ? 'pl-[304px]' : ''
      }`}
    >
      <div>
        <Icon
          name='Menu'
          className='w-6 aspect-square text-gray-700 cursor-pointer'
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className='flex items-center'>
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button
              className={classNames(
                'inline-flex w-full justify-center items-center space-x-2 ',
                {
                  '!hidden sm:!inline-flex': showNav,
                }
              )}
            >
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
                  <button
                    onClick={() => logout()}
                    className='w-full flex hover:bg-primary-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center'
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

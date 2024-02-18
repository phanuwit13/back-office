import SideBar from '@/components/Layout/MainLayout/SideBar'
import { Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import TopBar from './TopBar'
import classNames from 'classnames'

interface Props {
  children?: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  const [showNav, setShowNav] = useState(
    window?.innerWidth <= 1024 ? false : true
  )
  const [isMobile, setIsMobile] = useState(window?.innerWidth <= 1024 || false)

  function handleResize() {
    if (innerWidth <= 1024) {
      setShowNav(false)
      setIsMobile(true)
    } else {
      setShowNav(true)
      setIsMobile(false)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      addEventListener('reset', handleResize)
    }
    return () => {
      removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <TopBar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter='transform transition duration-[400ms]'
        enterFrom='-translate-x-full'
        enterTo='translate-x-0'
        leave='transform duration-[400ms] transition ease-in-out'
        leaveFrom='translate-x-0'
        leaveTo='-translate-x-full'
      >
        <SideBar />
      </Transition>
      <div
        className={classNames('bg-black/30 h-full w-full fixed z-[1] hidden', {
          '!block': showNav && isMobile,
        })}
      />
      <main
        className={`pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? 'pl-[280px]' : ''
        }`}
      >
        <div className='bg-gray-100 min-h-[calc(100dvh-64px)] h-auto px-4 md:px-16 py-8'>
          {children}
        </div>
      </main>
    </>
  )
}

export default MainLayout

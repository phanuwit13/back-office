import SideBar from '@/components/Layout/MainLayout/SideBar'
import { Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import TopBar from './TopBar'

interface Props {
  children?: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  const [showNav, setShowNav] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false)
      setIsMobile(true)
    } else {
      setShowNav(true)
      setIsMobile(false)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      addEventListener('resize', handleResize)
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
      <main
        className={`pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? 'pl-[280px]' : ''
        }`}
      >
        <div className='bg-gray-100 min-h-[calc(100dvh-64px)] px-4 md:px-16 pt-8'>{children}</div>
      </main>
    </>
  )
}

export default MainLayout

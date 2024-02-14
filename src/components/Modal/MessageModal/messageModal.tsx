import Icons, { IconName } from '@/components/Icons'
import { Dialog, Transition } from '@headlessui/react'
import cn from 'classnames'
import { Fragment } from 'react'
import { useMessageModal } from './messageModal.store'

export default function MessageModal() {
  const { isShow, onClose, message, type, callback, btnLabel } =
    useMessageModal()

  function closeModal() {
    callback?.()
    onClose()
  }

  const IconName = {
    error: 'XCircle',
    success: 'CheckCircle2',
    info: 'Info',
    warning: 'AlertCircle',
  }

  return (
    <Transition appear show={isShow} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='div'
                  className={cn('text-limeGreen-600 flex justify-center', {
                    'text-blue-600': type === 'info',
                    'text-red-500': type === 'error',
                    'text-yellow-500': type === 'warning',
                  })}
                >
                  <Icons name={IconName[type] as keyof IconName} size={80} />
                </Dialog.Title>
                <div className='mt-2 flex justify-center'>
                  <p className='text-sm text-gray-500'>{message}</p>
                </div>
                <div className='mt-4 flex justify-center'>
                  <button
                    onClick={closeModal}
                    type='button'
                    className='w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500'
                  >
                    {btnLabel ?? 'Close'}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

import { useLoadingBackdrop } from '@/components/LoadingBackdrop'
import { useMessageModal } from '@/components/Modal/MessageModal'
import { useUpdateMachine } from '@/services/machine/machine'
import { Machine } from '@/services/machine/machine.type'
import { Switch } from '@headlessui/react'
import { useEffect, useState } from 'react'

type Props = {
  machine: Machine
}

const ToggleAction = ({ machine }: Props) => {
  const [enabled, setEnabled] = useState(machine.isOpen)

  const mutateMachine = useUpdateMachine()
  const { setInfo } = useMessageModal()
  const { onClose, onShow } = useLoadingBackdrop()

  const handleUpdateStatusMachine = (data: Machine) => {
    onShow()
    mutateMachine.mutateAsync(data, {
      onSuccess: () => {
        setInfo({
          isShow: true,
          message: 'Update Machine Success!',
          type: 'success',
        })
      },
      onError: () => {
        setInfo({
          isShow: true,
          message: 'Update Machine Failed!',
          type: 'error',
        })
      },
      onSettled: () => {
        onClose()
      },
    })
  }

  useEffect(() => {
    setEnabled(machine.isOpen)
  }, [machine.isOpen])

  return (
    <div>
      <Switch
        checked={enabled}
        onChange={(v: boolean) => {
          setEnabled(v)
          handleUpdateStatusMachine({ ...machine, isOpen: v })
        }}
        className={`${enabled ? 'bg-[#edf7ed]' : 'bg-gray-100'}
        relative inline-flex h-7 w-[80px] shrink-0 cursor-pointer rounded border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <div className='absolute left-2 top-1/2 -translate-y-1/2 text-[12px] font-semibold text-[#4caf4f]'>
          ON
        </div>
        <div className='absolute right-2 top-1/2 -translate-y-1/2 text-[12px] font-semibold text-gray-800'>
          OFF
        </div>
        <span
          aria-hidden='true'
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
          pointer-events-none inline-block h-6 w-1/2 transform rounded bg-white ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}

export default ToggleAction

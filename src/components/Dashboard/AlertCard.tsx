import { useMemo } from 'react'
import Icon, { IconName } from '../Icons'
import classNames from 'classnames'

type Props = {
  title: string
  type: string
  description: string
}

const AlertCard = ({ title, type, description }: Props) => {
  const IconName: keyof IconName = useMemo(() => {
    if (type === 'info') return 'Info'
    if (type === 'warning') return 'Info'
    if (type === 'error') return "XCircle"

    return 'Info'
  }, [type])

  return (
    <div
      className={classNames(
        'border rounded text-[12px] font-[400] w-full px-4 py-2 m-auto space-y-3',
        {
          'bg-cyan-50 border-cyan-50 text-cyan-500': type === 'info',
          'bg-amber-50 border-amber-50 text-amber-500': type === 'warning',
          'bg-red-50 border-red-50 text-red-500': type === 'error',
          // 'bg-gray-100 border-gray-100 text-neutral-700':
          //   info.getValue() === 'offline',
          // 'bg-[#fef6ec] border-[#fef6ec] text-[#f8a140]':
          //   info.getValue() === 'maintenance',
        }
      )}
    >
      <div className='flex justify-between'>
        <div>
          <Icon name={IconName} />
        </div>
        <div>{title}</div>
      </div>
      <div>{description}</div>
    </div>
  )
}

export default AlertCard

import AlertCard from '@/components/Dashboard/AlertCard'
import CardLabel from '@/components/Dashboard/CardLabel'
import Icon from '@/components/Icons'
import TopSaleDashboardTable from '@/components/Tables/TopSaleDashboard'
import { useGetDashboard } from '@/services/dashboard/dashboard'
import { useMemo } from 'react'

const DashboardPage = () => {
  const { data: dashboardResponse } = useGetDashboard()

  const cardList = useMemo(() => {
    return [
      {
        title: 'Income',
        value: dashboardResponse?.data.income || 0,
        icon: (
          <Icon
            name='CircleDollarSign'
            className='w-[40px] h-[40px] fill-amber-300'
          />
        ),
      },
      {
        title: 'Online',
        value: dashboardResponse?.data.online || 0,
        icon: (
          <Icon name='Wifi' className='w-[40px] h-[40px] stroke-green-600' />
        ),
      },
      {
        title: 'Offline',
        value: dashboardResponse?.data.offline || 0,
        icon: (
          <Icon name='WifiOff' className='w-[40px] h-[40px] stroke-gray-400' />
        ),
      },
      {
        title: 'Maintenance',
        value: dashboardResponse?.data.maintenance || 0,
        icon: (
          <Icon
            name='MonitorX'
            className='w-[40px] h-[40px] stroke-orange-300'
          />
        ),
      },
    ]
  }, [dashboardResponse?.data])

  return (
    <div className='max-w-[1320px] w-full m-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {cardList.map((item) => {
          return (
            <div key={item.title} className='w-full'>
              <CardLabel
                title={item.title}
                value={item.value}
                icon={item.icon}
              />
            </div>
          )
        })}
      </div>
      <div className='grid grid-cols-6 gap-4 mt-6'>
        <div className='px-4 py-6 bg-white rounded col-span-6 lg:col-span-4'>
          <h2 className='text-gray-700 pl-[28px] font-semibold'>
            Machine Vending Top Income
          </h2>
          <TopSaleDashboardTable
            dataTable={dashboardResponse?.data.topSale || []}
          />
        </div>
        <div className='px-4 py-6 bg-white rounded col-span-6 lg:col-span-2'>
          <h2 className='text-gray-700 pl-[28px] font-semibold'>
            Machine Vending Alert
          </h2>
          <div className='px-4 mt-6 space-y-2'>
            {dashboardResponse?.data.notice.map((item) => {
              return (
                <AlertCard
                  key={item.vmName}
                  title={item.vmName}
                  description={item.msg}
                  type={item.type}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage

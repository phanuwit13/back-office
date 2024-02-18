import MenuConfig from '@/components/MenuConfig/MenuConfig'
import MachineDashboardList from '@/components/Tables/MachineDashboardList'

const Configs = () => {
  return (
    <div className='max-w-[1320px] w-full m-auto'>
      <div className='bg-white rounded py-6 px-4'>
        <h1 className='text-gray-700 font-semibold'>Menu Configs</h1>
        <MenuConfig />
      </div>
      <div className='bg-white rounded py-6 px-4 mt-6'>
        <MachineDashboardList />
      </div>
    </div>
  )
}

export default Configs

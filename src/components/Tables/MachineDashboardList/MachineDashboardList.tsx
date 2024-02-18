// type Props = {}

import Pagination from '@/components/Pagination'
import { useQuery } from '@/hooks/useQuery'
import { useGetMachine } from '@/services/machine/machine'
import { Machine } from '@/services/machine/machine.type'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import classNames from 'classnames'
import ToggleAction from './ToggleAction'

const columnHelper = createColumnHelper<Machine>()

const columns = [
  columnHelper.accessor('vmNo', {
    id: 'vmNo',
    cell: (info) => info.getValue(),
    header: () => <span>Machine Number</span>,
  }),
  columnHelper.accessor('location', {
    header: () => <span>location</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('income', {
    cell: (info) => <div className='text-right'>{info.getValue()}</div>,
    header: () => <div className='text-right'>income (Bath)</div>,
  }),
  columnHelper.accessor('uptime', {
    cell: (info) => (
      <div className='text-right hidden sm:block'>{info.getValue()}</div>
    ),
    header: () => (
      <div className='text-right hidden sm:block'>uptime (Days)</div>
    ),
  }),
  columnHelper.accessor('status', {
    cell: (info) => (
      <div
        className={classNames(
          'border text-center min-w-[120px] rounded text-[12px] font-[400] max-w-[120px] w-full px-4 py-0.5 m-auto',
          {
            'bg-[#edf7ed] border-[#edf7ed] text-[#4caf4f]':
              info.getValue() === 'online',
            'bg-gray-100 border-gray-100 text-neutral-700':
              info.getValue() === 'offline',
            'bg-[#fef6ec] border-[#fef6ec] text-[#f8a140]':
              info.getValue() === 'maintenance',
          }
        )}
      >
        {info.getValue()}
      </div>
    ),
    header: () => <div className='w-full min-w-[60px] text-center'>status</div>,
  }),
  columnHelper.display({
    id: 'action',
    header: () => <div className='w-full min-w-[60px] text-center'>open</div>,
    cell: (props) => (
      <div className='relative w-10'>
        <ToggleAction machine={props.row.original} />
      </div>
    ),
  }),
]

const MachineDashboardList = () => {
  const queryParams = useQuery()

  const limit = queryParams.get('limit') || '5'
  const offset = queryParams.get('offset') || '0'

  const { data: machineList, isLoading } = useGetMachine({
    limit: Number(limit),
    offset: Number(offset),
  })

  // const mutateMachine = useUpdateMachine()

  const table = useReactTable({
    data: machineList?.list || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  // const handleUpdateStatusMachine = (data: Machine) => {
  //   mutateMachine.mutateAsync(data, {
  //     onSuccess: () => {
  //       alert('success')
  //     },
  //   })
  // }

  if (isLoading) {
    return (
      <div className='p-2 px-5 min-h-[398px] flex justify-center items-center'>
        <div role='status' className='flex items-center flex-col gap-1'>
          <svg
            aria-hidden='true'
            className='w-8 h-8 mr-2 text-gray-200 animate-spin fill-primary-600'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='currentColor'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentFill'
            />
          </svg>
          <span className=''>Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className='p-2 px-1 min-h-[398px] '>
      {machineList?.list?.length ? (
        <div className='w-full overflow-x-auto px-2'>
          <table className='w-full'>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className='text-gray-400 text-[12px] font-semibold text-start py-4 uppercase px-2'
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className='border-b border-dashed'>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className='py-3 px-2 text-[14px]'>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='min-h-[300px] flex justify-center items-center font-semibold text-gray-200'>
          Data Not found
        </div>
      )}

      {machineList?.total && Number(limit) && (
        <div className='flex justify-end mt-4'>
          <Pagination
            currentPage={(Number(offset) + Number(limit)) / Number(limit)}
            itemsPerPage={Number(limit) || 5}
            total={machineList.total}
          />
        </div>
      )}
    </div>
  )
}

export default MachineDashboardList

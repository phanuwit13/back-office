import { ReactComponent as AwardIcon } from '@/assets/award.svg'

import { DashboardTopSale } from '@/services/dashboard/dashboard.type'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import classNames from 'classnames'

const columnHelper = createColumnHelper<DashboardTopSale>()

const columns = [
  columnHelper.display({
    id: 'no',
    cell: (props) => (
      <div className='relative w-10'>
        <AwardIcon
          className={classNames(
            'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 hidden',
            {
              'text-yellow-400 !block': props.row.index === 0,
              'text-gray-500 !block': props.row.index === 1,
              'text-amber-700 !block': props.row.index === 2,
            }
          )}
        />
        <span
          className={classNames(
            'absolute top-1/2 left-1/2 translate-y-[calc(-50%-6px)] -translate-x-1/2 text-white text-[18px] font-semibold',
            {
              hidden: props.row.index > 2,
            }
          )}
        >
          {props.row.index + 1}
        </span>
      </div>
    ),
  }),
  columnHelper.accessor('vmName', {
    cell: (info) => info.getValue(),
    header: () => <span>Machine Name</span>,
  }),
  columnHelper.accessor('location', {
    header: () => <span>location</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('sale', {
    cell: (info) => <div className='text-right'>{info.getValue()}</div>,
    header: () => <div className='text-right'>sale (cups)</div>,
  }),
  columnHelper.accessor('income', {
    cell: (info) => <div className='text-right'>{info.getValue()}</div>,
    header: () => <div className='text-right'>income (Bath)</div>,
  }),
]

const TopSaleDashboardTable = ({
  dataTable,
}: {
  dataTable: DashboardTopSale[]
}) => {
  const table = useReactTable({
    data: dataTable || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className='p-2 px-1'>
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
                  <td key={cell.id} className='py-8 px-2 text-[14px]'>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TopSaleDashboardTable

// type Props = {}

import { useGetMachine } from '@/services/dashboard/dashboard'
import { Machine } from '@/services/dashboard/dashboard.type'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

// const defaultData: Machines[] = [
//   {
//     vmNo: 'be3cbf19',
//     vmName: 'Machine-3',
//     status: 'offline',
//     location: 'Location-24',
//     income: 120.03,
//     sale: 150,
//     uptime: 60,
//   },
//   {
//     vmNo: '68ddcac0',
//     vmName: 'Machine-62',
//     status: 'online',
//     location: 'Location-23',
//     income: 516.74,
//     sale: 262,
//     uptime: 92,
//   },
//   {
//     vmNo: '14915fa2',
//     vmName: 'Machine-41',
//     status: 'offline',
//     location: 'Location-18',
//     income: 732.5,
//     sale: 181,
//     uptime: 11,
//   },
//   {
//     vmNo: 'fe4625c2',
//     vmName: 'Machine-86',
//     status: 'online',
//     location: 'Location-46',
//     income: 448.64,
//     sale: 432,
//     uptime: 1,
//   },
//   {
//     vmNo: 'bee3ae15',
//     vmName: 'Machine-90',
//     status: 'offline',
//     location: 'Location-20',
//     income: 835.24,
//     sale: 279,
//     uptime: 85,
//   },
//   {
//     vmNo: 'b8cf8765',
//     vmName: 'Machine-68',
//     status: 'offline',
//     location: 'Location-33',
//     income: 522.81,
//     sale: 332,
//     uptime: 93,
//   },
//   {
//     vmNo: 'abeba083',
//     vmName: 'Machine-18',
//     status: 'offline',
//     location: 'Location-43',
//     income: 418.91,
//     sale: 331,
//     uptime: 74,
//   },
//   {
//     vmNo: '8022fb8b',
//     vmName: 'Machine-59',
//     status: 'online',
//     location: 'Location-6',
//     income: 573.44,
//     sale: 283,
//     uptime: 86,
//   },
//   {
//     vmNo: '19609ab9',
//     vmName: 'Machine-44',
//     status: 'offline',
//     location: 'Location-11',
//     income: 970.98,
//     sale: 51,
//     uptime: 84,
//   },
//   {
//     vmNo: '6a580756',
//     vmName: 'Machine-52',
//     status: 'online',
//     location: 'Location-29',
//     income: 657.57,
//     sale: 450,
//     uptime: 96,
//   },
//   {
//     vmNo: 'db73ea28',
//     vmName: 'Machine-21',
//     status: 'online',
//     location: 'Location-47',
//     income: 780.2,
//     sale: 128,
//     uptime: 11,
//   },
//   {
//     vmNo: 'c4d01882',
//     vmName: 'Machine-88',
//     status: 'maintenance',
//     location: 'Location-29',
//     income: 782.87,
//     sale: 51,
//     uptime: 55,
//   },
//   {
//     vmNo: '782c4196',
//     vmName: 'Machine-72',
//     status: 'online',
//     location: 'Location-16',
//     income: 977.06,
//     sale: 272,
//     uptime: 79,
//   },
//   {
//     vmNo: '0521a80a',
//     vmName: 'Machine-95',
//     status: 'offline',
//     location: 'Location-28',
//     income: 384.82,
//     sale: 347,
//     uptime: 18,
//   },
//   {
//     vmNo: 'd6122432',
//     vmName: 'Machine-38',
//     status: 'maintenance',
//     location: 'Location-17',
//     income: 614.41,
//     sale: 324,
//     uptime: 19,
//   },
//   {
//     vmNo: 'e0e86de8',
//     vmName: 'Machine-56',
//     status: 'online',
//     location: 'Location-39',
//     income: 588.53,
//     sale: 436,
//     uptime: 9,
//   },
//   {
//     vmNo: '184b551e',
//     vmName: 'Machine-14',
//     status: 'maintenance',
//     location: 'Location-11',
//     income: 533.75,
//     sale: 135,
//     uptime: 97,
//   },
//   {
//     vmNo: 'fdad7b2a',
//     vmName: 'Machine-84',
//     status: 'maintenance',
//     location: 'Location-34',
//     income: 590.5,
//     sale: 163,
//     uptime: 47,
//   },
//   {
//     vmNo: 'd5fee33f',
//     vmName: 'Machine-7',
//     status: 'maintenance',
//     location: 'Location-22',
//     income: 489.16,
//     sale: 195,
//     uptime: 16,
//   },
//   {
//     vmNo: 'c1006a5d',
//     vmName: 'Machine-100',
//     status: 'online',
//     location: 'Location-42',
//     income: 311.22,
//     sale: 245,
//     uptime: 88,
//   },
// ]

const columnHelper = createColumnHelper<Machine>()

const columns = [
  columnHelper.accessor('vmNo', {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.vmName, {
    id: 'lastName',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('status', {
    header: () => 'Age',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('location', {
    header: 'Profile Progress',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('income', {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('sale', {
    header: 'Profile Progress',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('uptime', {
    header: 'Profile Progress',
    footer: (info) => info.column.id,
  }),
]

const MachineDashboardList = () => {
  const { data: machineList } = useGetMachine({ limit: '5', offset: '0' })

  const table = useReactTable({
    data: machineList || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className='p-2'>
      <table className='w-full border'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className='border'>
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
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className='border-b'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MachineDashboardList

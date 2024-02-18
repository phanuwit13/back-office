import ReactPaginate from 'react-paginate'
import Icon from '@/components/Icons'
import { useSearchParams } from 'react-router-dom'

interface PaginationProps {
  itemsPerPage: number
  total: number
  currentPage: number
}

function Pagination({ itemsPerPage, total, currentPage }: PaginationProps) {
  const [params, setParams] = useSearchParams()

  const pageCount = Math.ceil(total / itemsPerPage)

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % total
    const query: { [key: string]: string } = {}
    params.forEach((item, key) => {
      query[key] = item
    })
    query['offset'] = String(newOffset)
    query['limit'] = String(itemsPerPage)
    setParams(query)
  }

  return (
    <>
      <ReactPaginate
        breakLabel='...'
        nextLabel={<Icon name='ChevronRight' className='h-[14px] w-[14px]' />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={
          <Icon name='ChevronLeft' className='h-[14px] w-[14px]' />
        }
        initialPage={(currentPage || 1) - 1}
        className='flex items-center'
        nextLinkClassName='rounded-r cursor-pointer relative items-center px-2 py-1.5 text-[12px] font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 inline-flex'
        breakLinkClassName='relative items-center px-2 py-1 text-[12px] font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 inline-flex'
        pageLinkClassName='cursor-pointer relative items-center px-2.5 py-1 text-[12px] font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 inline-flex'
        previousLinkClassName='rounded-l cursor-pointer relative items-center px-2 py-1.5 text-[12px] font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 inline-flex'
        activeLinkClassName='cursor-pointer relative items-center px-2.5 py-1 text-[12px] font-semibold text-white bg-primary-600 ring-1 ring-inset ring-primary-600 hover:bg-primary-800 focus:z-20 focus:outline-offset-0 inline-flex'
      />
    </>
  )
}

export default Pagination

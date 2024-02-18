import { ROUTE } from "@/constants/routes"
import { Link } from "react-router-dom"

const Notfound = () => {
  return (
    <div className='bg-primary-50 min-h-[100dvh] flex justify-center items-center'>
      <div className='text-primary-500 text-center space-y-4'>
        <h1 className='text-[200px] leading-[200px]'>404</h1>
        <p className='text-[80px]'>Oops...</p>
        <p className='text-[60px]'>PAGE NOT FOUND</p>
        <Link to={ROUTE.DASHBOARD} className='border max-w-[200px] m-auto w-full py-4 flex justify-center items-center text-[18px] gap-2 rounded px-8 text-center cursor-pointer bg-primary-400 text-white transition-colors hover:bg-primary-500 hover:text-white'>
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default Notfound

import { queryClient } from '@/App'
import { useLoadingBackdrop } from '@/components/LoadingBackdrop'
import { useMessageModal } from '@/components/Modal/MessageModal'
import { ROUTE } from '@/constants/routes'
import { useGetLogin } from '@/services'
// import { setupApiAuth } from '@/services/auth/auth'
import { useAuth } from '@/store/auth'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

interface FormLogin {
  username: string
  password: string
}

const Login = () => {
  const { login } = useAuth()
  const { register, handleSubmit, watch } = useForm<FormLogin>()
  const { onClose: onCloseLoading, onShow: onShowLoading } =
    useLoadingBackdrop()
  const {
    isSuccess,
    data: loginData,
    refetch,
  } = useGetLogin({
    password: watch('password'),
    username: watch('username'),
  })
  const { setInfo } = useMessageModal()

  const onSubmit = () => {
    onShowLoading()
    refetch().then(() => {
      onCloseLoading()
    })
  }

  const form = {
    fieldUsername: register('username'),
    fieldPassword: register('password'),
  }

  useEffect(() => {
    if (isSuccess) {
      if (loginData.length) {
        // setupApiAuth('token')
        login(
          {
            token: 'token',
            redirectUri: ROUTE.DASHBOARD,
            remember: true,
          },
          {
            ...loginData[0],
          }
        )
      } else {
        queryClient.clear()
        setInfo({
          isShow: true,
          message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
          type: 'error',
          btnLabel: 'close',
        })
      }
    }
  }, [isSuccess, login, loginData, onCloseLoading, setInfo])

  return (
    <div className='bg-no-repeat bg-cover bg-center relative '>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-5 max-w-[425px] border p-4 m-auto rounded-lg mt-10'
      >
        <div className='space-y-2'>
          <label className='text-sm font-medium text-gray-700 tracking-wide'>
            Username
          </label>
          <input
            className=' w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400'
            type=''
            placeholder='Enter your Username'
            {...form.fieldUsername}
          />
        </div>
        <div className='space-y-2'>
          <label className='mb-5 text-sm font-medium text-gray-700 tracking-wide'>
            Password
          </label>
          <input
            className='w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400'
            type=''
            placeholder='Enter your password'
            {...form.fieldPassword}
          />
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <input
              id='remember_me'
              name='remember_me'
              type='checkbox'
              className='h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded'
            />
            <label
              htmlFor='remember_me'
              className='ml-2 block text-sm text-gray-800'
            >
              Remember me
            </label>
          </div>
          <div className='text-sm'>
            <a href='#' className='text-green-400 hover:text-green-500'>
              Forgot your password?
            </a>
          </div>
        </div>
        <div>
          <button
            type='submit'
            className='w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500'
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login

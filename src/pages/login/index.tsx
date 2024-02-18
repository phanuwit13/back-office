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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormLogin>()
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
    fieldUsername: register('username', {
      required: 'field is required',
    }),
    fieldPassword: register('password', {
      required: 'field is required',
    }),
  }

  useEffect(() => {
    if (isSuccess) {
      if (loginData.data.length) {
        // setupApiAuth('token')
        login(
          {
            token: 'token',
            redirectUri: ROUTE.DASHBOARD,
            remember: true,
          },
          {
            ...loginData.data[0],
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
    <div className='bg-primary-50 min-h-[100dvh] py-10'>
      <img alt='logo' src='/images/logo.webp' className='w-[300px] m-auto' />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-5 max-w-[425px] border p-4 m-auto rounded-lg mt-10 bg-white'
      >
        {/* <div className='space-y-2'>
          <label className='text-sm font-medium text-gray-700 tracking-wide'>
            Username
          </label>
          <input
            className=' w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400'
            type=''
            placeholder='Enter your Username'
            {...form.fieldUsername}
          />
        </div> */}
        <div className='space-y-2'>
          <label className='text-sm font-medium text-gray-700 tracking-wide'>
            Username
          </label>
          <input
            type='text'
            placeholder='Username'
            className='w-full rounded py-2 px-4 border text-sm outline-primary-500'
            {...form.fieldUsername}
          />
          {errors.username && (
            <div className='text-[10px] text-red-500 font-normal'>
              {errors.username.message}
            </div>
          )}
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium text-gray-700 tracking-wide'>
            Password
          </label>
          <input
            type='password'
            placeholder='Password'
            className='w-full rounded py-2 px-4 border text-sm outline-primary-500'
            {...form.fieldPassword}
          />
          {errors.password && (
            <div className='text-[10px] text-red-500 font-normal'>
              {errors.password.message}
            </div>
          )}
        </div>
        <div>
          <button
            type='submit'
            className='border w-full py-2 flex justify-center items-center text-[14px] gap-2 rounded px-8 text-center cursor-pointer bg-primary-400 text-white transition-colors hover:bg-primary-500 hover:text-white'
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login

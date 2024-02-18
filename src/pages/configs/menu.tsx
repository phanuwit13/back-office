import Icon from '@/components/Icons'
import { useLoadingBackdrop } from '@/components/LoadingBackdrop'
import { useMessageModal } from '@/components/Modal/MessageModal'
import { ROUTE } from '@/constants/routes'
import { useGetMenusDetail, useUpdateMenusDetail } from '@/services/menu/menu'
import { MenuResponse } from '@/services/menu/menu.type'
import { typeIconDrink } from '@/utils/drink'
import { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ConfigMenuPage = () => {
  const { id } = useParams()
  const { data: menuResponse } = useGetMenusDetail(id)
  const mutateMenuDetail = useUpdateMenusDetail(id)
  const { setInfo } = useMessageModal()
  const { onClose, onShow } = useLoadingBackdrop()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<MenuResponse>({
    defaultValues: menuResponse?.data,
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'menus',
  })

  const onSubmit = (value: MenuResponse) => {
    onShow()
    mutateMenuDetail.mutateAsync(value, {
      onSuccess: () => {
        setInfo({
          isShow: true,
          message: 'Update Machine Success!',
          type: 'success',
          callback: () => {
            navigate(ROUTE.CONFIGS)
          },
        })
      },
      onError: () => {
        setInfo({
          isShow: true,
          message: 'Update Machine Failed!',
          type: 'error',
        })
      },
      onSettled: () => {
        onClose()
      },
    })
  }

  useEffect(() => {
    if (menuResponse?.data) {
      reset(menuResponse?.data)
    }
  }, [menuResponse?.data, reset])

  return (
    <div className='max-w-[1320px] w-full m-auto'>
      <Link
        to={ROUTE.CONFIGS}
        className='flex items-center gap-2 text-[14px] text-gray-400 mb-5'
      >
        <Icon name='ArrowLeft' className='w-4 h-4' /> Back
      </Link>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white rounded py-6 px-4'
      >
        <div className='flex justify-between items-center gap-2'>
          <h2 className='text-primary-400 font-semibold text-[18px] flex gap-4 items-start'>
            <Icon
              name={typeIconDrink(menuResponse?.data.type || '')}
              className='w-8 h-8'
            />
            <div>
              <input
                type='text'
                placeholder='Type Menu'
                className='w-full rounded py-1.5 px-4 border text-sm outline-primary-500'
                {...register('type', {
                  required: 'field is required',
                })}
              />
              {errors.type && (
                <div className='text-[10px] text-red-500 font-normal'>
                  {errors.type.message}
                </div>
              )}
            </div>
          </h2>
          <button className='border max-w-[120px] w-full py-1 flex justify-center items-center text-[14px] gap-2 rounded px-6 text-center cursor-pointer bg-primary-400 text-white transition-colors hover:bg-primary-500 hover:text-white'>
            <Icon name='Save' className='w-4 h-4 text-white' /> SAVE
          </button>
        </div>
        <div className='grid grid-cols-1 max-w-[440px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'>
          {fields.map((field, index) => {
            return (
              <div
                key={field.id}
                className='border border-gray-100 rounded py-2 px-4 space-y-3 flex flex-col justify-between relative'
              >
                <button
                  onClick={() => {
                    remove(index)
                  }}
                  className='w-4 h-4 bg-red-500 text-white absolute flex justify-center items-center rounded-full right-[-8px] top-[-8px]'
                >
                  <Icon name='X' className='w-3 h-3' />
                </button>
                <div className='flex justify-between'>
                  <div className='text-[12px] font-semibold text-[#38312c] w-full'>
                    <div className='w-full'>
                      <input
                        type='text'
                        placeholder='Type Menu'
                        className='w-full rounded py-1.5 px-2 border outline-primary-500'
                        {...register(`menus.${index}.name`, {
                          required: 'field is required',
                        })}
                      />
                      {errors.menus?.[index]?.name && (
                        <div className='text-[10px] text-red-500 font-normal'>
                          {errors.menus?.[index]?.name?.message}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className='flex justify-between items-end'>
                  <p className='text-[12px] text-primary-600'>Price</p>
                  <div className='w-[50%]'>
                    <input
                      type='text'
                      placeholder='Type Menu'
                      className='w-full rounded py-1 px-2 text-[12px] text-right border outline-primary-500'
                      {...register(`menus.${index}.price`, {
                        required: 'field is required',
                      })}
                    />
                    {errors.menus?.[index]?.price && (
                      <div className='text-[10px] text-red-500 font-normal'>
                        {errors.menus?.[index]?.price?.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <button
          onClick={() => {
            append({
              amount: 0,
              name: `NEW MENU ${fields.length + 1}`,
              price: 0,
            })
          }}
          className='mt-4 border border-dashed w-full gap-2 flex items-center justify-center rounded py-1 text-[14px] text-gray-400'
        >
          <Icon name='Plus' className='h-4 w-4' />
          Add Menu
        </button>
      </form>
    </div>
  )
}

export default ConfigMenuPage

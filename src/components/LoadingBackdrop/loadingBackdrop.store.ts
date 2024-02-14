import { logger } from '@/store/log'
import { create } from 'zustand'

type LoadingBackdrop = {
  isShow: boolean
  onShow: () => void
  onClose: () => void
}

const initialState = {
  isShow: false,
}

export const useLoadingBackdrop = create<LoadingBackdrop>()(
  logger(
    (set) => ({
      ...initialState,
      onShow: () => {
        set({ isShow: true })
      },
      onClose: () => {
        set({ isShow: false })
      },
    }),
    'loading-backdrop'
  )
)

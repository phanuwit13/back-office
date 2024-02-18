import { apiClient } from '@/utils/api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { MenuResponse } from './menu.type'

export const useGetMenus = () => {
  return useQuery({
    queryKey: ['get-menus'],
    queryFn: () => {
      return apiClient.get<MenuResponse[]>(`/menus`)
    },
    retry: false,
  })
}

export const useGetMenusDetail = (id?: string) => {
  return useQuery({
    queryKey: ['get-menus-detail', id],
    queryFn: () => {
      return apiClient.get<MenuResponse>(`/menus/${id}`)
    },
    retry: false,
  })
}

export const useUpdateMenusDetail = (id?: string) => {
  return useMutation({
    mutationKey: ['put-menus-detail', id],
    mutationFn: (data: MenuResponse) => {
      return apiClient.put<MenuResponse>(`/menus/${id}`, data)
    },
    retry: false,
  })
}

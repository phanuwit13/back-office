import { Machine } from '@/services/machine/machine.type'
import { apiClient } from '@/utils/api'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useGetMachine = ({
  offset,
  limit,
}: {
  offset: number
  limit: number
}) => {
  return useQuery({
    queryKey: ['get-machine', offset, limit],
    queryFn: async () => {
      const res = await apiClient.get<Machine[]>(
        `/machine?_start=${offset}&_limit=${limit}`
      )
      const resAll = await apiClient.get<Machine[]>(`/machine`)
      return {
        list: res.data,
        total: resAll.data.length,
      }
    },
    retry: false,
    enabled: true,
  })
}

export const useUpdateMachine = () => {
  return useMutation({
    mutationKey: ['update-machine'],
    mutationFn: (data: Machine) => {
      return apiClient.put<Machine>(`/machine/${data.id}`, data)
    },
    retry: false,
  })
}

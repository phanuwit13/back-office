import { Machine } from '@/services/dashboard/dashboard.type'
import { apiClient } from '@/utils/api'
import { useQuery } from '@tanstack/react-query'

export const useGetMachine = ({
  offset,
  limit,
}: {
  offset: string
  limit: string
}) => {
  return useQuery({
    queryKey: ['get-machine'],
    queryFn: async (): Promise<Machine[]> => {
      apiClient.get(`/machine?_start=${offset}&_limit=${limit}`).then((res) => {
        console.log('res', res)
      })
      return []
    },
    refetchOnWindowFocus: false,
    retry: false,
  })
}

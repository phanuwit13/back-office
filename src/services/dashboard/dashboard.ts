import { DashboardResponse } from '@/services/dashboard/dashboard.type'
import { apiClient } from '@/utils/api'
import { useQuery } from '@tanstack/react-query'


export const useGetDashboard = () => {
  return useQuery({
    queryKey: ['get-dashboard'],
    queryFn: () => {
      return apiClient.get<DashboardResponse>(`/dashboard`)
    },
    retry: false,
  })
}

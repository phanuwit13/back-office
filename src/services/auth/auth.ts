import { UserDetailInfo } from '@/services/auth/auth.type'
import { useAuth } from '@/store/auth'
import { apiClient } from '@/utils/api'
import { useQuery } from '@tanstack/react-query'

export const useUserDetail = ({ id }: { id: string }) => {
  const { token } = useAuth()
  return useQuery({
    queryKey: ['get-user-detail'],
    queryFn: (): Promise<UserDetailInfo> =>
      apiClient.get(`/user/${id}`, {
        headers: {
          Authorization: token,
        },
      }),
  })
}

export const useGetLogin = ({
  username,
  password,
}: {
  username: string
  password: string
}) => {
  return useQuery({
    queryKey: ['get-login'],
    queryFn: async (): Promise<UserDetailInfo[]> => {
      return apiClient.get(`/users?username=${username}&password=${password}`)
    },
    refetchOnWindowFocus: false,
    enabled: false,
    retry: false,
  })
}

// export const setupApiAuth = (token: string) => {
//   apiClient.interceptors.request.use((config) => {
//     const newConfig = { ...config }
//     newConfig.url = `${config.url}`
//     newConfig.headers.Authorization = `Bearer ${token}`

//     if (newConfig.headers['Content-Type'] === 'multipart/form-data')
//       return newConfig

//     if (config.params) {
//       newConfig.params = decamelizeKeys(config.params)
//     }

//     if (config.data) {
//       newConfig.data = decamelizeKeys(config.data)
//     }

//     return newConfig
//   })
// }

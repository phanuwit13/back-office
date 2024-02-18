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
    queryFn: () => {
      return apiClient.get<UserDetailInfo[]>(
        `/users?username=${username}&password=${password}`
      )
    },
    refetchOnWindowFocus: false,
    enabled: false,
    retry: false,
  })
}

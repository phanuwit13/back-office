import { useQuery } from '@/hooks/useQuery'
import { useGetMachine } from '@/services/machine/machine'

const useMachineDashboardList = () => {
  const queryParams = useQuery()

  const limit = queryParams.get('limit') || '5'
  const offset = queryParams.get('offset') || '0'

  const { data: machineList, isLoading } = useGetMachine({
    limit: Number(limit),
    offset: Number(offset),
  })

  return { machineList, isLoading, limit, offset }
}

export { useMachineDashboardList }

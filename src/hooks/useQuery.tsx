import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

function useQuery() {
  const { search } = useLocation()
  const queryParams = useMemo(() => new URLSearchParams(search), [search])
  const [param, setParam] = useState(queryParams)
  
  useEffect(() => {
    setParam(queryParams)
  }, [queryParams])

  return param
}

export { useQuery }
import { config } from '@/configs/env'
import axios, { InternalAxiosRequestConfig } from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'

const apiClient = axios.create({
  baseURL: config.apiEndpoint,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// Axios middleware to convert all api responses to camelCase

apiClient.interceptors.response.use(
  function (response) {
    if (
      response.data &&
      response.headers['content-type'] === 'application/json'
    ) {
      response.data = camelizeKeys(response.data)
    }

    return response
  },
  function (error) {
    const res = error.response
    console.error('Looks like there was a problem. Status', res.status)
    return Promise.reject(error)
  }
)

// Axios middleware to convert all api requests to snake_case
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const newConfig = { ...config }
  newConfig.url = `${config.url}`

  if (newConfig.headers['Content-Type'] === 'multipart/form-data')
    return newConfig

  if (config.params) {
    newConfig.params = decamelizeKeys(config.params)
  }

  if (config.data) {
    newConfig.data = decamelizeKeys(config.data)
  }

  return newConfig
})

export { apiClient }


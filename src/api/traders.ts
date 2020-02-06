import apiClient from './apiClient'

export interface ITrader {
  id: number
  name: string
  username: string
  email: string
  address: any
  phone: string
  website: string
  company: any
}

export const fetchTradersApiCall = async (): Promise<ITrader[]> => {
  const response = await apiClient.get<ITrader[]>('/users')
  return response.data
}

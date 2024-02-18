export interface DashboardResponse {
  income: number
  online: number
  offline: number
  maintenance: number
  topSale: DashboardTopSale[]
  notice: DashboardNotice[]
}

export interface DashboardTopSale {
  vmNo: string
  vmName: string
  location: string
  income: number
  sale: number
}

export interface DashboardNotice {
  type: string
  msg: string
  vmName:string
}

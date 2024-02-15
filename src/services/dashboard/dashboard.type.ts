export interface Dashboard {
  machine: Machine[]
}

export interface Machine {
  vmNo: string
  vmName: string
  status: string
  location: string
  income: number
  sale: number
  uptime: number
}

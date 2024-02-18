export interface MenuResponse {
  id: number
  type: string
  menus: Menu[]
}

export interface Menu {
  name: string
  price: number
  amount: number
}

import { useGetMenus } from "@/services/menu/menu"

const useMenuConfig = () => {
  const { data: menuResponse } = useGetMenus()

  return { menuResponse }
}

export { useMenuConfig }

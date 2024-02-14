import { IconName } from "@/components/Icons"

interface Menu {
  path: string
  icon: keyof IconName
  title: string
  activePath: never[]
}

export const MENU_LIST: Menu[] = [
  {
    path: '/',
    icon: 'LayoutDashboard',
    title: 'Dashboard',
    activePath: [],
  },
  {
    path: '/config',
    icon: 'Settings',
    title: 'Configs',
    activePath: [],
  },
]

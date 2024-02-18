import { IconName } from '@/components/Icons'
import { ROUTE } from './routes'

interface Menu {
  path: string
  icon: keyof IconName
  title: string
  activePath: string[]
}

export const MENU_LIST: Menu[] = [
  {
    path: ROUTE.DASHBOARD,
    icon: 'LayoutDashboard',
    title: 'Dashboard',
    activePath: [ROUTE.DASHBOARD],
  },
  {
    path: ROUTE.CONFIGS,
    icon: 'Settings',
    title: 'Configs',
    activePath: [ROUTE.CONFIGS, ROUTE.CONFIGS_MENU],
  },
]

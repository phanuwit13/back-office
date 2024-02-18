import MainLayout from '@/components/Layout/MainLayout'
import { ROUTE } from '@/constants/routes'
import Notfound from '@/pages/404'
import ConfigsPage from '@/pages/configs'
import ConfigMenuPage from '@/pages/configs/menu'
import DashboardPage from '@/pages/dashboard'
import LoginPage from '@/pages/login'
import { LayoutRouteProps, PathRouteProps } from 'react-router-dom'

export type RouteConfig = (PathRouteProps | LayoutRouteProps) & {
  authGuard?: boolean
  guestGuard?: boolean
  layout?: ({ children }: { children: React.ReactNode }) => React.ReactNode
}

const routeConfig: RouteConfig[] = [
  {
    path: ROUTE.DASHBOARD,
    element: <DashboardPage />,
    authGuard: true,
    layout: MainLayout,
  },
  {
    path: ROUTE.CONFIGS,
    element: <ConfigsPage />,
    authGuard:true,
    layout: MainLayout,
  },
  {
    path: ROUTE.CONFIGS_MENU,
    element: <ConfigMenuPage />,
    authGuard:true,
    layout: MainLayout,
  },
  {
    path: ROUTE.LOGIN,
    element: <LoginPage />,
    guestGuard: true,
    // layout: RegisterLayout ,
  },
  {
    path: '*',
    element: <Notfound />,
  },
]

export default routeConfig

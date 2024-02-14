import Auth from '@/auth'
import LoadingBackdrop from '@/components/LoadingBackdrop'
import routeConfig, { RouteConfig } from '@/routers'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MessageModal from './components/Modal/MessageModal'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const RenderRoutes = ({ routes }: { routes: RouteConfig[] }) => {
  return (
    <Routes>
      {routes.map(
        (
          { guestGuard, authGuard, layout: LayoutComponents, ...route },
          index
        ) => {
          //get layout
          const element = LayoutComponents ? (
            <LayoutComponents>{route.element}</LayoutComponents>
          ) : (
            route.element
          )

          //assign check auth
          const render = (
            <Auth
              guestGuard={Boolean(guestGuard)}
              authGuard={Boolean(authGuard)}
            >
              {element}
            </Auth>
          )

          //create route
          return <Route key={index} {...route} element={render} />
        }
      )}
    </Routes>
  )
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <RenderRoutes routes={routeConfig} />
            <LoadingBackdrop />
            <MessageModal />
          </Suspense>
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App

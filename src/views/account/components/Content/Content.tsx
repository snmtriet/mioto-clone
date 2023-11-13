import { useMemo, lazy, Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import { Loading } from '@/components/shared'
import { AppRoute } from '@/components/route'

const settings = {
  '/account': lazy(() => import('./Account')),
  '/myfavs': lazy(() => import('./MyFavs')),
  '/mytrips': lazy(() => import('./MyTrips')),
  '/myreward': lazy(() => import('./MyReward')),
  '/myaddress': lazy(() => import('./MyAddress')),
  '/resetpw': lazy(() => import('./ResetPassword')),
}

const Content = () => {
  const { pathname } = useLocation()

  const renderSetting = useMemo(() => {
    return settings[pathname as keyof typeof settings]
  }, [pathname])

  return (
    <div className="content-account">
      <Suspense
        fallback={
          <div className="loading-center">
            <Loading loading={true} />
          </div>
        }
      >
        <AppRoute component={renderSetting} />
      </Suspense>
    </div>
  )
}

export default Content

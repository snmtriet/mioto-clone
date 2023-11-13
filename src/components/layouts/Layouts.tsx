import { lazy, Suspense, useMemo } from 'react'
import { Loading } from '../shared'

const layouts = {
  default: lazy(() => import('./MainLayout')),
}

const Layouts = () => {
  const AppLayout = useMemo(() => {
    return layouts['default']
  }, [])

  return (
    <Suspense
      fallback={
        <div className="loading-center">
          <Loading loading={true} />
        </div>
      }
    >
      <AppLayout />
    </Suspense>
  )
}

export default Layouts

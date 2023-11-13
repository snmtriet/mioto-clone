import { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Loading } from '@/components/shared'
import { publicRoutes } from '@/configs/routes.config'
import { AppRoute, PublicRoute } from '@/components/route'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute />}>
        {publicRoutes.map((route, index) => {
          return (
            <Route
              key={route.path + index}
              path={route.path}
              element={<AppRoute component={route.component} />}
            />
          )
        })}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  )
}

const Views = () => {
  return (
    <Suspense
      fallback={
        <div className="loading-center">
          <Loading loading={true} />
        </div>
      }
    >
      <AllRoutes />
    </Suspense>
  )
}

export default Views

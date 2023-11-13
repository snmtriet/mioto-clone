import { useCallback, useEffect, useState } from 'react'
import useWindowDimensions from './useWindowDimensions'
import { useLocation } from 'react-router-dom'

const useSidebarSticky = () => {
  const [data, setData] = useState({
    run: false,
    width: 0,
    canScroll: true,
    containerBottom: 0,
  })
  const { pathname } = useLocation()

  const { width } = useWindowDimensions()

  const handleScroll = useCallback(() => {
    const currentPosition = window.scrollY

    const carOwner = document.querySelector('.car-owner') as HTMLDivElement
    const sidebar = document.querySelector(
      '.sidebar-account-sticky'
    ) as HTMLDivElement
    const carOwnerBottom = Math.ceil(carOwner.getBoundingClientRect().bottom)
    const sidebarBottom = Math.ceil(sidebar.getBoundingClientRect().bottom)
    const currentOffset = carOwnerBottom - sidebarBottom
    if (currentOffset > 0 && currentOffset <= 50) {
      const translateY = 50 - currentOffset
      sidebar.style.transition = 'transform 0.3s ease-in-out'
      sidebar.style.transform = `translateY(-${translateY}px)`
    }
    if (currentOffset >= 100) {
      sidebar.style.transform = 'translateY(0px)'
    }
    if (currentPosition > 165) {
      setData((prev) => ({
        ...prev,
        run: true,
        canScroll: currentPosition <= prev.containerBottom,
      }))
    } else {
      setData((prev) => ({ ...prev, run: false }))
    }
  }, [])

  useEffect(() => {
    if (width < 992 || pathname !== '/account') {
      setData((prev) => ({
        ...prev,
        run: false,
      }))
      return
    }
    const container = document.querySelector(
      '.account-container'
    ) as HTMLDivElement
    const content = document.querySelector('.content-account') as HTMLDivElement
    const sidebar = document.querySelector(
      '.sidebar-account-sticky'
    ) as HTMLDivElement
    if (container && content && sidebar) {
      const containerWidth = container.offsetWidth
      const contentWidth = content.offsetWidth
      const width = containerWidth - contentWidth

      setData((prev) => ({
        ...prev,
        width: width - 20,
        containerBottom: container.getBoundingClientRect().bottom,
      }))
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [width, handleScroll, pathname])

  const style = data.run
    ? ({
        transform: 'translateZ(0px)',
        position: 'fixed',
        top: 0,
        width: data.width,
      } as React.CSSProperties)
    : { transform: 'translateZ(0px)' }

  return { data, style }
}

export default useSidebarSticky

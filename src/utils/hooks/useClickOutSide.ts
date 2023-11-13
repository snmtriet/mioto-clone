import { RefObject, useEffect, useRef } from 'react'

const useClickOutside = <T extends HTMLDivElement>(callback: () => void) => {
  const domNode = useRef<T | null>(null)
  useEffect(() => {
    const eventHandler = (event: MouseEvent) => {
      if (domNode.current && !domNode.current.contains(event.target as Node)) {
        callback()
      }
    }
    document.addEventListener('mousedown', eventHandler)

    return () => {
      document.removeEventListener('mousedown', eventHandler)
    }
  }, [callback])
  return domNode as RefObject<HTMLDivElement>
}

export default useClickOutside

import { ReactNode, CSSProperties } from 'react'

export interface CommonProps {
  className?: string
  children?: ReactNode
  style?: CSSProperties
}

export type IconProps = {
  width?: string | number
  height?: string | number
  stroke?: string
  fill?: string
}

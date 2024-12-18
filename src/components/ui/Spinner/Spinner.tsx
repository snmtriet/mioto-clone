import { forwardRef } from 'react'
import classNames from 'classnames'
import { CgSpinner } from 'react-icons/cg'
import type { CommonProps } from '@/@types/common'
import type { ElementType } from 'react'

export interface SpinnerProps extends CommonProps {
  enableTheme?: boolean
  indicator?: ElementType
  isSpinning?: boolean
  size?: string | number
}

const Spinner = forwardRef((props: SpinnerProps, ref) => {
  const {
    className,
    indicator: Component = CgSpinner,
    isSpinning = true,
    size = 20,
    style,
    ...rest
  } = props

  const spinnerStyle = {
    height: size,
    width: size,
    ...style,
  }

  const spinnerClass = classNames(isSpinning && 'animate-spin', className)

  return (
    <Component
      ref={ref}
      style={spinnerStyle}
      className={spinnerClass}
      {...rest}
    />
  )
})

Spinner.displayName = 'Spinner'

export default Spinner

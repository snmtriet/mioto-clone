import classNames from 'classnames'
import { InputHTMLAttributes } from 'react'

type InputFieldProps = {
  label?: string
  iconRight?: {
    el: React.ReactNode
    onClick?: React.MouseEventHandler
  }
} & InputHTMLAttributes<HTMLInputElement>

const InputField = (props: InputFieldProps) => {
  const { label, iconRight, disabled, ...rest } = props
  return (
    <div className="custom-input">
      {label && (
        <div className="wrap-info">
          <div className="title-status">
            <p>{label}</p>
          </div>
          <div className="desc"></div>
        </div>
      )}
      <div className={classNames('wrap-input', disabled && 'disabled')}>
        <div className="wrap-text">
          <input disabled={disabled} {...rest} />
        </div>
        {iconRight?.el && (
          <div className="wrap-svg" onClick={iconRight?.onClick}>
            {iconRight.el}
          </div>
        )}
      </div>
    </div>
  )
}

export default InputField

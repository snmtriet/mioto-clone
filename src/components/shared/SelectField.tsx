import { SelectHTMLAttributes } from 'react'

type SelectFieldProps = {
  label?: string
  options: {
    label: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any
  }[]
} & SelectHTMLAttributes<HTMLSelectElement>

const SelectField = (props: SelectFieldProps) => {
  const { label, options, ...rest } = props
  return (
    <div className="custom-input">
      <div className="wrap-info">
        <div className="title-status">
          <p>{label}</p>
        </div>
      </div>
      <div className="custom-select">
        <select name="ip_gender" {...rest}>
          {options &&
            options.length > 0 &&
            options.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default SelectField

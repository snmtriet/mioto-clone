import { InputField, SelectField } from '@/components/shared'

const options = [
  {
    label: 'Nam',
    value: 1,
  },
  {
    label: 'Nữ',
    value: 2,
  },
]

const ModalChangeInfo = () => {
  return (
    <div className="modal-confirm-body">
      <InputField label="Tên tài khoản" placeholder="Minh Triet" />
      <InputField label="Ngày sinh" placeholder="01-01-2000" />
      <SelectField label="Giới tính" name="gender" options={options} />
      <button className="btn btn-primary btn--m" type="button">
        Cập nhật
      </button>
    </div>
  )
}

export default ModalChangeInfo

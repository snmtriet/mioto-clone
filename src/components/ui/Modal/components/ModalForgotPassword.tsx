import { InputField } from '@/components/shared'

const ModalForgotPassword = () => {
  return (
    <div className="modal-input-body">
      <InputField type="text" name="username" label="Điện thoại hoặc email" />
      <div className="wrap-btn">
        <button disabled className="btn btn-primary btn--m">
          Tiếp tục
        </button>
      </div>
    </div>
  )
}

export default ModalForgotPassword

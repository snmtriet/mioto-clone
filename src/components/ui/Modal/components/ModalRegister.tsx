import { useState } from 'react'
import { Link } from 'react-router-dom'
import { InputField } from '@/components/shared'
import {
  IconEyeClose,
  IconEyeOpen,
  IconFacebook,
  IconGoogle,
} from '@/components/shared/Icon'

const ModalRegister = () => {
  const [isShowPass, setIsShowPass] = useState(false)
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(false)

  const handleTogglePass = () => setIsShowPass((prev) => !prev)
  const handleToggleConfirmPass = () => setIsShowConfirmPass((prev) => !prev)

  return (
    <div className="modal-input-body">
      <div className="modal-input-body">
        <InputField name="phone" type="text" label="Số điện thoại" />
        <InputField name="name" type="text" label="Tên hiển thị" />
        <InputField
          name="password"
          type={isShowPass ? 'text' : 'password'}
          label="Mật khẩu"
          iconRight={{
            el: !isShowPass ? <IconEyeClose /> : <IconEyeOpen />,
            onClick: handleTogglePass,
          }}
        />
        <InputField
          name="confirmPassword"
          type={isShowConfirmPass ? 'text' : 'password'}
          label="Xác nhận mật khẩu"
          iconRight={{
            el: !isShowConfirmPass ? <IconEyeClose /> : <IconEyeOpen />,
            onClick: handleToggleConfirmPass,
          }}
        />
        <InputField
          name="referralCode"
          type="text"
          label="Mã giới thiệu (nếu có)"
        />
        <div className="wrap-test">
          <div className="custom-checkbox-selected">
            <input type="checkbox" id="cbPolicy" name="cbPolicy" />
            <label htmlFor="cbPolicy">
              Tôi đồng ý với chính sách của Mioto.{' '}
              <Link className="text-primary fontWeight-5" to="/privacy">
                Chi tiết
              </Link>
            </label>
          </div>
        </div>
        <div className="wrap-btn btn-register">
          <button disabled className="btn btn--m btn-primary">
            Đăng ký
          </button>
        </div>
        <div className="wrap-btn db-btn-svg">
          <button className="btn btn--s btn-secondary">
            <div className="wrap-svg">
              <IconFacebook />
            </div>
            <span>Facebook</span>
          </button>
          <button className="btn btn--s btn-secondary">
            <div className="wrap-svg">
              <IconGoogle />
            </div>
            <span>Google</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalRegister

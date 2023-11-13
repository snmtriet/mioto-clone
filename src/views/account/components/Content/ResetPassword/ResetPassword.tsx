import { InputField } from '@/components/shared'
import { IconEyeClose } from '@/components/shared/Icon'
import React from 'react'

const ResetPassword = () => {
  return (
    <>
      <div className="content-title">
        <h4>Đổi mật khẩu</h4>
        <p>Vui lòng nhập mật khẩu hiện tại của bạn để thay đổi mật khẩu</p>
      </div>
      <div className="content-item change-pw">
        <div className="title">
          <h5>Nhập mật khẩu</h5>
        </div>
        <div className="content">
          <InputField
            type="password"
            iconRight={{
              el: <IconEyeClose />,
            }}
            label="Mật khẩu hiện tại"
          />
          <InputField
            type="password"
            iconRight={{
              el: <IconEyeClose />,
            }}
            label="Mật khẩu mới"
          />
          <InputField
            type="password"
            iconRight={{
              el: <IconEyeClose />,
            }}
            label="Xác nhận mật khẩu mới"
          />
          <div className="apply-button">
            <button className="btn btn--m btn-primary" disabled>
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword

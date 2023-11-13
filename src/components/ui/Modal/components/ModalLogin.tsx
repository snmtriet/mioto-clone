import { useState } from 'react'
import { ENUM_AUTH_MODAL } from '@/@types/modal'
import { InputField, Loading } from '@/components/shared'
import {
  IconEyeClose,
  IconEyeOpen,
  IconFacebook,
  IconGoogle,
} from '@/components/shared/Icon'
import { setUser, signInSuccess, useAppDispatch } from '@/store'

type ModalLoginProps = {
  onOpen: (type: ENUM_AUTH_MODAL) => void
  onClose: () => void
}

const timer = (time: number) =>
  new Promise((res) =>
    setTimeout(() => {
      res(true)
    }, time)
  )

const ModalLogin = (props: ModalLoginProps) => {
  const { onOpen, onClose } = props
  const dispatch = useAppDispatch()
  const [isShowPass, setIsShowPass] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleToggle = () => setIsShowPass((prev) => !prev)

  const handleSubmit = async () => {
    setIsLoading(true)
    await timer(2000)
    dispatch(signInSuccess('wVYrxaeNa9OxdnULvde1Au5m5w63'))
    dispatch(
      setUser({
        username: 'Minh Triet',
      })
    )
    setIsLoading(false)
    onClose()
  }

  return (
    <div className="modal-input-body modal-login-body">
      <InputField
        label="Số điện thoại hoặc email"
        name="username"
        type="text"
      />
      <InputField
        label="Mật khẩu"
        name="password"
        type={isShowPass ? 'text' : 'password'}
        iconRight={{
          el: !isShowPass ? <IconEyeClose /> : <IconEyeOpen />,
          onClick: handleToggle,
        }}
      />
      <div
        className="block-content textAlign-right"
        onClick={() => onOpen(ENUM_AUTH_MODAL.forgot)}
      >
        <button className="fontWeight-6 font-14">Quên mật khẩu?</button>
      </div>
      <div className="wrap-btn btn-register">
        <button
          className="btn btn--m btn-primary"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? <Loading type="dots" /> : 'Đăng nhập'}
        </button>
      </div>
      <p
        className="font-14 login-note"
        onClick={() => onOpen(ENUM_AUTH_MODAL.register)}
      >
        Bạn chưa là thành viên? <button>&nbsp;Đăng ký ngay</button>
      </p>
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
  )
}

export default ModalLogin

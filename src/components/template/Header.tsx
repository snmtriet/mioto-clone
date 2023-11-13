import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconBar } from '../shared/Icon'
import { ENUM_AUTH_MODAL } from '@/@types/modal'
import { MenuMobile, Notification, UserDropdown } from '../ui'
import Modal, {
  ModalForgotPassword,
  ModalLogin,
  ModalRegister,
} from '../ui/Modal'
import { useAuth } from '@/utils/hooks'

const initOpenModal = {
  login: false,
  register: false,
  forgot: false,
}

const Header = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false)
  const [openModal, setOpenModal] = useState(initOpenModal)
  const { pathname } = useLocation()

  const { authenticated } = useAuth()

  useEffect(() => {
    setOpenMenuMobile(false)
  }, [pathname])

  const handleOpenModal = (type: ENUM_AUTH_MODAL) => {
    setOpenModal(() => {
      if (type === ENUM_AUTH_MODAL.login) {
        return { login: true, register: false, forgot: false }
      } else if (type === ENUM_AUTH_MODAL.register) {
        return { register: true, login: false, forgot: false }
      } else {
        return { forgot: true, register: false, login: false }
      }
    })
  }
  const handleCloseModal = () => {
    setOpenModal(initOpenModal)
  }

  const handleOpen = () => setOpenMenuMobile(true)
  const handleClose = () => setOpenMenuMobile(false)

  return (
    <section className="header scroll-top">
      <div className="m-container">
        <Link to="/" className="logo-container">
          <div className="full-logo">
            <img
              src="https://www.mioto.vn/static/media/logo-full.ea382559.png"
              alt="logo"
              loading="lazy"
            />
          </div>
          <div className="short-logo">
            <img loading="lazy" src="/logo-mini.png" alt="Mioto" />
          </div>
        </Link>
        <div className="menu-container">
          <Link to="/aboutus">Về Mioto</Link>
          <Link to="/carregistermode">Trở thành chủ xe</Link>
          {authenticated && <Link to="/mytrips">Chuyến đi</Link>}
          <div className="vertical-line"></div>
          {!authenticated ? (
            <>
              <button
                className="btn btn--s sign-in"
                onClick={() => handleOpenModal(ENUM_AUTH_MODAL.register)}
              >
                Đăng ký
              </button>
              <button
                className="btn btn--s"
                onClick={() => handleOpenModal(ENUM_AUTH_MODAL.login)}
              >
                Đăng nhập
              </button>
              <button className="dropdown-profile" onClick={handleOpen}>
                <div className="wrap-svg tab-menu">
                  <IconBar />
                </div>
              </button>
            </>
          ) : (
            <>
              <Notification />
              <UserDropdown onOpen={handleOpen} />
            </>
          )}
          <MenuMobile
            open={openMenuMobile}
            onClose={handleClose}
            authenticated={authenticated}
            onOpenModal={handleOpenModal}
          />
        </div>
      </div>
      <Modal
        className="modal-s modal-input"
        open={openModal.login}
        onClose={handleCloseModal}
        headerTitle="Đăng nhập"
      >
        <ModalLogin onOpen={handleOpenModal} onClose={handleCloseModal} />
      </Modal>
      <Modal
        className="modal-s modal-input"
        open={openModal.register}
        onClose={handleCloseModal}
        headerTitle="Đăng ký"
      >
        <ModalRegister />
      </Modal>
      <Modal
        className="modal-s modal-input"
        open={openModal.forgot}
        onClose={handleCloseModal}
        headerTitle="Quên mật khẩu"
      >
        <ModalForgotPassword />
      </Modal>
    </section>
  )
}

export default Header

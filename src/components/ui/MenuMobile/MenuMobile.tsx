import { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { ENUM_AUTH_MODAL } from '@/@types/modal'
import { IconLogout } from '@/components/shared/Icon'
import Modal, { ModalLogout } from '../Modal'

type MenuMobileProps = {
  open: boolean
  onClose: () => void
  authenticated: boolean
  onOpenModal: (type: ENUM_AUTH_MODAL) => void
}

const MenuMobile = (props: MenuMobileProps) => {
  const { authenticated, open, onClose, onOpenModal } = props
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  return (
    <div className={classNames('menu-mobile open', !open && 'move-left')}>
      <div className="header-menu">
        <div className="close-menu" onClick={onClose}>
          ×
        </div>
      </div>
      {authenticated ? (
        <div className="m-container">
          <div className="menu-list">
            <Link className="menu-avatar" to="/account">
              <div className="avatar avatar--s">
                <img loading="lazy" src="/mfer.jpg" alt="Minh Triet" />
              </div>
              <span className="name">Minh Triet</span>
            </Link>
            <div className="line-page"></div>
            <Link className="menu-list__item" to="/mycars">
              Xe của tôi
            </Link>
            <div className="line-page"></div>
            <Link className="menu-list__item" to="/myfavs">
              Xe yêu thích
            </Link>
            <div className="line-page"></div>
            <Link className="menu-list__item" to="/myreward">
              Khuyến mãi / Quà tặng
            </Link>
          </div>
          <div className="menu-list">
            <Link className="menu-list__item" to="/aboutus">
              Về Mioto
            </Link>
            <div className="line-page"></div>
            <Link className="menu-list__item" to="/carregistermode">
              Trở thành chủ xe
            </Link>
            <div className="line-page"></div>
            <Link className="menu-list__item" to="/mytrips">
              Chuyến đi
            </Link>
          </div>
          <button onClick={handleOpen} className="menu-logout">
            <div className="wrap-svg">
              <IconLogout />
            </div>
            Đăng xuất
          </button>
        </div>
      ) : (
        <div className="m-container">
          <div className="menu-list">
            <button
              className="menu-list__item"
              onClick={() => onOpenModal(ENUM_AUTH_MODAL.login)}
            >
              Đăng nhập
            </button>
            <div className="line-page" />
            <button
              className="menu-list__item"
              onClick={() => onOpenModal(ENUM_AUTH_MODAL.register)}
            >
              Đăng ký
            </button>
          </div>
          <div className="menu-list">
            <Link className="menu-list__item" to="/aboutus">
              Về Mioto
            </Link>
            <div className="line-page" />
            <Link className="menu-list__item" to="/owner/register">
              Trở thành chủ xe
            </Link>
          </div>
        </div>
      )}
      <Modal
        open={openModal}
        onClose={handleClose}
        className="modal-s modal-confirm"
        headerTitle="Đăng xuất"
      >
        <ModalLogout onClose={handleClose} />
      </Modal>
    </div>
  )
}

export default MenuMobile

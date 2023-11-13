import { useState, useRef } from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import {
  IconCarOutline,
  IconGiftOutline,
  IconHeartOutline,
  IconLockOutline,
  IconLogout,
  IconPaperOutline,
  IconTrashOutline,
  IconTripOutline,
  IconUserOutline,
} from '@/components/shared/Icon'
import { useClickOutside, useSidebarSticky } from '@/utils/hooks'
import Modal, { ModalLogout } from '@/components/ui/Modal'

const sidebarLinks = [
  { to: '/account', icon: <IconUserOutline />, label: 'Tài khoản của tôi' },
  { to: '/myfavs', icon: <IconHeartOutline />, label: 'Xe yêu thích' },
  { to: '/mycars', icon: <IconCarOutline />, label: 'Xe của tôi' },
  { to: '/mytrips', icon: <IconTripOutline />, label: 'Chuyến đi của tôi' },
  { to: '/myreward', icon: <IconGiftOutline />, label: 'Quà tặng' },
  { to: '/myaddress', icon: <IconPaperOutline />, label: 'Địa chỉ của tôi' },
  { to: '/resetpw', icon: <IconLockOutline />, label: 'Đổi mật khẩu' },
  { icon: <IconLogout />, label: 'Đăng xuất' },
  {
    to: '/deleteaccount',
    icon: <IconTrashOutline />,
    label: 'Yêu cầu xóa tài khoản',
  },
]

const Sidebar = () => {
  const { pathname } = useLocation()
  const [openDropdown, setOpenDropdown] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const nodeRef = useRef(null)

  const { data, style } = useSidebarSticky()
  const dropdownRef = useClickOutside(() => setOpenDropdown(false))

  const handleToggleDropdown = () => setOpenDropdown((prev) => !prev)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  return (
    <div className="sidebar-account">
      <div>
        <div style={{ paddingBottom: data.run ? 585 : 0 }} />
        <div className="sidebar-account-sticky" style={style}>
          <div className="title">
            <h4>Xin chào bạn!</h4>
          </div>
          <div className="sidebar">
            {sidebarLinks.map((link, index) => {
              if (link.to) {
                return (
                  <Link
                    key={index}
                    className={classNames(
                      'sidebar-item',
                      link.to === pathname && 'active'
                    )}
                    to={link.to}
                  >
                    <div className="wrap-svg">{link.icon}</div>
                    <p>{link.label}</p>
                  </Link>
                )
              }
              return (
                <div className="sidebar-item" onClick={handleOpenModal}>
                  <div className="wrap-svg">{link.icon}</div>
                  <p>{link.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div
        className="dropdown-sidebar custom-dropdown"
        onClick={handleToggleDropdown}
        ref={dropdownRef}
      >
        <div className="dropdown-selected">
          <div className="wrap-svg">
            <IconUserOutline />
          </div>
          <p>Tài khoản của tôi</p>
        </div>
        <CSSTransition
          in={openDropdown}
          nodeRef={nodeRef}
          timeout={300}
          classNames="dropdown"
          unmountOnExit
        >
          <div className="dropdown-option" ref={nodeRef}>
            {sidebarLinks.map((link, index) => {
              if (link.to) {
                return (
                  <Link
                    key={index}
                    className={classNames('dropdown-option__item')}
                    to={link.to}
                  >
                    <div className="wrap-svg">{link.icon}</div>
                    <p>{link.label}</p>
                  </Link>
                )
              }
              return (
                <div
                  className="dropdown-option__item"
                  onClick={handleOpenModal}
                >
                  <div className="wrap-svg">{link.icon}</div>
                  <p>{link.label}</p>
                </div>
              )
            })}
          </div>
        </CSSTransition>
      </div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        className="modal-s modal-confirm"
        headerTitle="Đăng xuất"
      >
        <ModalLogout onClose={handleCloseModal} />
      </Modal>
    </div>
  )
}

export default Sidebar

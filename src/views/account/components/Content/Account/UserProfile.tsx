import { useState } from 'react'
import {
  IconLink,
  IconMedal,
  IconPencilEdit,
  IconTrip,
  IconVerify,
} from '@/components/shared/Icon'
import { Modal } from '@/components/ui'
import { ModalChangeInfo } from '@/components/ui/Modal'

const UserProfile = () => {
  const [openEdit, setOpenEdit] = useState(false)

  const handleOpen = () => setOpenEdit(true)
  const handleClose = () => setOpenEdit(false)

  return (
    <div className="content-item user-profile">
      <div className="title">
        <div className="title-edit">
          <h5>Thông tin tài khoản</h5>
          <div className="wrap-svg" onClick={handleOpen}>
            <IconPencilEdit />
          </div>
        </div>
        <div className="total-trips">
          <div className="wrap-svg">
            <IconTrip width={24} height={24} />
          </div>
          <p className="count">0</p>
          <span>chuyến</span>
        </div>
      </div>
      <div className="content">
        <div className="avatar-box">
          <div className="avatar avatar--xl has-edit">
            <img loading="lazy" src="/mfer.jpg" alt="Minh Triet" />
          </div>
          <h6>Minh Triet</h6>
          <p className="note">Tham gia: 09/11/2023</p>
          <div className="trip-class">
            <div className="total-trips">
              <div className="wrap-svg">
                <IconTrip width={24} height={24} />
              </div>
              <p className="count">0</p>
              <span>chuyến</span>
            </div>
            <div className="user-class">
              <div className="wrap-svg">
                <IconMedal />
              </div>
              <div className="desc">
                <p>0 điểm </p>
              </div>
            </div>
          </div>
        </div>
        <div className="info-user">
          <div className="info-box">
            <div className="info-box__item">
              <p>Ngày sinh </p>
              <p className="main">----/----/--------</p>
            </div>
            <div className="info-box__item">
              <p>Giới tính</p>
              <p className="main">Nam</p>
            </div>
          </div>
          <div className="info-desc">
            <div className="info-desc__item">
              <div className="title-item">
                Số điện thoại
                <div className="note success">
                  <div className="wrap-svg">
                    <IconVerify />
                  </div>
                  Đã xác thực
                </div>
              </div>
              <div className="name">
                Thêm số điện thoại
                <div className="wrap-svg">
                  <IconPencilEdit />
                </div>
              </div>
            </div>
            <div className="info-desc__item">
              <div className="title-item">
                Email
                <div className="note success">
                  <div className="wrap-svg">
                    <IconVerify />
                  </div>
                  Đã xác thực
                </div>
              </div>
              <div className="name">
                bindsu63@gmail.com
                <div className="wrap-svg">
                  <IconPencilEdit />
                </div>
              </div>
            </div>
            <div className="info-desc__item">
              <div className="title-item">Facebook</div>
              <div className="name">
                Thêm liên kết{' '}
                <div className="wrap-svg">
                  <IconPencilEdit />
                </div>
              </div>
            </div>
            <div className="info-desc__item">
              <div className="title-item">Google</div>
              <div className="name">
                Minh Triet
                <div className="name">
                  <div className="wrap-svg">
                    <IconLink />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-note" />
      <Modal
        open={openEdit}
        onClose={handleClose}
        headerTitle="Cập nhật thông tin"
        className="modal-s modal-confirm"
      >
        <ModalChangeInfo />
      </Modal>
    </div>
  )
}

export default UserProfile

import { Modal } from '@/components/ui'
import { ModalDeleteAccount } from '@/components/ui/Modal'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const DeleteAccount = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="del-account-section space sec">
      <div className="m-container">
        <h4>Yêu cầu xóa tài khoản</h4>
        <div className="del-account-content">
          <img loading="lazy" src="/empty-del-account.svg" />
          <div className="content-inner">
            <p>
              Khi xóa tài khoản, các thông tin sau (nếu có) sẽ bị xóa trên hệ
              thống:
            </p>
            <ul>
              <li>Thông tin cá nhân</li>
              <li>Thông tin lịch sử chuyến và danh sách xe</li>
            </ul>
            <p>
              Tiền ví và điểm thưởng sẽ được thanh toán theo quy định và chính
              sách hiện hành của Mioto.
            </p>
            <p>
              Việc đồng ý xóa tài khoản là bạn đã chấp nhận điều khoản chính
              sách xóa tài khoản của Mioto.
            </p>
            <p>
              Yêu cầu xóa tài khoản sẽ được xử lý trong vòng 15 ngày làm việc.
              Mioto sẽ liên hệ trực tiếp với bạn thông qua Email hoặc Số điện
              thoại đã cung cấp.
            </p>
            <p>
              Mọi thắc mắc xin liên hệ Fanpage của Mioto hoặc Hotline 1900 9217
              (7AM - 10PM) để được hỗ trợ.
            </p>
          </div>
          <div className="wrap-btn has-2-btn">
            <button className="btn btn--m btn-red" onClick={handleOpen}>
              Xóa tài khoản
            </button>
            <Link className="btn btn-link" to="/">
              Hủy
            </Link>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        headerTitle="Xác nhận"
        className="modal-s modal-text"
      >
        <ModalDeleteAccount />
      </Modal>
    </div>
  )
}

export default DeleteAccount

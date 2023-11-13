import {
  IconInfo,
  IconQuestionRoundedOutline,
  IconReport,
  IconVoucher,
} from '@/components/shared/Icon'
import Modal, { ModalPromotion } from '@/components/ui/Modal'
import { useState } from 'react'

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div className="sidebar-detail">
      <div className="insurance success cardetail">
        <img loading="lazy" src="/insurance-polish.svg" />
        <div className="content">
          <p>Bảo hiểm thuê xe VNI</p>
          <p className="note">
            Chuyến đi có mua bảo hiểm. Khách thuê bồi thường tối đa 2.000.000
            VNĐ trong trường hợp có sự cố ngoài ý muốn.
          </p>
          <p className="desc">
            <button className="info">Xem chi tiết</button>
          </p>
        </div>
      </div>
      <div className="rent-box" id="cardetail" style={{ position: 'relative' }}>
        <div className="price">
          <h4>780K/ngày</h4>
        </div>
        <div className="date-time-form ">
          <div className="form-item">
            <label>Nhận xe </label>
            <div className="wrap-date-time">
              <div className="wrap-date">
                <span className="value">13/11/2023</span>
              </div>
              <div className="wrap-time">
                <span className="value">21:00</span>
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="form-item">
            <label>Trả xe</label>
            <div className="wrap-date-time">
              <div className="wrap-date">
                <span className="value">14/11/2023</span>
              </div>
              <div className="wrap-time">
                <span className="value">20:00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-form">
          <label>Địa điểm giao xe</label>
          <div className="wrap-form ">
            <span className="value">Quận 7, Hồ Chí Minh</span>
          </div>
          <p className="note">
            Bạn sẽ nhận trả xe tại địa chỉ xe do chủ xe không hỗ trợ giao nhận
            tận nơi. Địa chỉ cụ thể sẽ được hiển thị sau khi đặt cọc.
          </p>
        </div>
        <div className="line-page" />
        <div className="price-container">
          <div className="price-item">
            <p className="df-align-center">
              Đơn giá thuê
              <span className="tooltip  ">
                <span className="wrap-svg">
                  <IconQuestionRoundedOutline />
                </span>
                <span className="tooltip-text">
                  Giá thuê xe được tính theo ngày, thời gian thuê ít hơn 24
                  tiếng sẽ được tính tròn 1&nbsp;ngày <br />
                  Giá thuê xe không bao gồm tiền xăng. Khi kết thúc chuyến đi,
                  bạn vui lòng đổ xăng về lại mức ban đầu như khi nhận xe
                </span>
              </span>
            </p>
            <p className="cost">
              <span>780 000đ/ ngày</span>
            </p>
          </div>
          <div className="price-item">
            <p className="df-align-center">
              Phí dịch vụ
              <span className="tooltip  ">
                <span className="wrap-svg">
                  <IconQuestionRoundedOutline />
                </span>
                <span className="tooltip-text">
                  Phí dịch vụ giúp chúng tôi duy trì và phát triển dịch vụ trên
                  ứng dụng Mioto.
                </span>
              </span>
            </p>
            <p className="cost">
              <span>95 940đ/ ngày</span>
            </p>
          </div>
          <div className="price-item">
            <p className="df-align-center">
              Phí bảo hiểm
              <span className="tooltip  ">
                <span className="wrap-svg">
                  <IconQuestionRoundedOutline />
                </span>
                <span className="tooltip-text">
                  Chuyến đi của bạn được mua gói bảo hiểm vật chất xe ô tô.
                  Trường hợp có sự cố ngoài ý muốn (trong phạm vi bảo hiểm), số
                  tiền bạn thanh toán tối đa là 2.000.000 đồng/vụ (không bao gồm
                  các trường hợp giảm trừ bồi thường theo quy tắc bảo hiểm)
                </span>
              </span>
            </p>
            <p className="cost">
              <span>95 940đ/ ngày</span>
            </p>
          </div>
          <div className="line-page" />
          <div className="price-item">
            <p>Tổng phí thuê xe</p>
            <p className="cost">
              <span>971 880đ </span>x&nbsp;1&nbsp;ngày
            </p>
          </div>
          <div className="promotion" onClick={handleOpen}>
            <div className="wrap-svg">
              <IconVoucher />
            </div>
            <p>Sử dụng mã khuyến mãi</p>
          </div>
          <div className="line-page" />
          <div className="price-item total">
            <p>Tổng cộng</p>
            <p className="cost">
              <span>971 880đ</span>
            </p>
          </div>
        </div>
        <button className="btn btn-primary btn--m width-100">CHỌN THUÊ</button>
      </div>
      <div className="surcharge">
        <p className="title text-primary">Phụ phí có thể phát sinh</p>
        <div className="surcharge-container ">
          <div className="surcharge-item">
            <div className="wrap-svg">
              <IconInfo />
            </div>
            <div className="content">
              <div className="content-item">
                <p className="title">Phí vượt giới hạn</p>
                <p className="cost">
                  <span>5 000đ/km</span>
                </p>
              </div>
              <div className="content-item">
                <p>
                  Phụ phí phát sinh nếu lộ trình di chuyển vượt quá{' '}
                  <span>350km</span> khi thuê xe<span> 1 ngày</span>
                </p>
              </div>
            </div>
          </div>
          <div className="surcharge-item">
            <div className="wrap-svg">
              <IconInfo />
            </div>
            <div className="content">
              <div className="content-item">
                <p className="title">Phí quá giờ</p>
                <p className="cost">
                  <span>80 000đ/h</span>
                </p>
              </div>
              <div className="content-item">
                <p>
                  Phụ phí phát sinh nếu hoàn trả xe trễ giờ. Trường hợp trễ quá
                  <span> 5 tiếng</span>, phụ phí thêm <span>1 ngày </span>thuê
                </p>
              </div>
            </div>
          </div>
          <div className="surcharge-item">
            <div className="wrap-svg">
              <IconInfo />
            </div>
            <div className="content">
              <div className="content-item">
                <p className="title">Phí vệ sinh</p>
                <p className="cost">
                  <span>100 000đ</span>
                </p>
              </div>
              <div className="content-item">
                <p>
                  Phụ phí phát sinh khi xe hoàn trả không đảm bảo vệ sinh (nhiều
                  vết bẩn, bùn cát, sình lầy...)
                </p>
              </div>
            </div>
          </div>
          <div className="surcharge-item">
            <div className="wrap-svg">
              <IconInfo />
            </div>
            <div className="content">
              <div className="content-item">
                <p className="title">Phí khử mùi</p>
                <p className="cost">
                  <span>350 000đ</span>
                </p>
              </div>
              <div className="content-item">
                <p>
                  Phụ phí phát sinh khi xe hoàn trả bị ám mùi khó chịu (mùi
                  thuốc lá, thực phẩm nặng mùi...)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap-btn">
        <button className="btn btn-link">
          <IconReport />
          Báo cáo xe này
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        headerTitle="Mã khuyến mãi"
        className="modal-s modal-add-promotion modal-fix"
      >
        <ModalPromotion />
      </Modal>
    </div>
  )
}

export default Sidebar

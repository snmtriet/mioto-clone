import { Link } from 'react-router-dom'
import {
  IconArrowLeft,
  IconCar2,
  IconCarInfo,
  IconMultipleImage,
  IconPhoneCall,
} from '@/components/shared/Icon'

const CarRegisterMode = () => {
  return (
    <div className="module-settings min-height-register module-trips">
      <div className="m-container">
        <div className="main-title">
          <Link className="back d-flex" to="/mycars">
            <div className="wrap-svg">
              <IconArrowLeft />
            </div>
            <p>Quay lại</p>
          </Link>
          <h4>Đăng ký xe</h4>
        </div>
      </div>
      <div className="trip-container">
        <div className="register-mode">
          <img
            loading="lazy"
            className="img-fluid"
            src="/empty-register-car.svg"
          />
          <div className="wrap-2-btn">
            <Link
              className="btn btn--m btn-primary"
              to="/carregister/selfdrive"
            >
              Đăng ký xe tự lái
            </Link>
          </div>
        </div>
        <div className="register-content">
          <h6>Gia tăng thu nhập từ 5-10tr/tháng cùng Mioto</h6>
          <div className="content-inner">
            <p className="fontWeight-6">
              Thủ tục đăng ký 4 bước đơn giản &amp; nhanh chóng:
            </p>
            <div className="steps">
              <div className="step-item">
                <div className="i-svg">
                  <div className="wrap-svg">
                    <IconCarInfo />
                  </div>
                </div>
                <p>Điền thông tin xe</p>
              </div>
              <div className="step-item">
                <div className="i-svg">
                  <div className="wrap-svg">
                    <IconMultipleImage />
                  </div>
                </div>
                <p>Tải hình ảnh xe</p>
              </div>
              <div className="step-item">
                <div className="i-svg">
                  <div className="wrap-svg">
                    <IconPhoneCall />
                  </div>
                </div>
                <p>Mioto tư vấn chủ xe &amp; phê duyệt</p>
              </div>
              <div className="step-item">
                <div className="i-svg">
                  <div className="wrap-svg">
                    <IconCar2 />
                  </div>
                </div>
                <p>Bắt đầu cho thuê</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarRegisterMode

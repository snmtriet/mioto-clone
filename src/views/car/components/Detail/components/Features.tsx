import { IconFuel, IconSeat, IconTransmission } from '@/components/shared/Icon'

const Features = () => {
  return (
    <div className="info-car-desc" id="outsfeatures">
      <h6>Đặc điểm</h6>
      <div className="outstanding-features">
        <div className="outstanding-features__item">
          <div className="wrap-svg">
            <IconSeat />
          </div>
          <div className="title">
            <p className="sub">Số ghế</p>
            <p className="main">7 chỗ</p>
          </div>
        </div>
        <div className="outstanding-features__item">
          <div className="wrap-svg">
            <IconTransmission />
          </div>
          <div className="title">
            <p className="sub">Truyền động</p>
            <p className="main">Số tự động</p>
          </div>
        </div>
        <div className="outstanding-features__item">
          <div className="wrap-svg">
            <IconFuel />
          </div>
          <div className="title">
            <p className="sub">Nhiên liệu</p>
            <p className="main">Xăng</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features

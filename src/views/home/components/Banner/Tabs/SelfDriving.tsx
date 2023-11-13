import { Link } from 'react-router-dom'
import { IconCalender, IconLocation } from '@/components/shared/Icon'

type SelfDrivingProps = {
  onOpen: () => void
}

const SelfDriving = (props: SelfDrivingProps) => {
  const { onOpen } = props

  return (
    <div className="search">
      <div className="search-form sd">
        <div className="search-form__item address">
          <div className="title">
            <div className="wrap-svg">
              <IconLocation />
            </div>
            <p>Địa điểm</p>
          </div>
          <div className="choose" onClick={onOpen}>
            <div className="choose-item has-arrow">
              <div className="here-autocomplete">
                <p className="address pointer ">
                  Thành phố Hồ Chí Minh, Việt Nam
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="line line-address-time"></div>
        <div className="calendar-wrap">
          <div className="search-form__item">
            <div className="title">
              <div className="wrap-svg">
                <IconCalender />
              </div>
              <p>Bắt đầu</p>
            </div>
            <div className="choose">
              <label className="choose-item has-arrow date">
                <span className="value">10/11/2023</span>
              </label>
              <label className="choose-item has-arrow">
                <span className="value">21:00</span>
              </label>
            </div>
          </div>
          <div className="line line-time"></div>
          <div className="search-form__item">
            <div className="title">
              <div className="wrap-svg">
                <IconCalender />
              </div>
              <p>Kết thúc</p>
            </div>
            <div className="choose">
              <label className="choose-item has-arrow date">
                <span className="value">11/11/2023</span>
              </label>
              <label className="choose-item has-arrow">
                <span className="value">20:00</span>
              </label>
            </div>
          </div>
        </div>
        <Link className="btn btn-primary" to="#">
          Tìm Xe
        </Link>
      </div>
    </div>
  )
}

export default SelfDriving

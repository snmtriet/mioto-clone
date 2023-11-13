import { useState } from 'react'
import { Link } from 'react-router-dom'
import RentTimeOptions from './components'
import { IconCalender, IconClock, IconLocation } from '@/components/shared/Icon'

type DriverProps = {
  onOpen: () => void
}

const Driver = (props: DriverProps) => {
  const { onOpen } = props
  const [openRentTime, setOpenRentTime] = useState(false)

  const onToggleRentTime = () => setOpenRentTime((prev) => !prev)

  return (
    <div className="search">
      <div className="wd-option-form">
        <div className="custom-radio">
          <input
            type="radio"
            id="city"
            name="trip_mode"
            defaultChecked={false}
          />
          <label htmlFor="city">Nội thành</label>
        </div>
        <div className="custom-radio">
          <input type="radio" id="province" name="trip_mode" />
          <label htmlFor="province">Liên tỉnh</label>
        </div>
      </div>
      <div className="search-form">
        <div className="search-form__item">
          <div className="title">
            <div className="wrap-svg">
              <IconLocation />
            </div>
            <p>Điểm đón</p>
          </div>
          <div className="choose" onClick={onOpen}>
            <div className="choose-item has-arrow">
              <div className="here-autocomplete">
                <p className="address pointer text-disabled fontWeight-4">
                  Tôi muốn đón tại...
                </p>
              </div>
            </div>
          </div>
          <div className="note">
            Di chuyển trong thành phố.{' '}
            <button className="link">Tìm hiểu thêm</button>
          </div>
        </div>
      </div>
      <div className="search-form wd">
        <div className="search-form__item">
          <div className="title">
            <div className="wrap-svg">
              <IconCalender />
            </div>
            <p>Bắt đầu</p>
          </div>
          <div className="choose">
            <label className="choose-item has-arrow">
              <span className="value">11/11/2023</span>
            </label>
            <label className="choose-item has-arrow">
              <span className="value">08:00</span>
            </label>
          </div>
        </div>
        <div className="line" />
        <div className="search-form__item">
          <div className="title">
            <div className="wrap-svg">
              <IconClock />
            </div>
            <p>Thời gian thuê</p>
          </div>
          <div className="choose" onClick={onToggleRentTime}>
            <div className="choose-item has-arrow">
              <p className="select">
                2 tiếng
                <span className="note-time">(kết thúc 10:00 11/11/2023)</span>
              </p>
              {openRentTime && <RentTimeOptions />}
            </div>
          </div>
        </div>
        <Link className="btn btn-primary" target="" to="#">
          Tìm Xe
        </Link>
      </div>
    </div>
  )
}

export default Driver

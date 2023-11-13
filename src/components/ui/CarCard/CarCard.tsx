import { Link } from 'react-router-dom'
import {
  IconFlash,
  IconHeartOutline,
  IconLocation,
  IconMortgageTaxExemption,
  IconRating,
  IconShield,
  IconTrip,
} from '@/components/shared/Icon'

type CardProps = {
  item: {
    image: string
    name?: string
    location?: string
    originalPrice?: string | number
    specialPrice?: string | number
  }
}

const CarCard = (props: CardProps) => {
  const {
    item: { image, location, name, originalPrice, specialPrice },
  } = props

  return (
    <Link className="item item-car" to="/car/mitsubishi-xpander-2019/KETMBH">
      <div className="item-box">
        <div className="img-car">
          <div className="fix-img">
            <img
              loading="lazy"
              src={image}
              alt="Cho thuê xe tự lái  VINFAST LUX A 2021"
            />
          </div>
          <div className="fav-item wrap-svg">
            <IconHeartOutline stroke="#fff" />
          </div>
          <span className="label-pos">
            <span className="rent">
              Đặt xe nhanh
              <IconFlash />
            </span>
            <span className="rent">
              Miễn thế chấp
              <IconMortgageTaxExemption />
            </span>
          </span>
          <div className="avatar avatar--s has-five-star">
            <img
              loading="lazy"
              src="https://n1-cstg.mioto.vn/m/avatars/avatar-2.png"
            />
          </div>

          <span className="discount">Giảm 26%</span>
        </div>
        <div className="desc-car">
          <div className="desc-tag">
            <span className="tag-item transmission">Số tự động</span>
            <span className="tag-item non-mortgage">Giao xe tận nơi</span>
          </div>
          <div className="desc-name">
            <p>{name ?? 'VINFAST LUX A 2021'}</p>
            <div className="wrap-svg">
              <IconShield />
            </div>
          </div>
          <div className="desc-address-price">
            <div className="address">
              <div className="wrap-svg">
                <IconLocation />
              </div>
              <p>{location ?? 'Quận Thủ Đức, Hồ Chí Minh'}</p>
            </div>
          </div>
          <div className="line-page" />
          <div className="desc-info-price">
            <div className="info">
              <div className="desc-info">
                <div className="wrap-svg">
                  <IconRating />
                </div>
                <span className="info">5.0</span>
                <span className="dot">•</span>
                <div className="wrap-svg">
                  <IconTrip />
                </div>
                <span className="info">75 chuyến</span>
              </div>
            </div>
            <div className="wrap-price">
              <div className="price">
                {originalPrice && (
                  <span className="price-origin">{originalPrice}</span>
                )}
                <span className="price-special">{specialPrice ?? '860K'}</span>
                /&nbsp;ngày
              </div>
              <div className="total-price" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CarCard

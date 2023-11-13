import { Loading } from '@/components/shared'
import {
  IconInfo,
  IconPromotion,
  IconPromotionDisabled,
} from '@/components/shared/Icon'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

const data = [
  {
    id: 'MI65',
    desc: 'Giảm 10% (tối đa 100K)',
    disabled: false,
    openDetail: false,
  },
  {
    id: 'BANMOI',
    desc: 'Giảm 150K',
    disabled: false,
    expiredIn: 2,
    openDetail: false,
  },
  {
    id: 'MI246',
    desc: 'Giảm 180K',
    disabled: true,
    openDetail: false,
  },
  {
    id: 'NOEL',
    desc: 'Giảm 200K',
    disabled: true,
    openDetail: false,
  },
  {
    id: 'MI11',
    desc: 'Giảm 15% (tối đa 150K)',
    disabled: true,
    openDetail: false,
  },
  {
    id: 'MORNING',
    desc: 'Giảm 15% (tối đa 150K)',
    disabled: true,
    openDetail: false,
  },
]

const ModalPromotion = () => {
  const [promotion, setPromotion] = useState(data)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(id)
  }, [])

  const handleOpen = (id: string) => {
    setPromotion((prev) =>
      prev.map((promo) => {
        if (promo.id === id) {
          return { ...promo, openDetail: !promo.openDetail }
        }
        return promo
      })
    )
  }

  return (
    <Loading loading={loading} type="dots">
      <div className="add-promotion">
        <div className="custom-input">
          <div className="wrap-input">
            <input type="text" placeholder="Nhập mã khuyến mãi" />
          </div>
        </div>
        {promotion.map((item) => (
          <div
            key={item.id}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            <div
              key={item.id}
              className={classNames(
                'add-promotion__item',
                item.disabled && 'disabled'
              )}
            >
              <div className="wrap-svg">
                {item.disabled ? <IconPromotionDisabled /> : <IconPromotion />}
              </div>
              <div className="promotion-info">
                <p className="name">{item.id}</p>
                <p>
                  {item.desc}.{' '}
                  <span onClick={() => handleOpen(item.id)}>
                    {item.openDetail ? 'Ẩn chi tiết' : 'Chi tiết'}
                  </span>
                </p>
                {item.expiredIn && (
                  <div className="date warning">
                    <div className="wrap-svg">
                      <IconInfo />
                    </div>
                    Hết hạn sau {item.expiredIn} ngày
                  </div>
                )}
              </div>
              <button disabled={item.disabled} className="btn btn-primary">
                Áp dụng
              </button>
            </div>
            {item.openDetail && (
              <div className="add-promotion__detail">
                <div className="wrap-svg">
                  <IconPromotion width={75} height={75} />
                </div>
                <div>
                  <h6>MI65</h6>
                </div>
                <div className="promotion">
                  <p>Áp dụng từ 01/11/2023 đến 30/11/2023</p>
                  <div
                    style={{ fontFamily: '"Encode Sans Expanded", san-serif' }}
                  >
                    <div style={{ textAlign: 'center', padding: '0px 25px' }}>
                      <h3
                        style={{ color: 'rgb(0, 165, 80)', fontSize: '1.2em' }}
                      >
                        Ưu đãi 10% (tối đa 100,000đ)
                      </h3>
                    </div>
                    <div style={{ textAlign: 'justify' }}>
                      <ul>
                        <li>
                          Có giá trị đến hết ngày <b>30/11/2023</b>. Chỉ áp dụng
                          cho khách hàng nhận được thông báo.
                        </li>
                        <li>
                          Không áp dụng chung với các chương trình khuyến mãi
                          khác.
                        </li>
                        <li>Mã chỉ áp dụng với phiên bản app mới nhất.</li>
                        <li>Mỗi chuyến đi chỉ được sử dụng 1 mã khuyến mãi.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Loading>
  )
}

export default ModalPromotion

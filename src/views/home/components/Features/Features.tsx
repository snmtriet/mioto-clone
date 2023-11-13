import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination } from 'swiper/modules'

const data = [
  {
    image:
      'https://www.mioto.vn/static/media/dich_vu_thue_xe_tu_lai_hanoi.f177339e.svg',
    title: 'An tâm đặt xe',
    description:
      'Không tính phí huỷ chuyến trong vòng 1h sau khi đặt cọc. Hoàn cọc và bồi thường 100% nếu chủ xe huỷ chuyến trong vòng 7 ngày trước chuyến đi.',
  },
  {
    image:
      'https://www.mioto.vn/static/media/cho_thue_xe_tu_lai_tphcm.1e7cb1c7.svg',
    title: 'Thủ tục đơn giản',
    description:
      'Chỉ cần có CCCD gắn chip (Hoặc Passport) & Giấy phép lái xe là bạn đã đủ điều kiện thuê xe trên Mioto.',
  },
  {
    image:
      'https://www.mioto.vn/static/media/cho_thue_xe_tu_lai_hanoi.735438af.svg',
    title: 'Thanh toán dễ dàng',
    description:
      'Đa dạng hình thức thanh toán: ATM, thẻ Visa & Ví điện tử (Momo, VnPay, ZaloPay).',
  },
  {
    image:
      'https://www.mioto.vn/static/media/thue_xe_tu_lai_gia_re_hcm.ffd1319e.svg',
    title: 'Giao xe tận nơi',
    description:
      'Bạn có thể lựa chọn giao xe tận nhà/sân bay... Phí tiết kiệm chỉ từ 15k/km.',
  },
  {
    image:
      'https://www.mioto.vn/static/media/thue_xe_tu_lai_gia_re_hanoi.4035317e.svg',
    title: 'Dòng xe đa dạng',
    description:
      'Hơn 100 dòng xe cho bạn tuỳ ý lựa chọn: Mini, Sedan, CUV, SUV, MPV, Bán tải.',
  },
  {
    image: 'https://www.mioto.vn/static/media/thue_xe_co_tai_xe.a6f7dc54.svg',
    title: 'Lái xe an toàn',
    description:
      'Vững tay lái với gói bảo hiểm thuê xe từ nhà bảo hiểm MIC & VNI.',
  },
]

const Features = () => {
  return (
    <div className="features-section space sec">
      <div className="m-container">
        <h2>Ưu Điểm Của&nbsp;Mioto</h2>
        <h5 className="title">
          Những tính năng giúp bạn dễ dàng hơn khi thuê xe trên&nbsp;Mioto.
        </h5>
        <div className="features-container">
          {data.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>
        <div className="features-swiper-container">
          <Swiper
            className="swiper-features"
            modules={[EffectFade, Pagination]}
            speed={300}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
              el: '.swiper-pagination.pagi-related',
              dynamicBullets: true,
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <Card item={item} />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination pagi-related"></div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Features

type CardProps = {
  item: {
    image: string
    title: string
    description: string
  }
}

function Card(props: CardProps) {
  const { item } = props
  return (
    <div className="features-item">
      <div className="features-item__img">
        <img loading="lazy" src={item.image} alt={item.title} />
      </div>
      <h5>{item.title}</h5>
      <p>{item.description}</p>
    </div>
  )
}

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation } from 'swiper/modules'

const data = [
  {
    image:
      'https://n1-cstg.mioto.vn/g/2023/10/01/08/Thue_xe_oto_tu_lai_tphcm.jpg',
  },
  {
    image: 'https://n1-cstg.mioto.vn/g/2023/10/06/17/GIEL2NWE.jpg',
  },
  {
    image:
      'https://n1-cstg.mioto.vn/g/2023/10/01/10/Thue_xe_oto_tu_lai_hanoi.jpg',
  },
  {
    image:
      'https://n1-cstg.mioto.vn/g/2023/10/01/09/dich_vu_thue_xe_tu_lai_tphcm.jpg',
  },
  {
    image:
      'https://n1-cstg.mioto.vn/g/2023/10/01/10/thue_xe_tu_lai_4_cho_tphcm.jpg',
  },
  {
    image:
      'https://n1-cstg.mioto.vn/g/2023/10/01/10/thue_xe_co_tai_xe_tphcm.jpg',
  },
  {
    image:
      'https://n1-cstg.mioto.vn/g/2023/10/02/08/thue_xe_tu_lai_7_cho_tphcm.jpg',
  },
  {
    image: 'https://n1-cstg.mioto.vn/g/2023/10/06/01/H4831UA9.jpg',
  },
]

const Promo = () => {
  return (
    <div className="promo-section space sec">
      <div className="m-container">
        <h2>Chương Trình Khuyến&nbsp;Mãi</h2>
        <h5 className="title">Nhận nhiều ưu đãi hấp dẫn từ&nbsp;Mioto</h5>
      </div>
      <div className="m-container">
        <Swiper
          className="swiper-promo"
          modules={[EffectFade, Navigation]}
          speed={300}
          slidesPerView={3}
          spaceBetween={20}
          navigation={{
            nextEl: '.swiper-button-next.next-ads',
            prevEl: '.swiper-button-prev.prev-ads',
          }}
          breakpoints={{
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2.5,
            },
            576: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1.2,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Card image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev prev-ads"></div>
        <div className="swiper-button-next next-ads"></div>
      </div>
    </div>
  )
}

export default Promo

type CardProps = {
  image: string
}

function Card(props: CardProps) {
  const { image } = props
  return (
    <div className="fix-img">
      <img loading="lazy" src={image} />
    </div>
  )
}

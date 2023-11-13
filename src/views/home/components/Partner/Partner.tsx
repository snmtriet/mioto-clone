import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination } from 'swiper/modules'

const data = [
  { image: 'https://www.mioto.vn/static/media/global-care.e4fc7ef6.jpg' },
  { image: 'https://www.mioto.vn/static/media/mic.ad48f066.jpg' },
  { image: 'https://www.mioto.vn/static/media/vni.d1b15e7a.jpg' },
  { image: 'https://www.mioto.vn/static/media/pvi.cfd4805b.jpg' },
]

const Partner = () => {
  return (
    <div className="ins-partner-section space sec">
      <div className="m-container">
        <h2>Hành Trình Của Bạn Luôn Được Bảo Vệ</h2>
      </div>
      <div className="m-container">
        <Swiper
          className="swiper-insurance"
          modules={[EffectFade, Pagination]}
          speed={300}
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
            el: '.swiper-pagination.pagi-insurance',
            dynamicBullets: true,
          }}
          breakpoints={{
            1200: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item} />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination pagi-insurance"></div>
        </Swiper>
      </div>
    </div>
  )
}

export default Partner

type CardProps = {
  item: { image: string }
}

function Card(props: CardProps) {
  const { item } = props
  return <img loading="lazy" src={item.image} />
}

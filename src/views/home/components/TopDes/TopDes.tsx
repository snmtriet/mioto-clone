import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

const data = [
  {
    image:
      'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/HoChiMinh_v2.jpg',
    city: 'TP. Hồ Chí Minh  3200+ xe',
    quantity: 3200,
  },
  {
    image:
      'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/HaNoi_v2.jpg',
    city: 'Hà Nội  1400+ xe',
    quantity: 1400,
  },
  {
    image:
      'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/DaNang_v2.jpg',
    city: 'Đà Nẵng  320+ xe',
    quantity: 320,
  },
  {
    image:
      'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/BinhDuong_v2.jpg',
    city: 'Bình Dương  330+ xe',
    quantity: 330,
  },
  {
    image:
      'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/CanTho_v2.jpg',
    city: 'Cần Thơ  110+ xe',
    quantity: 110,
  },
  {
    image:
      'https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/DaLat_v2.jpg',
    city: 'Đà Lạt  160+ xe',
    quantity: 160,
  },
  {
    image:
      'https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/NhaTrang_v2.jpg',
    city: 'Nha Trang  130+ xe',
    quantity: 130,
  },
  {
    image:
      'https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/QuyNhon_v2.jpg',
    city: 'Quy Nhơn  90+ xe',
    quantity: 90,
  },
  {
    image:
      'https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/PhuQuoc_v2.jpg',
    city: 'Phú Quốc  150+ xe',
    quantity: 150,
  },
  {
    image:
      'https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/HaiPhong_v2.jpg',
    city: 'Hải Phòng  70+ xe',
    quantity: 70,
  },
  {
    image:
      'https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/VungTau_v2.jpg',
    city: 'Vũng Tàu  70+ xe',
    quantity: 70,
  },
]

const dataSecond = [
  {
    image: 'https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg',
    city: 'Tân Sơn Nhất',
    quantity: 1000,
  },
  {
    image: 'https://n1-cstg.mioto.vn/g/2022/04/14/17/HU5WFGGX.jpg',
    city: 'Nội Bài',
    quantity: 200,
  },
  {
    image: 'https://n1-cstg.mioto.vn/g/2022/04/14/17/ND4NE32Q.jpg',
    city: 'Đà Nẵng',
    quantity: 100,
  },
  {
    image: 'https://n1-cstg.mioto.vn/g/2022/04/14/17/I2C3CQ64.jpg',
    city: 'Cam Ranh',
    quantity: 20,
  },
  {
    image: 'https://n1-cstg.mioto.vn/g/2022/04/14/17/IH8BGVXP.jpg',
    city: 'Phú Quốc',
    quantity: 70,
  },
  {
    image: 'https://n1-cstg.mioto.vn/g/2022/04/14/17/IJKX9Q3Q.jpg',
    city: 'Liên Khương',
    quantity: 30,
  },
]

const TopDes = () => {
  return (
    <div className="topdes-section space sec">
      <div className="m-container">
        <h2>Địa Điểm Nổi Bật</h2>
      </div>
      <div className="m-container">
        <Swiper
          className="swiper-topdes-city"
          modules={[EffectFade, Navigation]}
          speed={300}
          slidesPerView={4}
          spaceBetween={20}
          navigation={{
            nextEl: '.swiper-button-next.topdes-next',
            prevEl: '.swiper-button-prev.topdes-prev',
          }}
          breakpoints={{
            992: {
              slidesPerView: 4,
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
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev topdes-prev" />
        <div className="swiper-button-next topdes-next" />
      </div>
      <div className="m-container airport">
        <h4 className="airport-head">Giao&nbsp;xe&nbsp;tại sân&nbsp;bay</h4>
        <Swiper
          className="swiper-topdes-airport"
          modules={[EffectFade, Navigation, Pagination]}
          speed={300}
          slidesPerView={4}
          spaceBetween={20}
          navigation={{
            nextEl: '.swiper-button-next.topdes-airport-next',
            prevEl: '.swiper-button-prev.topdes-airport-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination.pagi-topdes-airport',
            dynamicBullets: true,
          }}
          breakpoints={{
            992: {
              slidesPerView: 4,
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
          {dataSecond.map((item, index) => (
            <SwiperSlide key={index}>
              <CardSecond item={item} />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination pagi-topdes-airport"></div>
        </Swiper>
        <div className="swiper-button-prev topdes-airport-prev" />
        <div className="swiper-button-next topdes-airport-next" />
      </div>
    </div>
  )
}

export default TopDes

type CardProps = {
  item: {
    image: string
    city: string
    quantity: number
  }
}

function Card(props: CardProps) {
  const { item } = props
  return (
    <Link to="#">
      <div className="fix-img car-glass" style={{ clipPath: 'none' }}>
        <img loading="lazy" src={item.image} alt={item.city} />
      </div>
      <p>
        {item.city} <span> {item.quantity}+ xe</span>
      </p>
    </Link>
  )
}

function CardSecond(props: CardProps) {
  const { item } = props
  return (
    <Link to="#">
      <div className="airport-item">
        <div className="fix-img">
          <img loading="lazy" src={item.image} alt={item.city} />
        </div>
        <p>{item.city} </p>
        <span>{item.quantity}+ xe</span>
      </div>
    </Link>
  )
}

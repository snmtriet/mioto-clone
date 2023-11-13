import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import Cover from './components/Cover'
import { CarCard } from '@/components/ui'
import { ContentBody, ContentHead, Sidebar } from './components/Detail'

const data = [
  {
    name: 'MITSUBISHI XPANDER 2021',
    location: 'Quận 4, Hồ Chí Minh',
    originalPrice: '900K',
    specialPrice: '680K',
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2021/p/g/2023/04/02/15/9n73thzSvQu_QgW_j9nFAQ.jpg',
  },
  {
    name: 'MITSUBISHI XPANDER 2021',
    location: 'Quận 4, Hồ Chí Minh',
    specialPrice: '900K',
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2021/p/g/2022/01/10/08/r1DMff3Vpg_MqXxrGBRvdg.jpg',
  },
  {
    name: 'VINFAST LUX SA 2.0 2019',
    location: 'Quận 8, Hồ Chí Minh',
    specialPrice: '1199K',
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_lux_sa_2.0_2019/p/g/2023/06/24/11/sTpEnff9fOy403EBtaExqA.jpg',
  },
  {
    name: 'MITSUBISHI XPANDER 2022',
    location: 'Quận 4, Hồ Chí Minh',
    specialPrice: '850K',
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2022/p/g/2023/10/13/11/mj2Fm29aMRCC2TigGQ5OKA.jpg',
  },
  {
    name: 'MITSUBISHI OUTLANDER 2022',
    location: 'Quận 4, Hồ Chí Minh',
    specialPrice: '1300K',
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_outlander_2022/p/g/2023/05/20/13/cZSE-BKIDcUVj6cXFETVKA.jpg',
  },
  {
    name: 'TOYOTA FORTUNER 2016',
    location: 'Quận 7, Hồ Chí Minh',
    specialPrice: '880K',
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_fortuner_2016/p/g/2022/11/09/08/Lk2DjwSQQN9gYK8pKhX5pw.jpg',
  },
  {
    name: 'MITSUBISHI XPANDER 2022',
    location: 'Quận 8, Hồ Chí Minh',
    specialPrice: '800K',
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2022/p/g/2023/08/17/19/iUHCqMsnzhBwf4_4n4CN0Q.jpg',
  },
  {
    name: 'VINFAST LUX SA 2.0 2020',
    location: 'Quận 5, Hồ Chí Minh',
    specialPrice: '1199K',
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_lux_sa_2.0_2020/p/g/2023/06/04/14/tC52IuhuMbXpGUou4vocdQ.jpg',
  },
  {
    name: 'FORD EXPLORER 2016',
    location: 'Quận 1, Hồ Chí Minh',
    specialPrice: '1300K',
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/ford_explorer_2016/p/g/2022/02/31/11/9WXQUhzYQxWSRdaOIWOyyQ.jpg',
  },
]

const Car = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <>
      <div className="header-car">
        <div className="m-container">
          <p>Đặc điểm</p>
          <p>Giấy tờ thuê xe</p>
          <p>Vị trí xe</p>
          <p>Chủ xe</p>
        </div>
      </div>
      <Cover />
      <div className="detail-car">
        <div className="m-container">
          <div className="detail-container">
            <ContentHead />
            <Sidebar />
            <ContentBody />
          </div>
          <div className="clear"></div>
        </div>
        <div className="related-car space sec">
          <div className="m-container">
            <h6>Xe tương tự </h6>
          </div>
          <div className="m-container">
            <Swiper
              className="swiper-related-car"
              modules={[EffectFade, Pagination, Navigation]}
              speed={300}
              slidesPerView={4}
              spaceBetween={10}
              pagination={{
                clickable: true,
                el: '.swiper-pagination.pagi-related',
                dynamicBullets: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next.related-car-next',
                prevEl: '.swiper-button-prev.related-car-prev',
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 3.2,
                },
                768: {
                  slidesPerView: 2.2,
                },
                0: {
                  slidesPerView: 1.2,
                },
              }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <CarCard item={item} />
                </SwiperSlide>
              ))}
              <div className="swiper-pagination pagi-related"></div>
            </Swiper>
            <div className="swiper-button-next related-car-next"></div>
            <div className="swiper-button-prev related-car-prev"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Car

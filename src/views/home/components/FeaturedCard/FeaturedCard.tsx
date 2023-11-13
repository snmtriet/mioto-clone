import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination } from 'swiper/modules'
import { CarCard } from '@/components/ui'

const data = [
  {
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_lux_a_2021/p/g/2023/09/11/14/mXIzB71IbeMJ8EeltgJbsA.jpg',
  },
  {
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mg_5_luxury_2022/p/g/2023/03/14/12/0qunI422EmCFfaB-Fhk2UQ.jpg',
  },
  {
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/chevrolet_aveo_2018/p/g/2023/09/13/16/-b6Qyz4WRKbaPVIvfacdWA.jpg',
  },
  {
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mg_5_luxury_2022/p/g/2023/06/12/22/3VTvKEyMj85rR88fqQaA7Q.jpg',
  },
  {
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/honda_city_2022/p/g/2023/09/18/09/FUa4ALaVktgJNgOiA7_0-Q.jpg',
  },
  {
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_lux_sa_2.0_2021/p/g/2023/04/11/11/jUH3DHT2GVfx2tN6DFxeaw.jpg',
  },
  {
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf5_2023/p/g/2023/08/07/23/Qh_M-OYpOcvC93rJHgeY-A.jpg',
  },
  {
    image:
      'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/ford_ecosport_2015/p/g/2023/02/14/16/5JybwG1dXM-1YqcqyhNHKg.jpg',
  },
]

const FeaturedCard = () => {
  return (
    <div className="featuredCar-section space sec">
      <div className="m-container">
        <h2>Xe Dành Cho Bạn</h2>
      </div>
      <div className="m-container">
        <div className="col4-mg20">
          {data.map((item) => (
            <CarCard item={item} key={item.image} />
          ))}
        </div>
        <Swiper
          className="swiper-related-car"
          modules={[EffectFade, Pagination]}
          speed={300}
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
            el: '.swiper-pagination.pagi-related',
            dynamicBullets: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1.2,
            },
            0: {
              slidesPerView: 1,
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
      </div>
    </div>
  )
}

export default FeaturedCard

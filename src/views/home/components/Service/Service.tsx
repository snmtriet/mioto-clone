import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'

type ServiceProps = {
  title: string
}

const Service = (props: ServiceProps) => {
  const { title } = props
  return (
    <div className="service-section space sec">
      <div className="m-container">
        <h2 className="textAlign-center">{title}</h2>
        <div className="service-container">
          <div className="service-item">
            <div className="service-item__img">
              <img
                loading="lazy"
                src="https://www.mioto.vn/static/media/gia_thue_xe_tu_lai_4cho_tai_hanoi.e6ebc385.png"
                alt="gia_thue_xe_tu_lai_4cho_tai_hanoi"
              />
              <div className="content">
                <h3>
                  Xe đã sẵn sàng.
                  <br />
                  Bắt đầu hành trình ngay!
                </h3>
                <p>
                  Tự tay cầm lái chiếc xe mà bạn yêu thích <br /> cho hành trình
                  thêm hứng khởi.
                </p>
                <Link to="#" className="btn btn--l btn-primary">
                  Thuê xe tự lái
                </Link>
              </div>
            </div>
          </div>
          <div className="service-item right">
            <div className="service-item__img">
              <img
                loading="lazy"
                src="https://www.mioto.vn/static/media/thue_xe_oto_tu_lai_va_co_tai.9df79c9f.png"
                alt="thue_xe_oto_tu_lai_va_co_tai"
              />
              <div className="content">
                <h3>Tài xế của bạn đã đến!</h3>
                <p>
                  Chuyến đi thêm thú vị <br /> cùng các bác tài 5* trên Mioto.
                </p>
                <Link to="#" className="btn btn-primary btn--l">
                  Thuê xe có tài xế
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="service-swiper-container">
          <Swiper
            className="swiper-service"
            modules={[EffectFade, Pagination]}
            speed={300}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
              el: '.swiper-pagination.pagi-service',
            }}
          >
            <SwiperSlide>
              <div className="fix-img">
                <img
                  loading="lazy"
                  src="https://www.mioto.vn/static/media/gia_thue_xe_tu_lai_4cho_tai_hanoi.e6ebc385.png"
                  alt="gia_thue_xe_tu_lai_4cho_tai_hanoi"
                />
              </div>
              <div className="content">
                <h3>
                  Xe đã sẵn sàng.
                  <br />
                  Bắt đầu hành trình ngay!
                </h3>
                <p>
                  Tự tay cầm lái chiếc xe mà bạn yêu thích <br /> cho hành trình
                  thêm hứng khởi.
                </p>
                <Link className="btn btn--l btn-primary abc" to="#">
                  Thuê xe tự lái
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="right">
              <div className="fix-img">
                <img
                  loading="lazy"
                  src="https://www.mioto.vn/static/media/thue_xe_oto_tu_lai_va_co_tai.9df79c9f.png"
                  alt="thue_xe_oto_tu_lai_va_co_tai"
                />
              </div>
              <div className="content">
                <h3>Tài xế của bạn đã đến!</h3>
                <p>
                  Chuyến đi thêm thú vị <br /> cùng các bác tài 5* trên Mioto.
                </p>
                <Link className="btn btn-primary btn--l" to="#">
                  Thuê xe có tài xế
                </Link>
              </div>
            </SwiperSlide>
            <div className="swiper-pagination pagi-service"></div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Service

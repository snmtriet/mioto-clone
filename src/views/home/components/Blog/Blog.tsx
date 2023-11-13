import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination } from 'swiper/modules'
import classNames from 'classnames'

const data = [
  {
    image: 'https://n1-cstg.mioto.vn/g/2023/07/12/09/6L6M2ZNX.jpg',
    date: '12-08-2023',
    title: 'Khám phá Hà Nội vào Lễ Quốc Khánh 2/9 bằng việc thuê xe tự lái',
  },
  {
    image: 'https://n1-cstg.mioto.vn/g/2023/07/10/00/CVEJCQII.jpg',
    date: '10-08-2023',
    title:
      'Thuê Xe Ô Tô Tự Lái tại Hà Nội: Sự Thuận Tiện Trong Việc Khám Phá Thủ Đô Hà Nội',
  },
  {
    image: 'https://n1-cstg.mioto.vn/g/2023/06/25/08/ZLW62WK.jpg',
    date: '25-07-2023',
    title: 'Xe Ô tô Điện - Sự Lựa Chọn Hoàn Hảo Cho Lái Mới',
  },
  {
    image: 'https://n1-cstg.mioto.vn/g/2023/06/19/16/1M6Y1MV1.jpg',
    date: '19-07-2023',
    title:
      'Nên lựa chọn xe số sàn hay số tự động, kinh nghiệm dành cho lái mới hoặc mua xe lần đầu?',
  },
  {
    image: 'https://n1-cstg.mioto.vn/g/2023/06/13/00/3GWTMTCU.jpg',
    date: '13-07-2023',
    title:
      'Kinh nghiệm lái xe ô tô cho tài mới: Hướng dẫn và lời khuyên để lái xe an toàn',
  },
  {
    image: 'https://n1-cstg.mioto.vn/g/2023/06/03/09/G9DYPJS5.jpg',
    date: '03-07-2023',
    title:
      'Thuê Xe Ô Tô Tự Lái ở Tân Bình: Sự Lựa Chọn Thông Minh Cho Chuyến Đi Hoàn Hảo',
  },
  {
    image:
      'https://n1-tstg.mioto.vn/g/2023/05/05/09/TSY54_MLt_laQvdwDGk3fQ.jpg',
    date: '05-06-2023',
    title:
      'Tự do khám phá thành phố khi thuê xe ô tô tự lái tại Quận Bình Thạnh',
  },
  {
    image: 'https://n1-cstg.mioto.vn/g/2023/07/10/10/CI5ZYJ51.jpg',
    date: '29-04-2023',
    title: 'DU LỊCH 3 MIỀN CÙNG MIOTO',
  },
  {
    image: 'https://n1-cstg.mioto.vn/g/2023/07/10/10/MDURDEEP.jpg',
    date: '20-04-2023',
    title: 'DÒNG XE Ô TÔ PHÙ HỢP ĐỂ ĐI CẮM TRẠI',
  },
]

const Blog = () => {
  return (
    <div className="blog-section space sec">
      <div className="m-container">
        <h2>MIOTO Blog</h2>
        <div className="blog-container">
          <div className="blog-wrap-2-item">
            {data.slice(0, 2).map((item) => (
              <Card key={item.title} item={item} />
            ))}
          </div>
          <div className="blog-wrap">
            <Card item={data[2]} />
          </div>
        </div>
        <div className="blog-swiper-container">
          <Swiper
            className="swiper-blog"
            modules={[EffectFade, Pagination]}
            speed={300}
            slidesPerView={1.5}
            spaceBetween={20}
            pagination={{
              clickable: true,
              el: '.swiper-pagination.pagi-blog',
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
                <Card item={item} isSlide={true} />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination pagi-blog"></div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Blog

type CardProps = {
  item: { image: string; date: string; title: string }
  isSlide?: boolean
}

function Card(props: CardProps) {
  const { item, isSlide = false } = props
  return (
    <Link to="#" className={classNames(!isSlide && 'blog-item')}>
      <div className={isSlide ? 'fix-img' : 'blog-item__img'}>
        <img loading="lazy" src={item.image} alt={item.title} />
      </div>
      <div className={isSlide ? 'content' : 'blog-item__content'}>
        <p className="time-text">{item.date}</p>
        <p className="name-text">{item.title}</p>
      </div>
    </Link>
  )
}

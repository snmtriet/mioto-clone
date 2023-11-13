import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination } from 'swiper/modules'
import Lightbox from 'react-18-image-lightbox'
import 'react-18-image-lightbox/style.css'
import { IconDoubleImage } from '@/components/shared/Icon'

const data = [
  'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2019/p/g/2023/03/14/13/Lgh3FQ1J0H8t9YvwhtgZAg.jpg',
  'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2019/p/g/2023/03/14/13/iMTUoVD7PlFz6B3u1hdOSA.jpg',
  'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2019/p/g/2023/03/14/13/2sYPjcL1XjuoqrSnWPTDwA.jpg',
  'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2019/p/g/2023/03/14/13/VjTuBnMPrGSayrC2RXgr6w.jpg',
  'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2019/p/g/2023/03/14/13/yrVLEPr_Rc_Of8bm1kqQqg.jpg',
  'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2019/p/g/2023/03/14/13/730yHTTIY9qja5Vg9CAByQ.jpg',
  'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2019/p/g/2023/03/14/13/2ehGP2iHIRscsfCJrsJWCA.jpg',
  'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2019/p/g/2023/03/14/13/Blukw5Iv9eTHLmSXUk9uBw.jpg',
  'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2019/p/g/2023/03/14/13/WmxZDZ3mxINNFRb-AmPCCQ.jpg',
  'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2019/p/g/2023/03/14/13/j4bL1_lmPYu9yP_ij2geqQ.jpg',
  'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2019/p/g/2023/03/14/13/01VLuZ-vsn4hE1HziEiUQA.jpg',
]

const Cover = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(1)

  const handleOpenLightbox = () => setIsOpen(true)
  return (
    <div className="cover-car">
      <div className="m-container">
        <div className="cover-car-container">
          <div className="main-img">
            <div className="cover-car-item">
              <img
                loading="lazy"
                alt="Cho thuê xe tự lái MITSUBISHI XPANDER 2019"
                src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2019/p/g/2023/03/14/13/Lgh3FQ1J0H8t9YvwhtgZAg.jpg"
              />
            </div>
          </div>
          <div className="sub-img">
            <div className="cover-car-item">
              <img
                loading="lazy"
                src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2019/p/g/2023/03/14/13/iMTUoVD7PlFz6B3u1hdOSA.jpg"
                alt="Cho thuê xe tự lái MITSUBISHI XPANDER 2019"
              />
            </div>
            <div className="cover-car-item">
              <img
                loading="lazy"
                src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2019/p/g/2023/03/14/13/2sYPjcL1XjuoqrSnWPTDwA.jpg"
                alt="Cho thuê xe tự lái MITSUBISHI XPANDER 2019"
              />
            </div>
            <div className="cover-car-item">
              <img
                loading="lazy"
                src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_2019/p/g/2023/03/14/13/VjTuBnMPrGSayrC2RXgr6w.jpg"
                alt="Cho thuê xe tự lái MITSUBISHI XPANDER 2019"
              />
            </div>
          </div>
          <div className="see-more-img" onClick={handleOpenLightbox}>
            <div className="wrap-svg">
              <IconDoubleImage />
            </div>
            <p>Xem tất cả ảnh</p>
          </div>
        </div>
      </div>
      <Swiper
        className="swiper-cover-car cover-car-swiper"
        modules={[EffectFade, Pagination]}
        speed={300}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: '.swiper-pagination.pagi-cover',
          dynamicBullets: true,
        }}
      >
        {data.map((img, index) => (
          <SwiperSlide key={index}>
            <Card image={img} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination pagi-cover"></div>
      </Swiper>
      {isOpen && (
        <Lightbox
          mainSrc={data[photoIndex]}
          nextSrc={data[(photoIndex + 1) % data.length]}
          prevSrc={data[(photoIndex + data.length - 1) % data.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + data.length - 1) % data.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % data.length)
          }
        />
      )}
    </div>
  )
}

export default Cover

type CardProps = {
  image: string
}

function Card(props: CardProps) {
  const { image } = props
  return (
    <div className="fix-img">
      <img
        loading="lazy"
        src={image}
        alt="Cho thuê xe tự lái MITSUBISHI XPANDER 2019"
      />
    </div>
  )
}

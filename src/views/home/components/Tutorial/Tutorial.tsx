import React from 'react'

const Tutorial = () => {
  return (
    <div className="tutorial-section space sec">
      <div className="m-container">
        <h2>Hướng Dẫn Thuê Xe </h2>
        <h5 className="title">
          Chỉ với 4 bước đơn giản để trải nghiệm thuê xe Mioto một cách
          nhanh&nbsp;chóng
        </h5>
        <div className="tutorial-container">
          <div className="tutorial-item">
            <div className="tutorial-item__img">
              <img
                loading="lazy"
                src="https://www.mioto.vn/static/media/cho_thue_xe_co_taigia_re_tphcm.12455eba.svg"
                alt="cho_thue_xe_co_taigia_re_tphcm"
              />
            </div>
            <div className="tutorial-item__content">
              <h5 className="text-primary">01</h5>
              <h5>
                Đặt xe trên
                <br />
                app/web Mioto
              </h5>
            </div>
          </div>
          <div className="tutorial-item">
            <div className="tutorial-item__img">
              <img
                loading="lazy"
                src="https://www.mioto.vn/static/media/gia_thue_xe_7cho_tai_tphcm.9455973a.svg"
                alt="gia_thue_xe_7cho_tai_tphcm"
              />
            </div>
            <div className="tutorial-item__content">
              <h5 className="text-primary">02</h5>
              <h5>Nhận xe</h5>
            </div>
          </div>
          <div className="tutorial-item">
            <div className="tutorial-item__img">
              <img
                loading="lazy"
                src="https://www.mioto.vn/static/media/gia_thue_xe_7cho_tai_hanoi.0834bed8.svg"
                alt="gia_thue_xe_7cho_tai_hanoi"
              />
            </div>
            <div className="tutorial-item__content">
              <h5 className="text-primary">03</h5>
              <h5>
                Bắt đầu
                <br />
                hành trình
              </h5>
            </div>
          </div>
          <div className="tutorial-item">
            <div className="tutorial-item__img">
              <img
                loading="lazy"
                src="https://www.mioto.vn/static/media/gia_thue_xe_4cho_tai_tphcm.9dcd3930.svg"
                alt="gia_thue_xe_4cho_tai_tphcm"
              />
            </div>
            <div className="tutorial-item__content">
              <h5 className="text-primary">04</h5>
              <h5>
                Trả xe &amp; kết thúc
                <br />
                chuyến đi
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tutorial

import {
  IconClose,
  IconLocationOutline,
  IconPlane,
} from '@/components/shared/Icon'

const ModalSearch = () => {
  return (
    <>
      <div className="search-input">
        <div className="wrap-svg">
          <IconLocationOutline />
        </div>
        <input type="text" placeholder="Phú Quốc" defaultValue="Phú Quốc" />
        <div className="wrap-svg pointer">
          <IconClose />
        </div>
      </div>
      <div className="search-suggest">
        <div className="box-container">
          <div className="wrap-box">
            <div className="box-item">
              <div className="wrap-svg">
                <IconLocationOutline />
              </div>
              <div className="box-item__text">
                <p className="main">Vị trí hiện tại</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box-container">
          <p className="title-box">Giao xe sân bay</p>
          <div className="wrap-box airport">
            <div className="box-item">
              <div className="wrap-svg">
                <IconPlane />
              </div>
              <div className="box-item__text">
                <p className="main">Tân Sơn Nhất</p>
              </div>
            </div>
            <div className="box-item">
              <div className="wrap-svg">
                <IconPlane />
              </div>
              <div className="box-item__text">
                <p className="main">Nội Bài</p>
              </div>
            </div>
            <div className="box-item">
              <div className="wrap-svg">
                <IconPlane />
              </div>
              <div className="box-item__text">
                <p className="main">Đà Nẵng</p>
              </div>
            </div>
            <div className="box-item">
              <div className="wrap-svg">
                <IconPlane />
              </div>
              <div className="box-item__text">
                <p className="main">Cam Ranh</p>
              </div>
            </div>
            <div className="box-item">
              <div className="wrap-svg">
                <IconPlane />
              </div>
              <div className="box-item__text">
                <p className="main">Phú Quốc</p>
              </div>
            </div>
            <div className="box-item">
              <div className="wrap-svg">
                <IconPlane />
              </div>
              <div className="box-item__text">
                <p className="main">Liên Khương</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalSearch

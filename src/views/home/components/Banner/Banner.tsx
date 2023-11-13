import { IconCar, IconHat } from '@/components/shared/Icon'
import classNames from 'classnames'
import { useState } from 'react'
import SelfDriving from './Tabs/SelfDriving'
import Driver from './Tabs/Driver'
import { Modal } from '@/components/ui'
import { ModalSearch } from '@/components/ui/Modal'

enum BOOKING_ENUM {
  self = 'self',
  driver = 'driver',
}

const Banner = () => {
  const [tab, setTab] = useState<BOOKING_ENUM>(BOOKING_ENUM.self)
  const [openSearch, setOpenSearch] = useState(false)

  const handleOpen = () => setOpenSearch(true)
  const handleClose = () => setOpenSearch(false)
  const handleChangeTab = (type: BOOKING_ENUM) => {
    setTab(type)
  }

  return (
    <div className="banner-section">
      <div className="m-container">
        <div
          className="background space sec"
          style={{
            background:
              'url("https://www.mioto.vn/static/media/bg-landingpage-1.34e13e49.png")',
          }}
        >
          <h1>Mioto - Cùng Bạn Đến Mọi Hành Trình</h1>
          <div className="line-bg"></div>
          <h6 className="text-white">
            Trải nghiệm sự khác biệt từ{' '}
            <span className="text-primary">hơn 8000</span> xe gia đình đời mới
            khắp Việt Nam
          </h6>
        </div>
        <div className="search-option">
          <div className="option">
            <div
              className={classNames(
                'option-item',
                tab === BOOKING_ENUM.self && 'active'
              )}
              onClick={() => handleChangeTab(BOOKING_ENUM.self)}
            >
              <div className="wrap-svg">
                <IconCar />
              </div>
              <p>Xe tự lái</p>
            </div>
            <div
              className={classNames(
                'option-item',
                tab === BOOKING_ENUM.driver && 'active'
              )}
              onClick={() => handleChangeTab(BOOKING_ENUM.driver)}
            >
              <div className="wrap-svg">
                <IconHat />
              </div>
              <p>Xe có tài xế</p>
            </div>
          </div>
          {tab === BOOKING_ENUM.self && <SelfDriving onOpen={handleOpen} />}
          {tab === BOOKING_ENUM.driver && <Driver onOpen={handleOpen} />}
        </div>
      </div>
      <Modal
        className="modal-m modal-search modal-fix"
        open={openSearch}
        onClose={handleClose}
        headerTitle="Địa điểm"
      >
        <ModalSearch />
      </Modal>
    </div>
  )
}

export default Banner

import classNames from 'classnames'
import { useState } from 'react'

enum TAB_ENUM {
  self = 'self',
  driver = 'driver',
}

const CarOwner = () => {
  const [tab, setTab] = useState<TAB_ENUM>(TAB_ENUM.driver)

  const handleChangeTab = (type: TAB_ENUM) => setTab(type)

  return (
    <div className="content-item car-owner">
      <div className="title">
        <h6>Danh sách xe</h6>
        <div className="tab-mode">
          <div
            className={classNames(
              'tab-mode__item',
              tab === TAB_ENUM.driver && 'active'
            )}
            onClick={() => handleChangeTab(TAB_ENUM.driver)}
          >
            Có tài xế
          </div>
          <div
            className={classNames(
              'tab-mode__item',
              tab === TAB_ENUM.self && 'active'
            )}
            onClick={() => handleChangeTab(TAB_ENUM.self)}
          >
            Tự lái
          </div>
        </div>
      </div>
      <div className="empty-container">
        <img loading="lazy" src="/my-card.svg" alt="" />
        <p>Không tìm thấy xe nào.</p>
      </div>
    </div>
  )
}

export default CarOwner

import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'
import { IconBell } from '@/components/shared/Icon'
import { useClickOutside } from '@/utils/hooks'

const Notification = () => {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const dropdownRef = useClickOutside(() => setOpen(false))

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const onToggle = () => setOpen((prev) => !prev)

  return (
    <div ref={dropdownRef}>
      <div className={classNames('notification new', open && 'open')}>
        <div className="wrap-svg" onClick={onToggle}>
          <IconBell />
        </div>
        <div className="dropdown-menu">
          <h5 className="title-name">Thông báo</h5>
          <div className="line-page"></div>
          <div className="list-noti">
            <div className="list-noti__item ">
              <div className="avatar cover-ava">
                <img
                  loading="lazy"
                  src="https://n1-cstg.mioto.vn/v6/p/m/avatars_notify/sub/announce.png"
                />
              </div>
              <div className="desc">
                <span className="title">Welcome to Mioto</span>
                <span className="content">
                  Chào mừng bạn tham gia cộng đồng Mioto, bấm vào đây để xem
                  những kinh nghiệm thuê xe hữu ích.
                </span>
                <span className="timer"> 1 ngày trước</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification

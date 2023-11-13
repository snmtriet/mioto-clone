import { Link } from 'react-router-dom'
import { IconRating, IconTrip } from '@/components/shared/Icon'

const Owner = () => {
  return (
    <div className="info-car-desc" id="owner">
      <h6>Chủ xe</h6>
      <div className="profile-info">
        <Link to="/profile/UNG5B4" className="profile-desc">
          <div className="avatar avatar--m">
            <img
              loading="lazy"
              src="https://n1-astg.mioto.vn/g/2023/02/18/13/zrr1bQyse2r_6I9brS0csg.jpg"
            />
          </div>
          <div className="info">
            <h5>Toan Nguyen</h5>
            <div className="verifi">
              <div className="wrap-svg">
                <IconRating />
              </div>
              <p className="info">4.8</p>
              <p className="dot">•</p>
              <div className="wrap-svg">
                <IconTrip />
              </div>
              <p className="info">29 chuyến</p>
            </div>
          </div>
        </Link>
        <div className="owner-response">
          <div className="response-desc">
            <p className="title">Tỉ lệ phản hồi</p>
            <p className="rate">77%</p>
          </div>
          <div className="response-desc">
            <p className="title">Thời gian phản hồi</p>
            <p className="rate">5 phút</p>
          </div>
          <div className="response-desc">
            <p className="title">Tỉ lệ đồng ý</p>
            <p className="rate">85%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Owner

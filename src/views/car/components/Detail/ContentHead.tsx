import {
  IconHeartOutline,
  IconRating,
  IconShare,
  IconTrip,
} from '@/components/shared/Icon'

const ContentHead = () => {
  return (
    <div className="content-detail">
      <div className="info-car-basic">
        <div className="group-name">
          <h3>MITSUBISHI XPANDER 2019</h3>
          <div className="group-action d-flex-center-btw">
            <div className="shared">
              <div className="wrap-svg wrap-ic share">
                <IconShare />
              </div>
              <div className="fav-item wrap-ic wrap-svg">
                <IconHeartOutline />
              </div>
            </div>
          </div>
        </div>
        <div className="group-total">
          <div className="wrap-svg">
            <IconRating width={16} height={17} />
          </div>
          <span className="info">4.8</span>
          <span className="dot">•</span>
          <div className="wrap-svg">
            <IconTrip />
          </div>
          <span className="info">29 chuyến</span>
          <span className="dot">•</span>
          <span className="info">Quận 7, Hồ Chí Minh</span>
        </div>
        <div className="group-tag">
          <span className="tag-item transmission">Số tự động</span>
        </div>
      </div>
    </div>
  )
}

export default ContentHead

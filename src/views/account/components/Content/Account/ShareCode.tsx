import { IconQuestionRoundedOutline } from '@/components/shared/Icon'

const ShareCode = () => {
  return (
    <div className="content-item share-code">
      <div className="main-content">
        <div className="title">
          <h5>Giới thiệu bạn mới </h5>
          <div className="learn-more">
            <p>Tìm hiểu chi tiết chương trình</p>
            <div className="wrap-svg">
              <IconQuestionRoundedOutline />
            </div>
          </div>
        </div>
      </div>
      <div className="content-img pointer">
        <img src="/banner.png" />
      </div>
    </div>
  )
}

export default ShareCode

import { IconPlusRoundedOutline } from '@/components/shared/Icon'

const MyCards = () => {
  return (
    <div className="content-item my-cards">
      <div className="title">
        <h6>Thẻ của tôi</h6>
        <button className="btn btn--s">
          Thêm thẻ
          <div className="wrap-svg">
            <IconPlusRoundedOutline />
          </div>
        </button>
      </div>
      <div className="empty-container">
        <img loading="lazy" src="/empty-mycar.svg" alt="" />
        <p>Bạn chưa có thẻ nào</p>
      </div>
    </div>
  )
}

export default MyCards

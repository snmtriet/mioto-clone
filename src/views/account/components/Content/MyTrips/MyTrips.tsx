import { IconFilter } from '@/components/shared/Icon'

const MyTrips = () => {
  return (
    <>
      <div className="content-title">
        <h4>Chuyến đi của tôi</h4>
      </div>
      <div className="mytrips-mode">
        <div className="tab-mode">
          <button className="tab-mode__item active">Chuyến hiện tại</button>
          <button className="tab-mode__item ">Lịch sử chuyến</button>
        </div>
        <button className="btn btn--s">
          <div className="wrap-svg">
            <IconFilter />
          </div>
          Bộ lọc
        </button>
      </div>
      <div className="list-car my-trips">
        <div className="empty-container">
          <img loading="lazy" src="/empty-trip.svg" alt="" />
          <p>Bạn chưa có chuyến</p>
        </div>
      </div>
    </>
  )
}

export default MyTrips

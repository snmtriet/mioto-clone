import { Link } from 'react-router-dom'

const MyReward = () => {
  return (
    <>
      <div className="content-title">
        <h4>Quà tặng</h4>
      </div>
      <div className="empty-container">
        <img loading="lazy" src="/empty-gift.svg" />
        <p>
          Bạn vui lòng sử dụng app Mioto để tìm hiểu thêm chi tiết chương trình
        </p>
        <div className="install-img d-flex">
          <Link
            target="_blank"
            to="https://app.adjust.com/liet8yx?deep_link=mioto%3A%2F%2F&campaign=Web2App&utm_source=Web2App"
          >
            <img loading="lazy" src="/appstore.png" />
          </Link>
          <Link
            target="_blank"
            to="https://app.adjust.com/liet8yx?deep_link=mioto%3A%2F%2F&campaign=Web2App&utm_source=Web2App"
          >
            <img loading="lazy" src="/googleplay.png" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default MyReward

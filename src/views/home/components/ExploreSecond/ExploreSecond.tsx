import { Link } from 'react-router-dom'

const ExploreSecond = () => {
  return (
    <div className="explorer-section second">
      <div className="m-container">
        <div className="explorer-container">
          <div className="explorer-item">
            <div className="explorer-item__content">
              <div className="wrap-svg">
                <svg
                  width={65}
                  height={65}
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.2979 5.66406H25.6979C20.8979 5.66406 19.8313 8.06409 19.2179 11.0241L17.0312 21.4774H47.9645L45.7779 11.0241C45.1645 8.06409 44.0979 5.66406 39.2979 5.66406Z"
                    stroke="#5CB3FF"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M51.8031 38.5218C52.0164 40.7885 50.2031 42.7351 47.8831 42.7351H44.2564C42.1764 42.7351 41.8831 41.8551 41.5098 40.7351L41.1098 39.5885C40.5764 38.0151 40.2298 36.9485 37.4298 36.9485H27.5364C24.7631 36.9485 24.3364 38.1485 23.8564 39.5885L23.4564 40.7351C23.0831 41.8285 22.7897 42.7351 20.7097 42.7351H17.0831C14.7631 42.7351 12.9497 40.7885 13.1631 38.5218L14.2564 26.7352C14.5231 23.8285 15.083 21.4551 20.1497 21.4551H44.8164C49.8831 21.4551 50.4431 23.8285 50.7098 26.7352L51.8031 38.5218Z"
                    stroke="#5CB3FF"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.0302 15.6641H15.0835"
                    stroke="#5CB3FF"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M49.9052 15.6641H47.9585"
                    stroke="#5CB3FF"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.896 29.2051H26.6827"
                    stroke="#5CB3FF"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M38.3125 29.2051H44.0992"
                    stroke="#5CB3FF"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.5 45.6641V48.3307"
                    stroke="#5CB3FF"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.5 56.3301V58.9967"
                    stroke="#5CB3FF"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.50016 48.3301L5.8335 58.9967"
                    stroke="#5CB3FF"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M56.5 48.3301L59.1667 58.9967"
                    stroke="#5CB3FF"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2>
                Bạn muốn cho <br />
                thuê xe?
              </h2>
              <p>
                Hơn 5,000 chủ xe đang cho thuê hiệu quả trên&nbsp;Mioto
                <br />
                Đăng kí trở thành đối tác của chúng tôi ngay hôm nay để gia tăng
                thu nhập hàng&nbsp;tháng.
              </p>
              <div className="wrap-btn has-2-btn">
                <Link className="btn btn--m btn-default" to="/howitwork#owner">
                  Tìm hiểu ngay
                </Link>
                <Link className="btn btn--m btn-blue" to="/owner/register">
                  Đăng ký xe
                </Link>
              </div>
            </div>
            <div className="explorer-item__img">
              <img
                src="https://www.mioto.vn/static/media/thue_xe_oto_tu_lai_di_du_lich_gia_re.fde3ac82.png"
                alt="thueoto_tu_lai_di_du_lich_gia_re"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreSecond

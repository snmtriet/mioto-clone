import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <div className="explorer-section">
      <div className="m-container">
        <div className="explorer-container">
          <div className="explorer-item">
            <div className="explorer-item__img">
              <img
                loading="lazy"
                src="https://www.mioto.vn/static/media/thue_xe_co_tai_xe_tphcm_gia_re.b6cd9996.png"
                alt="thue_xe_co_tai_xe_tphcm_gia_re"
              />
            </div>
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
                    d="M64.7367 45.3824L53.7663 17.3473C53.1936 15.9196 51.8344 15 50.2977 15H39.9565C38.7062 15 37.5447 15.6211 36.8509 16.6577L32.4991 23.1673L28.1472 16.6617C27.4535 15.6211 26.2919 15 25.0416 15H14.7004C13.1637 15 11.8005 15.9236 11.2238 17.3635L0.269489 45.3662C-0.194333 46.5197 -0.0531702 47.8225 0.64458 48.8509C1.3383 49.8794 2.49584 50.4925 3.73807 50.4925H3.7421L24.7109 50.4642C26.3686 50.4642 27.8447 49.347 28.3045 47.7378L32.4991 32.597L36.6977 47.7539C37.1534 49.347 38.6296 50.4602 40.2832 50.4642L61.2561 50.4925H61.2601C62.5023 50.4925 63.6558 49.8794 64.3536 48.8509C65.0513 47.8225 65.1925 46.5197 64.7367 45.3824ZM24.1785 46.0357L4.74638 46.064L15.1683 19.4285H24.6665L29.5346 26.7044L24.1785 46.0357ZM40.8156 46.0357L35.4595 26.7044L40.3276 19.4285H49.8259L60.2477 46.064L40.8156 46.0357Z"
                    fill="#5FCF86"
                  />
                </svg>
              </div>
              <h2>
                Bạn muốn biết thêm
                <br />
                về Mioto?
              </h2>
              <p>
                Mioto kết nối khách hàng có nhu cầu thuê xe với hàng ngàn chủ xe
                ô tô ở TPHCM, Hà Nội &amp; các tỉnh thành khác. Mioto hướng đến
                việc xây dựng cộng đồng người dùng ô tô văn minh &amp; uy tín
                tại Việt Nam.
              </p>
              <div className="wrap-btn">
                <Link className="btn btn--m btn-primary" to="/aboutus">
                  Tìm hiểu thêm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className="footer">
      <div className="m-container">
        <div className="footer-about">
          <div className="footer-info">
            <Link to="/" className="wrap-svg logo">
              <img
                loading="lazy"
                src="https://www.mioto.vn/static/media/logo-full.ea382559.png"
                alt="Logo"
              />
            </Link>
            <div className="phone-mail">
              <Link className="item" to="tel:19009217">
                <p className="main">1900 9217</p>
                <p>Tổng đài hỗ trợ: 7AM - 10PM</p>
              </Link>
              <Link className="item" to="mailto:contact@mioto.vn">
                <p className="main">contact@mioto.vn</p>
                <p>Gửi mail cho Mioto</p>
              </Link>
            </div>
            {/* Add your other components here */}
          </div>
          <div className="footer-path four-item">
            <div className="item">
              <p className="main">Chính Sách</p>
              <div className="item-sub">
                <Link to="/privacy">Chính sách và quy định</Link>
                <Link to="/regu">Quy chế hoạt động</Link>
                <Link to="/personalinfo">Bảo mật thông tin</Link>
                <Link to="/resolveconflic">Giải quyết tranh chấp</Link>
              </div>
            </div>
            <div className="item">
              <p className="main">Tìm Hiểu Thêm</p>
              <div className="item-sub">
                <Link to="/howitwork">Hướng dẫn chung</Link>
                <Link to="/bookinghowto">Hướng dẫn đặt xe</Link>
                <Link to="/paymenthowto">Hướng dẫn thanh toán</Link>
                <Link to="/faqs">Hỏi và trả lời</Link>
              </div>
            </div>
            <div className="item">
              <p className="main empty">&nbsp;</p>
              <div className="item-sub">
                <Link to="/aboutus">Về Mioto</Link>
                <Link to="/blogs">Mioto Blog</Link>
                <Link to="/career">Tuyển dụng</Link>
              </div>
            </div>
            <div className="item unset">
              <p className="main">Đối Tác</p>
              <div className="item-sub">
                <Link to="/owner/register">Đăng ký chủ xe Mioto</Link>
                <Link to="/registergps">Đăng ký GPS MITRACK 4G</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="m-container">
        <div className="footer-about">
          <div className="footer-info">
            <div className="phone-mail">
              <p className="item">© Công ty Cổ Phần Mioto Asia</p>
            </div>
          </div>
          <div className="footer-path three-item">
            <div className="item">
              <div className="item-sub">
                <p>Số GCNĐKKD: 0317307544</p>
              </div>
            </div>
            <div className="item">
              <div className="item-sub">
                <p>Ngày cấp: 24-05-22</p>
              </div>
            </div>
            <div className="item width-50">
              <div className="item-sub">
                <p>Nơi cấp: Sở Kế hoạch và Đầu tư TPHCM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="m-container">
        <div className="footer-about">
          <div className="footer-info">
            <div className="phone-mail address">
              <p className="item">
                Địa chỉ: Văn phòng 02, Tầng 08, Tòa nhà Pearl Plaza, Số 561A
                Điện Biên Phủ, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí
                Minh, Việt Nam.
              </p>
            </div>
          </div>
          <div className="footer-path three-item">
            <div className="item">
              <div className="item-sub">
                <p>Tên TK: CT CP MIOTO ASIA</p>
              </div>
            </div>
            <div className="item">
              <div className="item-sub">
                <p>Số TK: 102-989-1989</p>
              </div>
            </div>
            <div className="item width-50">
              <div className="item-sub">
                <p>Ngân hàng Vietcombank - CN Tân Định</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line line-white"></div>
      <div className="m-container">
        <div className="footer-about">
          <div className="footer-info empty">
            <div className="phone-mail">
              <Link
                className="logo-government"
                target="_blank"
                to="http://online.gov.vn/Home/WebDetails/98465"
              >
                <img
                  loading="lazy"
                  src="https://www.mioto.vn/static/media/bocongthuong.40599f29.png"
                />
              </Link>
            </div>
          </div>
          <div className="footer-path d-flex-align-center two-item">
            <div className="item">
              <div className="item-sub">
                <p>Phương thức thanh toán</p>
              </div>
            </div>
            <div className="item">
              <div className="payment">
                <img src="/momo.png" />
                <img src="/vnpay.png" />
                <img src="/alepay.png" />
                <img src="/visa.png" />
                <img src="/zalopay.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

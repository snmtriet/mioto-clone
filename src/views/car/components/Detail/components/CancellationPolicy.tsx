import { IconQuestionRoundedOutline } from '@/components/shared/Icon'

const CancellationPolicy = () => {
  return (
    <div className="info-car-desc">
      <h6>
        Chính sách huỷ chuyến
        <br />
        <p className="font-16 fontWeight-4 text-gray">
          Miễn phí hủy chuyến trong vòng 1 giờ sau khi đặt&nbsp;cọc
        </p>
      </h6>
      <div className="cancel-policy">
        <div className="column title">
          <div className="column__item case">Thời điểm hủy chuyến</div>
          <div className="column__item">Khách thuê hủy chuyến</div>
          <div className="column__item">Chủ xe hủy chuyến</div>
        </div>
        <div className="column">
          <div className="column__item case">Trong vòng 1h sau đặt cọc</div>
          <div className="column__item">
            <div className="wrap-svg">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 2C6.74 2 2.25 6.49 2.25 12C2.25 17.51 6.74 22 12.25 22C17.76 22 22.25 17.51 22.25 12C22.25 6.49 17.76 2 12.25 2ZM15.84 10.59L12.32 14.11C12.17 14.26 11.98 14.33 11.79 14.33C11.6 14.33 11.4 14.26 11.26 14.11L9.5 12.35C9.2 12.06 9.2 11.58 9.5 11.29C9.79 11 10.27 11 10.56 11.29L11.79 12.52L14.78 9.53C15.07 9.24 15.54 9.24 15.84 9.53C16.13 9.82 16.13 10.3 15.84 10.59Z"
                  fill="#12B76A"
                />
              </svg>
            </div>
            Hoàn tiền 100%
          </div>
          <div className="column__item">
            <div className="wrap-svg">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 2C6.74 2 2.25 6.49 2.25 12C2.25 17.51 6.74 22 12.25 22C17.76 22 22.25 17.51 22.25 12C22.25 6.49 17.76 2 12.25 2ZM15.84 10.59L12.32 14.11C12.17 14.26 11.98 14.33 11.79 14.33C11.6 14.33 11.4 14.26 11.26 14.11L9.5 12.35C9.2 12.06 9.2 11.58 9.5 11.29C9.79 11 10.27 11 10.56 11.29L11.79 12.52L14.78 9.53C15.07 9.24 15.54 9.24 15.84 9.53C16.13 9.82 16.13 10.3 15.84 10.59Z"
                  fill="#12B76A"
                />
              </svg>
            </div>
            Không đền cọc<span>(Đánh giá hệ thống 3*)</span>
          </div>
        </div>
        <div className="column">
          <div className="column__item case">Trước chuyến đi &gt;7 ngày</div>
          <div className="column__item">
            <div className="wrap-svg">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 2C6.74 2 2.25 6.49 2.25 12C2.25 17.51 6.74 22 12.25 22C17.76 22 22.25 17.51 22.25 12C22.25 6.49 17.76 2 12.25 2ZM15.84 10.59L12.32 14.11C12.17 14.26 11.98 14.33 11.79 14.33C11.6 14.33 11.4 14.26 11.26 14.11L9.5 12.35C9.2 12.06 9.2 11.58 9.5 11.29C9.79 11 10.27 11 10.56 11.29L11.79 12.52L14.78 9.53C15.07 9.24 15.54 9.24 15.84 9.53C16.13 9.82 16.13 10.3 15.84 10.59Z"
                  fill="#12B76A"
                />
              </svg>
            </div>
            Hoàn tiền 70%
          </div>
          <div className="column__item">
            <div className="wrap-svg">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 2C6.74 2 2.25 6.49 2.25 12C2.25 17.51 6.74 22 12.25 22C17.76 22 22.25 17.51 22.25 12C22.25 6.49 17.76 2 12.25 2ZM15.84 10.59L12.32 14.11C12.17 14.26 11.98 14.33 11.79 14.33C11.6 14.33 11.4 14.26 11.26 14.11L9.5 12.35C9.2 12.06 9.2 11.58 9.5 11.29C9.79 11 10.27 11 10.56 11.29L11.79 12.52L14.78 9.53C15.07 9.24 15.54 9.24 15.84 9.53C16.13 9.82 16.13 10.3 15.84 10.59Z"
                  fill="#12B76A"
                />
              </svg>
            </div>
            Đền cọc 30%<span>(Đánh giá hệ thống 3*)</span>
          </div>
        </div>
        <div className="column">
          <div className="column__item case">
            Trong vòng 7 ngày trước chuyến đi
          </div>
          <div className="column__item">
            <div className="wrap-svg">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 2C6.74 2 2.25 6.49 2.25 12C2.25 17.51 6.74 22 12.25 22C17.76 22 22.25 17.51 22.25 12C22.25 6.49 17.76 2 12.25 2ZM14.67 13.39C14.97 13.69 14.96 14.16 14.67 14.45C14.52 14.59 14.33 14.67 14.14 14.67C13.95 14.67 13.75 14.59 13.61 14.44L12.25 13.07L10.9 14.44C10.75 14.59 10.56 14.67 10.36 14.67C10.17 14.67 9.98 14.59 9.84 14.45C9.54 14.16 9.53999 13.69 9.82999 13.39L11.2 12L9.82999 10.61C9.53999 10.31 9.54 9.84 9.84 9.55C10.13 9.26 10.61 9.26 10.9 9.56L12.25 10.93L13.61 9.56C13.9 9.26 14.37 9.26 14.67 9.55C14.96 9.84 14.97 10.31 14.67 10.61L13.3 12L14.67 13.39Z"
                  fill="#F04438"
                />
              </svg>
            </div>
            Không hoàn tiền
          </div>
          <div className="column__item">
            <div className="wrap-svg">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 2C6.74 2 2.25 6.49 2.25 12C2.25 17.51 6.74 22 12.25 22C17.76 22 22.25 17.51 22.25 12C22.25 6.49 17.76 2 12.25 2ZM14.67 13.39C14.97 13.69 14.96 14.16 14.67 14.45C14.52 14.59 14.33 14.67 14.14 14.67C13.95 14.67 13.75 14.59 13.61 14.44L12.25 13.07L10.9 14.44C10.75 14.59 10.56 14.67 10.36 14.67C10.17 14.67 9.98 14.59 9.84 14.45C9.54 14.16 9.53999 13.69 9.82999 13.39L11.2 12L9.82999 10.61C9.53999 10.31 9.54 9.84 9.84 9.55C10.13 9.26 10.61 9.26 10.9 9.56L12.25 10.93L13.61 9.56C13.9 9.26 14.37 9.26 14.67 9.55C14.96 9.84 14.97 10.31 14.67 10.61L13.3 12L14.67 13.39Z"
                  fill="#F04438"
                />
              </svg>
            </div>
            Đền cọc 100%<span>(Đánh giá hệ thống 2*)</span>
          </div>
        </div>
        <div className="desc-note">
          <p>* Khách thuê không nhận xe sẽ không được hoàn cọc</p>
          <p>* Chủ xe không giao xe sẽ đền 100% tiền cọc</p>
          <p className="df-align-center">
            * Tiền cọc sẽ được hoàn trả trong vòng 1-3 ngày làm việc
            <span className="tooltip tooltip--m ">
              <span className="wrap-svg">
                <IconQuestionRoundedOutline />
              </span>
              <span className="tooltip-text">
                <b>Thủ tục hoàn tiền &amp; đền cọc</b>Mioto sẽ hoàn lại tiền cọc
                (&amp; tiền đền cọc do chủ xe hủy chuyến (nếu có) theo chính
                sách hủy chuyến) qua tài khoản ngân hàng của khách thuê trong
                vòng 1-3 ngày làm việc kể từ thời điểm hủy chuyến.
                <i>
                  *Nhân viên Mioto sẽ liên hệ khách thuê (qua số điện thoại đã
                  đăng ký trên Mioto) để xin thông tin tài khoản ngân hàng, hoặc
                  Khách thuê có thể chủ động gửi thông tin cho Mioto qua email
                  Contact@mioto.vn hoặc nhắn tin tại Mioto Fanpage
                </i>
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CancellationPolicy

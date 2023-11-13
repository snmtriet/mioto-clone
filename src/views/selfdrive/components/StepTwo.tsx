const StepTwo = () => {
  return (
    <div className="group form-default">
      <h6>Đơn giá thuê mặc định</h6>
      <p className="fl">
        <span className="note">
          Đơn giá áp dụng cho tất cả các ngày. Bạn có thuể tuỳ chỉnh giá khác
          cho các ngày đặc biệt (cuối tuần, lễ, tết...) trong mục quản lý xe sau
          khi đăng kí.
        </span>
      </p>
      <div className="space m" />
      <div className="space m" />
      <div className="space m" />
      <div className="col-left">
        <div className="form-default">
          <div className="line-form">
            <p className="pl">
              <span className="note">Giá đề xuất: 1100K</span>
            </p>
            <div className="wrap-input-label d-flex">
              <div className="wrap-input">
                <input type="text" defaultValue={1100} />
              </div>
              <span className="phay"> K</span>
            </div>
          </div>
        </div>
      </div>
      <div className="space m clear" />
      <div className="form-default">
        <div className="group-inline d-flex">
          <h6>Giảm giá</h6>
          <div className="switch-on-off">
            <input
              className="switch-input"
              id="cb-discount"
              type="checkbox"
              defaultChecked
            />
            <label className="switch-label" htmlFor="cb-discount" />
          </div>
        </div>
        <div className="col-left">
          <div className="line-form end">
            <label className="label">Giảm giá thuê tuần (% trên đơn giá)</label>
            <div className="range-slider">
              <div
                style={{
                  height: '100%',
                  position: 'relative',
                  cursor: 'pointer',
                  margin: '0px auto',
                  padding: '8px 0px',
                  width: 'auto',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgb(185, 185, 185)',
                    position: 'relative',
                    overflow: 'visible',
                    height: 14,
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgb(0, 165, 80)',
                      width: '5.40541%',
                      height: '100%',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: '5.40541%',
                      top: 0,
                      marginTop: '-1px',
                      marginLeft: '-8px',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: 'rgb(20, 20, 20)',
                        opacity: 1,
                        borderRadius: '100%',
                        height: 16,
                        width: 16,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <span style={{ float: 'right', fontSize: 14 }}>5%</span>
            <div className="space m" />
            <p className="pl">
              <span className="note">Giảm đề xuất: 20%</span>
            </p>
          </div>
        </div>
        <div className="space m clear" />
        <div className="line" />
      </div>
      <div className="form-default">
        <div className="group-inline d-flex">
          <h6>Đặt xe nhanh</h6>
          <div className="switch-on-off">
            <input className="switch-input" id="cb-instantly" type="checkbox" />
            <label className="switch-label" htmlFor="cb-instantly" />
          </div>
        </div>
        <div className="space m" />
        <span className="note marginBottom-xs" style={{ color: 'red' }}>
          Bật tính năng cho phép khách hàng đặt xe ngay lập tức không cần chủ xe
          phê duyệt. (Phù hợp với chủ xe không thường xuyên online hoặc kiểm tra
          điện thoại)
        </span>
        <div className="col-left">
          <div className="line-form">
            <label className="label">Giới hạn từ</label>
            <span className="wrap-select">
              <select>
                <option value={21600}>6 tiếng tới</option>
                <option value={43200}>12 tiếng tới</option>
                <option value={86400}>24 tiếng tới</option>
              </select>
            </span>
          </div>
        </div>
        <div className="col-right">
          <div className="line-form">
            <label className="label">Cho đến</label>
            <span className="wrap-select">
              <select>
                <option value={604800}>1 tuần tới</option>
                <option value={1209600}>2 tuần tới (Khuyến nghị)</option>
                <option value={1814400}>3 tuần tới</option>
                <option value={2419200}>4 tuần tới</option>
              </select>
            </span>
          </div>
        </div>

        <div className="space m" />
        <h6>Địa chỉ xe</h6>
        <div className="line-form">
          <div className="wrap-input has-ico-search">
            <div className="wrap-svg pointer">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.08 3.66016C13.38 3.66016 12 5.00016 12 6.64016C12 8.68016 14.76 11.6702 14.88 11.8002C14.99 11.9202 15.18 11.9202 15.29 11.8002C15.41 11.6702 18.17 8.68016 18.17 6.64016C18.17 5.00016 16.78 3.66016 15.08 3.66016Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0795 7.77039C15.665 7.77039 16.1395 7.29581 16.1395 6.71039C16.1395 6.12497 15.665 5.65039 15.0795 5.65039C14.4941 5.65039 14.0195 6.12497 14.0195 6.71039C14.0195 7.29581 14.4941 7.77039 15.0795 7.77039Z"
                  fill="black"
                />
                <path
                  d="M13.03 10.1094H4.81L2.75 20.3394H21.25L19.19 10.1094H17.14"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.91992 20.3385L20.2199 15.2285"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.86035 10.1094L13.0303 17.7794"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Địa chỉ mặc định để giao nhận xe."
              defaultValue=""
            />
          </div>
        </div>
        <div className="space m clear" />
        <div className="group-inline d-flex">
          <h6>Giao xe tận nơi</h6>
          <div className="switch-on-off">
            <input
              className="switch-input"
              id="cb-delivery"
              type="checkbox"
              defaultChecked
            />
            <label className="switch-label" htmlFor="cb-delivery" />
          </div>
        </div>
        <div className="col-left">
          <div className="line-form end">
            <label className="label">Quãng đường giao xe tối đa</label>
            <div className="range-slider">
              <div
                style={{
                  height: '100%',
                  position: 'relative',
                  cursor: 'pointer',
                  margin: '0px auto',
                  padding: '8px 0px',
                  width: 'auto',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgb(185, 185, 185)',
                    position: 'relative',
                    overflow: 'visible',
                    height: 14,
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgb(0, 165, 80)',
                      width: '4.44444%',
                      height: '100%',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: '4.44444%',
                      top: 0,
                      marginTop: '-1px',
                      marginLeft: '-8px',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: 'rgb(20, 20, 20)',
                        opacity: 1,
                        borderRadius: '100%',
                        height: 16,
                        width: 16,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <span style={{ float: 'right', fontSize: 14 }}>7km</span>
            <div className="space m" />
            <p className="pl">
              <span className="note">Quãng đường đề xuất: 7km</span>
            </p>
          </div>
        </div>
        <div className="col-right">
          <div className="line-form end">
            <label className="label">Phí giao nhận xe cho mỗi km</label>
            <div className="range-slider">
              <div
                style={{
                  height: '100%',
                  position: 'relative',
                  cursor: 'pointer',
                  margin: '0px auto',
                  padding: '8px 0px',
                  width: 'auto',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgb(185, 185, 185)',
                    position: 'relative',
                    overflow: 'visible',
                    height: 14,
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgb(0, 165, 80)',
                      width: '31.0345%',
                      height: '100%',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: '31.0345%',
                      top: 0,
                      marginTop: '-1px',
                      marginLeft: '-8px',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: 'rgb(20, 20, 20)',
                        opacity: 1,
                        borderRadius: '100%',
                        height: 16,
                        width: 16,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <span style={{ float: 'right', fontSize: 14 }}>10K</span>
            <div className="space m" />
            <p className="pl">
              <span className="note">Phí đề xuất: 10K</span>
            </p>
          </div>
        </div>
        <div className="col-left">
          <div className="line-form end">
            <label className="label">Miễn phí giao nhận xe trong vòng</label>
            <div className="range-slider">
              <div
                style={{
                  height: '100%',
                  position: 'relative',
                  cursor: 'pointer',
                  margin: '0px auto',
                  padding: '8px 0px',
                  width: 'auto',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgb(185, 185, 185)',
                    position: 'relative',
                    overflow: 'visible',
                    height: 14,
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgb(0, 165, 80)',
                      width: '0%',
                      height: '100%',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: '0%',
                      top: 0,
                      marginTop: '-1px',
                      marginLeft: '-8px',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: 'rgb(20, 20, 20)',
                        opacity: 1,
                        borderRadius: '100%',
                        height: 16,
                        width: 16,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <span style={{ float: 'right', fontSize: 14 }}>0km</span>
            <div className="space m" />
            <p className="pl">
              <span className="note">Quãng đường đề xuất: 0km</span>
            </p>
          </div>
        </div>
        <div className="space m clear" />
        <div className="group-inline d-flex">
          <h6>Giới hạn số km</h6>
          <div className="switch-on-off">
            <input
              className="switch-input"
              id="cb-limited"
              type="checkbox"
              defaultChecked
            />
            <label className="switch-label" htmlFor="cb-limited" />
          </div>
        </div>
        <div className="col-left">
          <div className="line-form end">
            <label className="label">Số km tối đa trong 1 ngày</label>
            <div className="range-slider">
              <div
                style={{
                  height: '100%',
                  position: 'relative',
                  cursor: 'pointer',
                  margin: '0px auto',
                  padding: '8px 0px',
                  width: 'auto',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgb(185, 185, 185)',
                    position: 'relative',
                    overflow: 'visible',
                    height: 14,
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgb(0, 165, 80)',
                      width: '50%',
                      height: '100%',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: 0,
                      marginTop: '-1px',
                      marginLeft: '-8px',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: 'rgb(20, 20, 20)',
                        opacity: 1,
                        borderRadius: '100%',
                        height: 16,
                        width: 16,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <span style={{ float: 'right', fontSize: 14 }}>400km</span>
            <div className="space m" />
            <p className="pl">
              <span className="note">Số km đề xuất: 400km</span>
            </p>
          </div>
        </div>
        <div className="col-right">
          <div className="line-form end">
            <label className="label">Phí vượt giới hạn (tính mỗi km)</label>
            <div
              style={{
                height: '100%',
                position: 'relative',
                cursor: 'pointer',
                margin: '0px auto',
                padding: '8px 0px',
                width: 'auto',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgb(185, 185, 185)',
                  position: 'relative',
                  overflow: 'visible',
                  height: 14,
                  width: '100%',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgb(0, 165, 80)',
                    width: '50%',
                    height: '100%',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    marginTop: '-1px',
                    marginLeft: '-8px',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgb(20, 20, 20)',
                      opacity: 1,
                      borderRadius: '100%',
                      height: 16,
                      width: 16,
                    }}
                  />
                </div>
              </div>
            </div>
            <span style={{ float: 'right', fontSize: 14 }}>3K</span>
            <div className="space m" />
            <p className="pl">
              <span className="note">Phí đề xuất: 3K</span>
            </p>
          </div>
        </div>
        <div className="space m clear" />
        <div className="line" />
      </div>
      <div className="space m" />
      <h6>Điều khoản thuê xe</h6>
      <p>
        <span className="note">
          Ghi rõ các yêu cầu để khách có thể thuê xe.
        </span>
      </p>
      <div className="line-form end custom-textarea">
        <textarea
          className="textarea"
          placeholder="Không sử dụng xe vào mục đích phi pháp. Lái xe cẩn thận, giữ xe sạch sẽ, trả xe đúng giờ. Phụ thu 500k nếu hút thuốc lá trong xe."
          defaultValue={''}
        />
      </div>
      <div className="space m" />
    </div>
  )
}

export default StepTwo

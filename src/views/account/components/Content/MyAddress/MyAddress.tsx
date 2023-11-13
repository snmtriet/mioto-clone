const MyAddress = () => {
  return (
    <>
      <div className="content-title">
        <h4>Địa chỉ của tôi</h4>
      </div>
      <div className="content-item address-list">
        <div className="title">
          <h4>Địa chỉ đã lưu</h4>
          <button className="btn btn--s">Thêm địa chỉ mới</button>
        </div>
        <div className="content">
          <div className="empty-container">
            <img loading="lazy" src="/empty-address.svg" alt="" />
            <p>Bạn chưa có địa chỉ</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyAddress

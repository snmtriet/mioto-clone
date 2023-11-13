const MyFavs = () => {
  return (
    <>
      <div className="content-title">
        <h4>Xe yêu thích của tôi</h4>
      </div>
      <div className="tab-mode">
        <div className="tab-mode__item active">Xe tự lái</div>
        <div className="tab-mode__item ">Xe có tài xế</div>
      </div>
      <div className="empty-container">
        <img loading="lazy" src="/empty-favcar.svg" alt="" />
        <p>Không có xe yêu thích</p>
      </div>
    </>
  )
}

export default MyFavs

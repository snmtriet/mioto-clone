import { IconInfo, IconQuestionRoundedOutline } from '@/components/shared/Icon'

export const CarRentalDocuments = () => {
  return (
    <div className="info-car-desc" id="papers">
      <h6 className="df-align-center">
        Giấy tờ thuê xe
        <span className="tooltip tooltip--m  icon--m">
          <span className="wrap-svg">
            <IconQuestionRoundedOutline />
          </span>
          <span className="tooltip-text">
            <b>Bạn đã có CCCD gắn chip </b>
            <br />
            Giấy tờ thuê xe gồm có: <br />- Giấy phép lái xe &amp; CCCD (chủ xe
            đối chiếu và gửi lại bạn) <br />
            <b>Bạn chưa có CCCD gắn chip </b>
            <br />
            Giấy tờ thuê xe gồm có: <br />- Giấy phép lái xe (chủ xe đối chiếu
            và gửi lại bạn) <br />- Passport (chủ xe đối chiếu, giữ lại và hoàn
            trả khi bạn trả xe) <br />
            Lưu ý: Khách thuê vui lòng chuẩn bị đầy đủ BẢN GỐC tất cả giấy tờ
            thuê xe khi làm thủ tục nhận xe.
          </span>
        </span>
      </h6>
      <div className="required-papers">
        <div className="required-papers__item">
          <div className="type__item">
            <div className="wrap-svg">
              <IconInfo />
            </div>
            <p className="font-12">Chọn 1 trong 2 hình thức</p>
          </div>
          <div className="type-content">
            <img loading="lazy" src="/gplx_cccd.png" />
            <div className="type-name">
              <p>GPLX &amp; CCCD gắn chip (đối chiếu)</p>
            </div>
          </div>
          <div className="type-content">
            <img loading="lazy" src="/gplx_passport.png" />
            <div className="type-name">
              <p>GPLX (đối chiếu) &amp; Passport (giữ lại)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

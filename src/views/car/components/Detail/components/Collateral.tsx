import { IconQuestionRoundedOutline } from '@/components/shared/Icon'

const Collateral = () => {
  return (
    <div className="info-car-desc">
      <h6 className="df-align-center">
        Tài sản thế chấp
        <span className="tooltip tooltip--m  icon--m">
          <span className="wrap-svg">
            <IconQuestionRoundedOutline />
          </span>
          <span className="tooltip-text">
            Bạn sẽ để lại tài sản thế chấp (tiền mặt/chuyển khoản hoặc xe máy
            kèm cà vẹt gốc) cho chủ xe khi làm thủ tục nhận xe <br />
            Chủ xe sẽ gửi lại tài sản thế chấp khi bạn hoàn trả xe theo như
            nguyên trạng ban đầu lúc nhận xe
          </span>
        </span>
      </h6>
      <div className="required-papers">
        <p>
          15 triệu (tiền mặt/chuyển khoản cho chủ xe khi nhận xe) hoặc Xe máy
          (kèm cà vẹt gốc) giá trị 15 triệu
        </p>
      </div>
    </div>
  )
}

export default Collateral

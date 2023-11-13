import { useState } from 'react'
import classNames from 'classnames'

const Rules = () => {
  const [readMore, setReadMore] = useState(false)

  const handleOpen = () => setReadMore(true)
  return (
    <div className="info-car-desc">
      <h6>Điều khoản</h6>
      <pre className={classNames(!readMore && 'hide')}>
        Quy định khác:{'\n'}◦ Sử dụng xe đúng mục đích.{'\n'}◦ Không sử dụng xe
        thuê vào mục đích phi pháp, trái pháp luật.{'\n'}◦ Không sử dụng xe thuê
        để cầm cố, thế chấp.{'\n'}◦ Không hút thuốc, nhả kẹo cao su, xả rác
        trong xe.{'\n'}◦ Không chở hàng quốc cấm dễ cháy nổ.{'\n'}◦ Không chở
        hoa quả, thực phẩm nặng mùi trong xe.{'\n'}◦ Khi trả xe, nếu xe bẩn hoặc
        có mùi trong xe, khách hàng vui lòng vệ sinh xe sạch sẽ hoặc gửi phụ thu
        phí vệ sinh xe.{'\n'}Trân trọng cảm ơn, chúc quý khách hàng có những
        chuyến đi tuyệt vời !
      </pre>
      {!readMore && (
        <p className="read-more" onClick={handleOpen}>
          Xem thêm
        </p>
      )}
    </div>
  )
}

export default Rules

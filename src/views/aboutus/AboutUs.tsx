import {
  IconCarOutline,
  IconHat,
  IconMultipleUser,
  IconRatingOutline,
  IconTrip,
  IconTripOutline,
} from '@/components/shared/Icon'
import { Service } from '../home/components'

const AboutUs = () => {
  return (
    <div className="about-us">
      <div
        className="aboutus-head space sec"
        style={{ opacity: 1, transform: 'none' }}
      >
        <div className="m-container">
          <h1>Mioto - Cùng bạn đến mọi hành trình</h1>
          <div className="aboutus-desc">
            <p>
              Mỗi chuyến đi là một hành trình khám phá cuộc sống và thế giới
              xung quanh, là cơ hội học hỏi và chinh phục những điều mới lạ của
              mỗi cá nhân để trở nên tốt hơn. Do đó, chất lượng trải nghiệm của
              khách hàng là ưu tiên hàng đầu và là nguồn cảm hứng của
              đội&nbsp;ngũ MIOTO.
              <br />
              <br />
              MIOTO là nền tảng chia sẻ ô tô, sứ mệnh của chúng tôi không chỉ
              dừng lại ở việc kết nối chủ xe và khách hàng một cách Nhanh chóng
              - An toàn - Tiện lợi, mà còn hướng đến việc truyền cảm hứng KHÁM
              PHÁ những điều mới lạ đến cộng đồng qua những chuyến đi trên nền
              tảng của chúng&nbsp;tôi.
            </p>
          </div>
        </div>
      </div>
      <div className="aboutus-img" style={{ opacity: 1, transform: 'none' }}>
        <div className="m-container">
          <img loading="eager" className="img-item-1" src="/aboutus1.png" />
        </div>
      </div>
      <div className="aboutus-intro space sec">
        <div className="m-container">
          <div className="intro-container">
            <div className="intro-container__info">
              <h2>Drive. Explore. Inspire</h2>
              <p>
                <strong>Cầm lái</strong> và <strong>Khám phá</strong> thế giới
                đầy <strong>Cảm hứng</strong>.
              </p>
              <p>
                MIOTO đặt mục tiêu trở thành cộng động người dùng ô tô Văn minh
                &amp; Uy tín #1 tại Việt Nam, nhằm mang lại những giá trị thiết
                thực cho tất cả những thành viên hướng đến một cuộc sống tốt đẹp
                hơn.
                <br />
                <br />
                Chúng tôi tin rằng mỗi hành trình đều quan trọng, vì vậy đội ngũ
                và các đối tác của MIOTO với nhiều kinh nghiệm về lĩnh vực cho
                thuê xe, công nghệ, bảo hiểm &amp; du lịch sẽ mang đến cho hành
                trình của bạn thêm nhiều trải nghiệm mới lạ, thú vị cùng sự an
                toàn ở mức cao nhất.
              </p>
            </div>
            <div className="intro-container__img">
              <img loading="eager" src="/aboutus2.png" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="aboutus-advantage space sec bg-gray"
        style={{ opacity: 1, transform: 'none' }}
      >
        <div className="m-container">
          <h2 className="textAlign-center">Mioto và những con&nbsp;số</h2>
          <div className="list-adv">
            <div className="adv-item icon">
              <div className="wrap-svg">
                <IconTrip width={60} height={61} />
              </div>
              <h5>100,000+</h5>
              <p>
                Chuyến đi đầy cảm hứng
                <br />
                Mioto đã đồng&nbsp;hành
              </p>
            </div>
            <div className="adv-item icon">
              <div className="wrap-svg">
                <IconMultipleUser />
              </div>
              <h5>50,000+</h5>
              <p>
                Khách hàng
                <br />
                đã trải nghiệm dịch&nbsp;vụ
              </p>
            </div>
            <div className="adv-item icon">
              <div className="wrap-svg">
                <IconHat width={60} height={61} stroke="#5FCF86" />
              </div>
              <h5>5,000+</h5>
              <p>
                Đối tác chủ xe
                <br />
                trong cộng&nbsp;đồng Mioto
              </p>
            </div>
            <div className="adv-item icon">
              <div className="wrap-svg">
                <IconCarOutline width={60} height={61} stroke="#5FCF86" />
              </div>
              <h5>100+</h5>
              <p>
                Dòng xe
                <br />
                khác nhau đang cho&nbsp;thuê
              </p>
            </div>
            <div className="adv-item icon">
              <div className="wrap-svg">
                <IconTripOutline width={60} height={61} stroke="#5FCF86" />
              </div>
              <h5>10+</h5>
              <p>
                Thành phố
                <br />
                Mioto đã có mặt
              </p>
            </div>
            <div className="adv-item icon">
              <div className="wrap-svg">
                <IconRatingOutline />
              </div>
              <h5>4.95/5*</h5>
              <p>
                Là số điểm nhận được từ &gt;50,000 khách&nbsp;hàng
                <br />
                đánh giá về dịch vụ của chúng&nbsp;tôi
              </p>
            </div>
          </div>
        </div>
      </div>
      <Service title="Bắt đầu ngay hôm nay" />
    </div>
  )
}

export default AboutUs

import { IconRating } from '@/components/shared/Icon'
import { Link } from 'react-router-dom'

const data = [
  {
    profileLink: '/profile/U7KEQ2',
    avatarSrc:
      'https://n1-astg.mioto.vn/g/2023/09/25/18/gwtDqj01SiFddxmho11Crg.jpg',
    name: 'Tran Tri Hien',
    rating: 5,
    time: '29/10',
  },
  {
    profileLink: '/profile/UQPV34',
    avatarSrc:
      'https://n1-astg.mioto.vn/g/2023/01/24/20/NmarTu8GNTBtVoYNAV9piA.jpg',
    name: 'Võ Hiền Nhân',
    rating: 5,
    time: '26/10',
  },
  {
    profileLink: '/profile/UKI6VC',
    avatarSrc:
      'https://n1-astg.mioto.vn/g/2022/09/10/23/F31NW7jHYr5JsTaJJcjiew.jpg',
    name: 'Quinn',
    rating: 5,
    time: '18/09',
  },
  {
    profileLink: '/profile/UQCPLH',
    avatarSrc: 'https://n1-cstg.mioto.vn/m/avatars/avatar-2.png',
    name: 'ku teo',
    rating: 5,
    time: '05/09',
  },
  {
    profileLink: '/profile/U7EVRR',
    avatarSrc: 'https://n1-cstg.mioto.vn/m/avatars/avatar-0.png',
    name: 'Cao Phúc Thành',
    rating: 4,
    time: '04/09',
  },
  {
    profileLink: '/profile/UK2V1D',
    avatarSrc:
      'https://n1-astg.mioto.vn/g/2023/03/22/18/-4bPGZFRVpZ5gRQglyTxwQ.jpg',
    name: 'Vu Vi',
    rating: 5,
    time: '31/07',
  },
  {
    profileLink: '/profile/UKFLWE',
    avatarSrc: 'https://n1-cstg.mioto.vn/m/avatars/avatar-3.png',
    name: 'Nam',
    rating: 5,
    time: '26/07',
    text: 'Chủ xe nhiệt tình, vui vẻ, xe chạy tốt đáp ứng được nhu cầu sử dụng. 10điểm',
  },
  {
    profileLink: '/profile/UPEBIY',
    avatarSrc:
      'https://n1-astg.mioto.vn/g/2023/03/15/14/Klifa8mQl5CY1JPTNzkDAQ.jpg',
    name: 'Hải An',
    rating: 5,
    time: '24/07',
  },
  {
    profileLink: '/profile/UKHUXP',
    avatarSrc:
      'https://n1-astg.mioto.vn/g/2023/01/05/10/h08BtLAZRP94usPG_oW5kQ.jpg',
    name: 'Duy Hưng',
    rating: 5,
    time: '21/07',
  },
  {
    profileLink: '/profile/UPDJZF',
    avatarSrc: 'https://n1-cstg.mioto.vn/m/avatars/avatar-0.png',
    name: 'Kiệt Nguyễn',
    rating: 4,
    time: '19/07',
  },
  {
    profileLink: '/profile/UP9DHH',
    avatarSrc: 'https://n1-cstg.mioto.vn/m/avatars/avatar-5.png',
    name: 'Anh Phát',
    rating: 5,
    time: '03/07',
  },
  {
    profileLink: '/profile/U9Y2BT',
    avatarSrc: 'https://n1-cstg.mioto.vn/m/avatars/avatar-2.png',
    name: 'Quang Bùi Minh',
    rating: 5,
    time: '02/07',
  },
]

const Reviews = () => {
  return (
    <div className="info-car-desc">
      <div className="reviews">
        <div className="rate-review">
          <div className="wrap-svg">
            <IconRating />
          </div>
          <p className="rate">4.8</p>
        </div>
        <span className="dot">•</span>
        <p className="total-review">31 đánh giá</p>
      </div>
      <div className="list-reviews">
        {data.map((item) => (
          <BoxReview key={item.profileLink} item={item} />
        ))}
      </div>
      <div className="btn-see-more">
        <button className="btn btn--s btn-secondary">Xem thêm</button>
      </div>
    </div>
  )
}

export default Reviews

type BoxReviewProps = {
  item: {
    profileLink: string
    avatarSrc: string
    name: string
    rating: number
    time: string
    text?: string
  }
}

function BoxReview(props: BoxReviewProps) {
  const { item } = props
  return (
    <div className="item-review">
      <div className="profile">
        <div className="desc">
          <Link to={item.profileLink} className="avatar avatar--m">
            <img
              loading="lazy"
              src={item.avatarSrc}
              alt="Mioto - Thuê xe tự lái"
            />
          </Link>
          <div className="info">
            <Link to={item.profileLink}>
              <h6>{item.name}</h6>
            </Link>
            <div className="rate">
              <div className="star-ratings" title="5 Stars">
                {new Array(item.rating).fill(undefined).map((item, index) => (
                  <IconRating key={index} />
                ))}
              </div>
              <p className="time">26/07</p>
            </div>
          </div>
        </div>
      </div>
      {item.text && (
        <pre className="main-review">
          Chủ xe nhiệt tình, vui vẻ, xe chạy tốt đáp ứng được nhu cầu sử dụng.
          10 điểm
        </pre>
      )}
    </div>
  )
}

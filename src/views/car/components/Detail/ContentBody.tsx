import Features from './components/Features'
import Amenities from './components/Amenities'
import { CarRentalDocuments } from './components/CarRentalDocuments'
import Collateral from './components/Collateral'
import Rules from './components/Rules'
import CancellationPolicy from './components/CancellationPolicy'
import Owner from './components/Owner'
import Reviews from './components/Reviews'

const ContentBody = () => {
  return (
    <div className="content-detail">
      <div className="line-page" />
      <Features />
      <div className="line-page" />
      <div className="info-car-desc">
        <h6>Mô tả</h6>
        <pre className="">MITSUBISHI XPANDER 2019</pre>
      </div>
      <div className="line-page" />
      <Amenities />
      <div className="line-page" />
      <CarRentalDocuments />
      <Collateral />
      <Rules />
      <CancellationPolicy />
      <div className="line-page" />
      <Owner />
      <Reviews />
    </div>
  )
}

export default ContentBody

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { IconArrowLeft } from '@/components/shared/Icon'
import { StepOne, StepThree, StepTwo } from './components'

const SelfDrive = () => {
  const [step, setStep] = useState<number>(1)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [step])

  const handleNextStep = () => setStep((prev) => prev + 1)
  const handlePrevStep = () => setStep((prev) => prev - 1)

  return (
    <div className="module-register">
      <div className="m-container">
        <div className="main-title">
          <Link className="back d-flex" to="/carregistermode">
            <div className="wrap-svg">
              <IconArrowLeft />
            </div>
            <p>Quay lại</p>
          </Link>
          <h4>Đăng ký xe</h4>
        </div>
      </div>
      <div className="register-container">
        <div className="content-register">
          <div className="stepbystep">
            <ul>
              <li className={classNames(step === 1 && 'active')}>
                <span className="nu">1</span>
                <span className="value">Thông tin</span>
              </li>
              <li className={classNames(step === 2 && 'active')}>
                <span className="nu">2</span>
                <span className="value">Cho thuê</span>
              </li>
              <li className={classNames(step === 3 && 'active')}>
                <span className="nu">3</span>
                <span className="value">Hình ảnh</span>
              </li>
            </ul>
          </div>
          {step === 1 && <StepOne />}
          {step === 2 && <StepTwo />}
          {step === 3 && <StepThree />}
        </div>
      </div>
      <div className="wrap-btn has-2btn">
        <div className="wr-btn">
          <button className="btn btn-secondary btn--m" onClick={handlePrevStep}>
            Quay lại
          </button>
        </div>
        {step === 3 ? (
          <div className="wr-btn">
            <button className="btn btn-primary btn--m">Đăng ký</button>
          </div>
        ) : (
          <div className="wr-btn">
            <button className="btn btn-primary btn--m" onClick={handleNextStep}>
              Kế tiếp
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SelfDrive

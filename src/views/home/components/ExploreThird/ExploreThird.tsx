import { Link } from 'react-router-dom'

const ExploreThird = () => {
  return (
    <div className="explorer-section third">
      <div className="m-container">
        <div className="explorer-container">
          <div className="explorer-item">
            <div className="explorer-item__content">
              <div className="wrap-svg">
                <svg
                  width={65}
                  height={65}
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.5 39.5541V52.1941C48.5 54.8074 46.42 56.9408 43.8866 56.9408H21.1134C18.5534 56.9408 16.5 54.8074 16.5 52.1941V12.3541C16.5 9.74076 18.58 7.60742 21.1134 7.60742H43.8866C46.4466 7.60742 48.5 9.74076 48.5 12.3541V40.4874"
                    stroke="#5FCF86"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M31.1665 15.8203H33.8332"
                    stroke="#5FCF86"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.5002 50.9661C33.9729 50.9661 35.1668 49.7722 35.1668 48.2995C35.1668 46.8267 33.9729 45.6328 32.5002 45.6328C31.0274 45.6328 29.8335 46.8267 29.8335 48.2995C29.8335 49.7722 31.0274 50.9661 32.5002 50.9661Z"
                    fill="#5FCF86"
                  />
                </svg>
              </div>
              <h2>
                Trải nghiệm trọn&nbsp;vẹn <br />
                cùng ứng dụng Mioto
              </h2>
              <div className="install-img">
                <Link to="https://app.adjust.com/liet8yx?deep_link=mioto%3A%2F%2F&campaign=Web2App&utm_source=Web2App">
                  <img loading="lazy" src="/appstore.png" />
                </Link>
                <Link to="https://app.adjust.com/liet8yx?deep_link=mioto%3A%2F%2F&campaign=Web2App&utm_source=Web2App">
                  <img loading="lazy" src="/googleplay.png" />
                </Link>
              </div>
            </div>
            <div className="explorer-item__img">
              <img
                loading="lazy"
                src="https://www.mioto.vn/static/media/dich_vu_cho_thue_oto_tu_lai.38588237.png"
                alt="dich_vu_cho_thue_oto_tu_lai"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreThird

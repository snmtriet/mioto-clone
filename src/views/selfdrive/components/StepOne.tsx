const carBrands = [
  { label: 'Chọn hãng xe', value: 0 },
  { label: 'Audi', value: 1 },
  { label: 'Baic', value: 27 },
  { label: 'Bentley', value: 12 },
  { label: 'BMW', value: 2 },
  { label: 'Brilliance', value: 44 },
  { label: 'Buick', value: 35 },
  { label: 'Chevrolet', value: 3 },
  { label: 'Daewoo', value: 17 },
  { label: 'Daihatsu', value: 41 },
  { label: 'Dongfeng', value: 40 },
  { label: 'Fiat', value: 30 },
  { label: 'Ford', value: 4 },
  { label: 'Geely', value: 37 },
  { label: 'Haima', value: 31 },
  { label: 'Honda', value: 10 },
  { label: 'Hyundai', value: 11 },
  { label: 'Isuzu', value: 24 },
  { label: 'Jaguar', value: 34 },
  { label: 'Kenbo', value: 46 },
  { label: 'Kia', value: 5 },
  { label: 'Land Rover', value: 43 },
  { label: 'Lexus', value: 13 },
  { label: 'Luxgen', value: 20 },
  { label: 'Mazda', value: 6 },
  { label: 'Mercedes', value: 7 },
  { label: 'Mitsubishi', value: 8 },
  { label: 'Morris Garages', value: 39 },
  { label: 'Nissan', value: 14 },
  { label: 'Peugeot', value: 25 },
  { label: 'Porsche', value: 15 },
  { label: 'Renault', value: 16 },
  { label: 'Riich', value: 33 },
  { label: 'Samsung', value: 47 },
  { label: 'SsangYong', value: 26 },
  { label: 'Subaru', value: 32 },
  { label: 'Suzuki', value: 19 },
  { label: 'Tobe', value: 42 },
  { label: 'Toyota', value: 9 },
  { label: 'UAZ', value: 22 },
  { label: 'Vinfast', value: 29 },
  { label: 'Volkswagen', value: 18 },
  { label: 'Volvo', value: 45 },
  { label: 'Zotye', value: 23 },
]
const numbersOptions = [
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
  { label: '10', value: 10 },
  { label: '11', value: 11 },
  { label: '12', value: 12 },
  { label: '13', value: 13 },
  { label: '14', value: 14 },
  { label: '15', value: 15 },
  { label: '16', value: 16 },
  { label: '17', value: 17 },
  { label: '18', value: 18 },
  { label: '19', value: 19 },
  { label: '20', value: 20 },
]
const bmwModels = [
  { value: '0', label: 'Chưa chọn' },
  { value: '455', label: 'BMW 218I GT LCI' },
  { value: '2', label: 'BMW 320i' },
  { value: '359', label: 'BMW 325I' },
  { value: '73', label: 'BMW 335I SPORT' },
  { value: '367', label: 'BMW 420I CABRIOLET' },
  { value: '3', label: 'BMW 520i' },
  { value: '72', label: 'BMW 523I' },
  { value: '470', label: 'BMW 528i' },
  { value: '189', label: 'BMW 530i' },
  { value: '279', label: 'BMW 730Li' },
  { value: '280', label: 'BMW 740Li' },
  { value: '70', label: 'BMW 760LI' },
  { value: '71', label: 'BMW I8' },
  { value: '457', label: 'BMW X1' },
  { value: '94', label: 'BMW X5' },
  { value: '217', label: 'BMW X6' },
  { value: '74', label: 'BMW Z4 SPORT' },
]
const yearOptions = [
  { value: 2023, label: 2023 },
  { value: 2022, label: 2022 },
  { value: 2021, label: 2021 },
  { value: 2020, label: 2020 },
  { value: 2019, label: 2019 },
  { value: 2018, label: 2018 },
  { value: 2017, label: 2017 },
  { value: 2016, label: 2016 },
  { value: 2015, label: 2015 },
  { value: 2014, label: 2014 },
  { value: 2013, label: 2013 },
  { value: 2012, label: 2012 },
  { value: 2011, label: 2011 },
  { value: 2010, label: 2010 },
  { value: 2009, label: 2009 },
  { value: 2008, label: 2008 },
  { value: 2007, label: 2007 },
  { value: 2006, label: 2006 },
  { value: 2005, label: 2005 },
  { value: 2004, label: 2004 },
  { value: 2003, label: 2003 },
  { value: 2002, label: 2002 },
  { value: 2001, label: 2001 },
  { value: 2000, label: 2000 },
  { value: 1999, label: 1999 },
  { value: 1998, label: 1998 },
  { value: 1997, label: 1997 },
  { value: 1996, label: 1996 },
  { value: 1995, label: 1995 },
  { value: 1994, label: 1994 },
  { value: 1993, label: 1993 },
  { value: 1992, label: 1992 },
  { value: 1991, label: 1991 },
  { value: 1990, label: 1990 },
  { value: 1989, label: 1989 },
  { value: 1988, label: 1988 },
  { value: 1987, label: 1987 },
  { value: 1986, label: 1986 },
  { value: 1985, label: 1985 },
  { value: 1984, label: 1984 },
  { value: 1983, label: 1983 },
  { value: 1982, label: 1982 },
  { value: 1981, label: 1981 },
  { value: 1980, label: 1980 },
  { value: 1979, label: 1979 },
  { value: 1978, label: 1978 },
  { value: 1977, label: 1977 },
  { value: 1976, label: 1976 },
  { value: 1975, label: 1975 },
  { value: 1974, label: 1974 },
  { value: 1973, label: 1973 },
  { value: 1972, label: 1972 },
  { value: 1971, label: 1971 },
  { value: 1970, label: 1970 },
  { value: 1969, label: 1969 },
  { value: 1968, label: 1968 },
  { value: 1967, label: 1967 },
  { value: 1966, label: 1966 },
  { value: 1965, label: 1965 },
  { value: 1964, label: 1964 },
  { value: 1963, label: 1963 },
  { value: 1962, label: 1962 },
  { value: 1961, label: 1961 },
  { value: 1960, label: 1960 },
]
const features = [
  {
    id: 'mp',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'mp',
    labelFor: 'mp',
    image: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/map-v2.png',
    alt: 'Bản đồ',
    text: 'Bản đồ',
  },
  {
    id: 'bt',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'bt',
    labelFor: 'bt',
    image: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/bluetooth-v2.png',
    alt: 'Bluetooth',
    text: 'Bluetooth',
  },
  {
    id: 'p360c',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'p360c',
    labelFor: 'p360c',
    image: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/360_camera-v2.png',
    alt: 'Camera 360',
    text: 'Camera 360',
  },
  {
    id: 'pc',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'pc',
    labelFor: 'pc',
    image:
      'https://n1-cstg.mioto.vn/v4/p/m/icons/features/parking_camera-v2.png',
    alt: 'Camera cập lề',
    text: 'Camera cập lề',
  },
  {
    id: 'dc',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'dc',
    labelFor: 'dc',
    image: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/dash_camera-v2.png',
    alt: 'Camera hành trình',
    text: 'Camera hành trình',
  },
  {
    id: 'sc',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'sc',
    labelFor: 'sc',
    image:
      'https://n1-cstg.mioto.vn/v4/p/m/icons/features/reverse_camera-v2.png',
    alt: 'Camera lùi',
    text: 'Camera lùi',
  },
  {
    id: 'tpms',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'tpms',
    labelFor: 'tpms',
    image: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/tpms-v2.png',
    alt: 'Cảm biến lốp',
    text: 'Cảm biến lốp',
  },
  {
    id: 'is',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'is',
    labelFor: 'is',
    image:
      'https://n1-cstg.mioto.vn/v4/p/m/icons/features/impact_sensor-v2.png',
    alt: 'Cảm biến va chạm',
    text: 'Cảm biến va chạm',
  },
  {
    id: 'hd',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'hd',
    labelFor: 'hd',
    image: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/head_up-v2.png',
    alt: 'Cảnh báo tốc độ',
    text: 'Cảnh báo tốc độ',
  },
  {
    id: 'sr',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'sr',
    labelFor: 'sr',
    image: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/sunroof-v2.png',
    alt: 'Cửa sổ trời',
    text: 'Cửa sổ trời',
  },
  {
    id: 'gp',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'gp',
    labelFor: 'gp',
    image: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/gps-v2.png',
    alt: 'Định vị GPS',
    text: 'Định vị GPS',
  },
  {
    id: 'bs',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'bs',
    labelFor: 'bs',
    image: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/babyseat-v2.png',
    alt: 'Ghế trẻ em',
    text: 'Ghế trẻ em',
  },
  {
    id: 'us',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'us',
    labelFor: 'us',
    image: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/usb-v2.png',
    alt: 'Khe cắm USB',
    text: 'Khe cắm USB',
  },
  {
    id: 'st',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'st',
    labelFor: 'st',
    image: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/spare_tire-v2.png',
    alt: 'Lốp dự phòng',
    text: 'Lốp dự phòng',
  },
  {
    id: 'dvd',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'dvd',
    labelFor: 'dvd',
    image: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/dvd-v2.png',
    alt: 'Màn hình DVD',
    text: 'Màn hình DVD',
  },
  {
    id: 'bn',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'bn',
    labelFor: 'bn',
    image: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/bonnet-v2.png',
    alt: 'Nắp thùng xe bán tải',
    text: 'Nắp thùng xe bán tải',
  },
  {
    id: 'ep',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'ep',
    labelFor: 'ep',
    image: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/etc-v2.png',
    alt: 'ETC',
    text: 'ETC',
  },
  {
    id: 'ab',
    type: 'checkbox',
    name: 'filter-car-feature',
    value: 'ab',
    labelFor: 'ab',
    image: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/airbags-v2.png',
    alt: 'Túi khí an toàn',
    text: 'Túi khí an toàn',
  },
]
const StepOne = () => {
  return (
    <div className="group form-default">
      <h6>Biển số xe</h6>
      <p className="fl">
        <span className="note" style={{ color: 'red' }}>
          Lưu ý: Biển số sẽ không thể thay đổi sau khi đăng kí.
        </span>
      </p>
      <div className="space m" />
      <div className="space m" />
      <div className="col-left">
        <div className="line-form">
          <div className="wrap-input">
            <input type="text" defaultValue="" />
          </div>
        </div>
      </div>
      <div className="space m clear" />
      <div className="clear" />
      <h6>Thông tin cơ bản</h6>
      <p className="fl">
        <span className="note" style={{ color: 'red' }}>
          Lưu ý: Các thông tin cơ bản sẽ không thể thay đổi sau khi đăng kí.
        </span>
      </p>
      <div className="space clear" />
      <div className="col-left">
        <div className="line-form">
          <label className="label">Hãng xe</label>
          <span className="wrap-select">
            <select>
              {carBrands.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
      <div className="col-right">
        <div className="line-form">
          <label className="label">Mẫu xe</label>
          <span className="wrap-select">
            <select disabled={false}>
              {bmwModels.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
      <div className="space clear" />
      <div className="col-left">
        <div className="line-form">
          <label className="label">Số ghế</label>
          <span className="wrap-select">
            <select>
              {numbersOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
      <div className="col-right">
        <div className="line-form">
          <label className="label">Năm sản xuất</label>
          <span className="wrap-select">
            <select>
              {yearOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
      <div className="space clear" />
      <div className="col-left">
        <div className="line-form">
          <label className="label">Truyền động</label>
          <span className="wrap-select">
            <select>
              <option value={1}>Số tự động</option>
              <option value={2}>Số sàn</option>
            </select>
          </span>
        </div>
      </div>
      <div className="col-right">
        <div className="line-form">
          <label className="label">Loại nhiên liệu</label>
          <span className="wrap-select">
            <select>
              <option value={1}>Xăng</option>
              <option value={2}>Dầu diesel</option>
              <option value={3}>Điện</option>
            </select>
          </span>
        </div>
      </div>
      <div className="space m" />
      <div className="space clear" />
      <h6>Mức tiêu thụ nhiên liệu</h6>
      <p className="fl">
        <span className="note">Số lít nhiên liệu cho quãng đường 100km.</span>
      </p>
      <div className="clear" />
      <div className="col-left">
        <div className="line-form">
          <label className="label" />
          <div className="wrap-input">
            <input type="text" placeholder="" defaultValue={10} />
          </div>
        </div>
      </div>
      <div className="space clear" />
      <h6>Mô tả</h6>
      <div className="custom-textarea">
        <textarea
          className="textarea"
          placeholder="Huyndai Elantra số tự động đăng kí tháng 06/2018. Xe gia đình mới đẹp, nội thất nguyên bản, sạch sẽ, bảo dưỡng thường xuyên, rửa xe miễn phí cho khách. Xe rộng rãi, an toàn, tiện nghi, phù hợp cho gia đình du lịch. Xe trang bị hệ thống cảm biến lùi, gạt mưa tự động, đèn pha tự động, camera hành trình, hệ thống giải trí AV cùng nhiều tiện nghi khác..."
        />
      </div>
      <div className="space m" />
      <h6>Tính năng</h6>
      <div className="car-feature__sect">
        <div className="list-feature">
          {features.map((item) => (
            <div className="squaredThree have-label">
              <input
                id={item.id}
                type="checkbox"
                name={item.name}
                defaultValue={item.value}
              />
              <label className="description" htmlFor={item.id}>
                <div className="thumbnail">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src={item.image}
                    alt="Bản đồ"
                  />
                  <span style={{ fontSize: '0.875rem' }}>{item.text}</span>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StepOne

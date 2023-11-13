import { useState } from 'react'

import { InputField } from '@/components/shared'
import {
  IconCloseError,
  IconPencilEdit,
  IconQuestionRoundedOutline,
  IconUpload,
} from '@/components/shared/Icon'
import classNames from 'classnames'

const DriverLicense = () => {
  const [openEdit, setOpenEdit] = useState(false)
  const [file, setFile] = useState<File & { preview?: string }>()

  const handleOpen = () => setOpenEdit(true)
  const handleClose = () => setOpenEdit(false)

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event?.target.files
    if (!files) return
    const file = files[0]
    Object.assign(file, { preview: URL.createObjectURL(file) })
    setFile(file)
  }

  const handleToggleChangeFile = () => {
    const inputFile = document.getElementById('fileUpload')
    if (inputFile && file?.preview) {
      inputFile.click()
    }
  }

  return (
    <div className="content-item driver-license">
      <div className="title">
        <div className="title-item">
          <h6>Giấy phép lái xe</h6>
          <div className="title-item__info error">
            <div className="wrap-svg">
              <IconCloseError />
            </div>
            Chưa xác thực
          </div>
        </div>
        {openEdit ? (
          <div
            className="wrap-btn has-2-btn"
            style={{ paddingTop: 0, width: 'unset' }}
          >
            <button className="btn btn-cancel" onClick={handleClose}>
              Huỷ
            </button>
            <button className="btn btn--s btn-primary" onClick={handleClose}>
              Cập nhật
            </button>
          </div>
        ) : (
          <button className="btn btn--s" onClick={handleOpen}>
            Chỉnh sửa
            <div className="wrap-svg">
              <IconPencilEdit />
            </div>
          </button>
        )}
      </div>
      <div className="learn-more">
        <p>Vì sao tôi phải xác thực GPLX</p>
        <div className="wrap-svg">
          <IconQuestionRoundedOutline />
        </div>
      </div>
      <div className="content">
        <div className="info-license">
          <div className="info-license__title">
            <p>Thông tin chung</p>
          </div>
          <InputField
            disabled={!openEdit}
            label="Số GPLX"
            placeholder="Nhập số GPLX đã cấp"
          />
          <InputField
            disabled={!openEdit}
            label="Họ và tên"
            placeholder="Nhập đầy đủ họ tên"
          />
          <InputField
            disabled={!openEdit}
            label="Ngày sinh"
            placeholder="01-01-1970"
          />
        </div>
        <div className="info-license">
          <div className="info-license__title">
            <p>Hình ảnh</p>
          </div>
          <div
            className={classNames(
              `info-license__${file?.preview ? 'img' : 'upload'}`,
              openEdit && 'has-edit'
            )}
            onClick={handleToggleChangeFile}
          >
            <label htmlFor="fileUpload">
              {file?.preview ? (
                <div className="fix-img">
                  <img
                    loading="lazy"
                    className="img-license"
                    src={file.preview}
                  />
                </div>
              ) : (
                <div>
                  <div className="wrap-svg d-flex-center">
                    <IconUpload />
                  </div>
                  <p className="main">Chọn hình ảnh giấy phép</p>
                </div>
              )}
              <div className="fileUploader">
                <div className="fileContainer">
                  <div className="errorsContainer" />
                  <button
                    type="button"
                    className="chooseFileButton btn btn-primary btn--s"
                    style={{ cursor: 'default' }}
                  >
                    Chọn hình
                  </button>
                  <input
                    type="file"
                    id="fileUpload"
                    name="fileUpload"
                    accept="image/*"
                    disabled={!openEdit}
                    onChange={handleChangeFile}
                  />
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DriverLicense

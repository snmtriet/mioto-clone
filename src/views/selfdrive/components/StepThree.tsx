const StepThree = () => {
  return (
    <div className="group form-default">
      <h6>Hình ảnh</h6>
      <p className="summary">
        Đăng nhiều hình ở các góc độ khác nhau để tăng thông tin cho xe của bạn.
      </p>
      <div className="list-photos">
        <ul>
          <li>
            <a className="obj-photo">
              <span className="ins">
                <div className="fileUploader ">
                  <div className="fileContainer">
                    <div className="errorsContainer" />
                    <button
                      type="button"
                      className="chooseFileButton btn btn-primary btn--s"
                    >
                      Chọn hình
                    </button>
                    <input type="file" name="" accept="accept=image/*" />
                  </div>
                </div>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default StepThree

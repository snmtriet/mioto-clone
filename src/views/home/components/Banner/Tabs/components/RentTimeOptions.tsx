const RentTimeOptions = () => {
  return (
    <div className="options">
      <div className="custom-radio">
        <input
          type="radio"
          id="selectHour_0"
          name="selectHour"
          defaultValue={0}
        />
        <label htmlFor="selectHour_0">Tùy chỉnh</label>
      </div>
      <div className="custom-radio">
        <input
          type="radio"
          id="selectHour_2"
          name="selectHour"
          defaultValue={2}
          defaultChecked={true}
        />
        <label htmlFor="selectHour_2">
          2 tiếng<span className="note-time">(kết thúc 10:00 11/11/2023)</span>
        </label>
      </div>
      <div className="custom-radio">
        <input
          type="radio"
          id="selectHour_4"
          name="selectHour"
          defaultValue={4}
        />
        <label htmlFor="selectHour_4">
          4 tiếng<span className="note-time">(kết thúc 12:00 11/11/2023)</span>
        </label>
      </div>
      <div className="custom-radio">
        <input
          type="radio"
          id="selectHour_6"
          name="selectHour"
          defaultValue={6}
        />
        <label htmlFor="selectHour_6">
          6 tiếng<span className="note-time">(kết thúc 14:00 11/11/2023)</span>
        </label>
      </div>
      <div className="custom-radio">
        <input
          type="radio"
          id="selectHour_8"
          name="selectHour"
          defaultValue={8}
        />
        <label htmlFor="selectHour_8">
          8 tiếng<span className="note-time">(kết thúc 16:00 11/11/2023)</span>
        </label>
      </div>
      <div className="custom-radio">
        <input
          type="radio"
          id="selectHour_10"
          name="selectHour"
          defaultValue={10}
        />
        <label htmlFor="selectHour_10">
          10 tiếng<span className="note-time">(kết thúc 18:00 11/11/2023)</span>
        </label>
      </div>
      <div className="custom-radio">
        <input
          type="radio"
          id="selectHour_12"
          name="selectHour"
          defaultValue={12}
        />
        <label htmlFor="selectHour_12">
          12 tiếng<span className="note-time">(kết thúc 20:00 11/11/2023)</span>
        </label>
      </div>
      <div className="custom-radio">
        <input
          type="radio"
          id="selectHour_16"
          name="selectHour"
          defaultValue={16}
        />
        <label htmlFor="selectHour_16">
          16 tiếng<span className="note-time">(kết thúc 00:00 12/11/2023)</span>
        </label>
      </div>
      <div className="custom-radio">
        <input
          type="radio"
          id="selectHour_24"
          name="selectHour"
          defaultValue={24}
        />
        <label htmlFor="selectHour_24">
          24 tiếng<span className="note-time">(kết thúc 08:00 12/11/2023)</span>
        </label>
      </div>
      <div className="custom-radio">
        <input
          type="radio"
          id="selectHour_36"
          name="selectHour"
          defaultValue={36}
        />
        <label htmlFor="selectHour_36">
          36 tiếng<span className="note-time">(kết thúc 20:00 12/11/2023)</span>
        </label>
      </div>
      <div className="custom-radio">
        <input
          type="radio"
          id="selectHour_48"
          name="selectHour"
          defaultValue={48}
        />
        <label htmlFor="selectHour_48">
          48 tiếng<span className="note-time">(kết thúc 08:00 13/11/2023)</span>
        </label>
      </div>
      <div className="custom-radio">
        <input
          type="radio"
          id="selectHour_60"
          name="selectHour"
          defaultValue={60}
        />
        <label htmlFor="selectHour_60">
          60 tiếng<span className="note-time">(kết thúc 20:00 13/11/2023)</span>
        </label>
      </div>
    </div>
  )
}

export default RentTimeOptions

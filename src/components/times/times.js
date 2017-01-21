import "./times.scss"
import React from "react"
const getWeatherIcon = (main) => {
  let icon = ""
  switch (main) {
    case "Clouds":
      icon = "fa-cloud"
      break
    case "Clear":
      icon = "fa-cloud clear"
      break
    case "Rain":
      icon = "fa-umbrella"
      break
    default:
      break
  }
  return icon
}
export const Times = ({
  times = [],
  timeSettings = {},
}) => {
  return (
    <section className="times">
      {times.map((time, key) =>
        <div>
          <div key={key}
            className="time">

            <span className="time__time">
              {time.dateTime.toLocaleTimeString([], timeSettings)}
            </span>

            <span className="time__main">
              {time.main}
            </span>

            <span className="time__description">
              {time.description}
            </span>

            <span className="time__icon">
              <span className={`icon fa ${getWeatherIcon(time.main)}`}></span>
            </span>
          </div>
          <If condition={times.length !== key + 1}>
            <hr className="separator" />
          </If>
        </div>
      )}
    </section>
  )
}

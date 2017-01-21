import "./days.scss"
import { Times } from "../times/times"
import React from "react"

export const Days = ({
  days = [],
  dateSettings = {},
  timeSettings = {},
}) => {
  return (
    <div className="days">
      {Object.keys(days).map((dateKey) => {
        const date = new Date(dateKey)
        const isToday = new Date().toLocaleDateString() === date.toLocaleDateString()
        const todayClass = isToday ? "active" : "inactive"
        return (
          <div key={dateKey}
            className={`day ${todayClass}`}>
            <h3 className="day__title">
              {date.toLocaleDateString([], dateSettings)}
            </h3>
            <Times times={days[dateKey]}
              timeSettings={timeSettings}
            />
          </div>
        )
      })}
    </div>
  )
}

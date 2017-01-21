import "./footer.scss"
import React from "react"

export const Footer = () => {
  return (
    <footer className="footer">
      <p>Created by Aaron Lote as part of a technical test for BuildIt.</p>
      <p>If the page does not show any content please click the Shield in the address bar (Chrome) and click "Load unsafe scripts".</p>
      <p>This is due to Github Pages only supporting HTTPS while Openweathermap.com free requests only supporting HTTP.</p>
      <p>
        Alternately you can view it by <a href="http://5-day-weather-forecast.aaronlote.com" target="_blank">clicking here</a>
      </p>
    </footer>
  )
}

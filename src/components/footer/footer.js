import "./footer.scss"
import React from "react"

export const Footer = () => {
  return (
    <footer className="footer">
      <p>Created by Aaron Lote as part of a technical test for BuildIt.</p>
      <p>
        If the page does not show any weather please try viewing it by <a href="http://5-day-weather-forecast.aaronlote.com" target="_blank">clicking here</a>
        <strong> or</strong> clicking the shield in the address bar and pressing "load unsafe scripts"
      </p>
    </footer>
  )
}

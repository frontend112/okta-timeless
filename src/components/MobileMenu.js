import React, { useEffect } from "react"
import { Link } from "gatsby"
function MobileMenu() {
  useEffect(() => {
    document.querySelector(".toggle-btn").addEventListener("click", () => {
      document.getElementById("sidebar").classList.toggle("active")
    })
  }, [])

  return (
    <div className="mobile-menu__wrapper">
      <div id="sidebar">
        <div className="toggle-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li className="mobile__link">
            <Link to="/savoir-vivre">Savoir Vivre</Link>
          </li>
          <li className="mobile__link">
            <Link to="/dress-code">Dress Code</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default MobileMenu

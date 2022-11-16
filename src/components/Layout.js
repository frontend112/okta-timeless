import React from "react"
import { Link } from "gatsby"
import Logo from "./Logo"
import LeftFooter from "./LeftFooter"
import Menu from "./Menu"
import BottomMobileFooter from "./BottomMobileFooter"
import Copyright from "./Copyright"
const Layout = props => {
  return (
    <>
      <div className="contact">
        <Link to="/kontakt">Kontakt</Link>
      </div>
      <Logo />
      <Menu />
      <LeftFooter />
      <div className="blog-post__container">{props.children}</div>
      <BottomMobileFooter />
      <Copyright />
    </>
  )
}

export default Layout

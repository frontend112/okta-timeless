import React from "react"
import { Link } from "gatsby"
function Copyright() {
  return (
    <div className="copyright">
      Copyrights © 2021{" "}
      <a
        className="copyright__sztukaKobiecosci"
        href="https://sztukakobiecosci.pl"
      >
        SztukaKobiecosci.pl
      </a>
      Wszelkie prawa zastrzeżone.{" "}
      <Link className="copyright__kontakt" to="/kontakt">
        Kontakt
      </Link>
    </div>
  )
}

export default Copyright

import React from "react"
import Paulina from "../../static/assets/Paulina.jpg"
import linkedin from "../../static/assets/linkedin.png"
import facebook from "../../static/assets/facebook.png"
import instagram from "../../static/assets/instagram.png"
import printerest from "../../static/assets/printerest.png"
import heart from "../../static/assets/heart.png"

function LeftFooter() {
  return (
    <div className="left-footer">
      <div className="left-footer__social-icons">
        <a
          className="left-footer__link"
          href="https://www.facebook.com/paulina.malota"
        >
          <img
            className="left-footer__social-icon"
            src={facebook}
            alt="facebook"
          />
        </a>
        <a
          className="left-footer__link"
          href="https://www.instagram.com/sztuka_kobiecosci/"
        >
          <img
            className="left-footer__social-icon"
            src={instagram}
            alt="instagram"
          />
        </a>
        <a
          className="left-footer__link"
          href="https://www.linkedin.com/in/paulina-ma%C5%82ota-4835a9a5/"
        >
          <img
            className="left-footer__social-icon"
            src={linkedin}
            alt="linkedin"
          />
        </a>
        <a
          className="left-footer__link"
          href="https://pl.pinterest.com/timelessclothes1"
        >
          <img
            className="left-footer__social-icon"
            src={printerest}
            alt="printerest"
          />
        </a>
        <a className="left-footer__link" href="https://www.bloglovin.com/">
          <img className="left-footer__social-icon" src={heart} alt="heart" />
        </a>
      </div>
      <h1 className="left-footer__header">O mnie</h1>
      <img className="left-footer__picture" src={Paulina} alt="moje zdjęcie" />
      <p className="left-footer__description">
        Miłośniczka elegancji i ponadczasowości. Dziennikarka z wykształcenia i
        z zamiłowania. Śmiało stawia swoje pierwsze kroki w świecie mediów.
      </p>
    </div>
  )
}

export default LeftFooter

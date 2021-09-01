import React from 'react'
import Paulina from '../../static/assets/Paulina.jpg'
import linkedin from '../../static/assets/linkedin.png'
import facebook from '../../static/assets/facebook.png'
import instagram from '../../static/assets/instagram.png'
function BottomMobileFooter() {
    return (
        <div className='bottom-footer'>
            <h1 className='bottom-footer__header'>O mnie</h1>
            <img className='bottom-footer__picture' src={Paulina} alt='moje zdjęcie'/>
            <p className='bottom-footer__description'>
                Miłośniczka elegancji i ponadczasowości. 
                Dziennikarka z wykształcenia i z zamiłowania. 
                Śmiało stawia swoje pierwsze kroki w świecie mediów.
            </p>
            <div className='left-footer__social-icons'>
                <a className='left-footer__link' href='https://www.facebook.com/paulina.malota'><img className='left-footer__social-icon' src={facebook} alt='facebook'/></a>
                <a className='left-footer__link' href='https://www.instagram.com/paulinnna_m/?hl=pl'><img className='left-footer__social-icon' src={instagram} alt='instagram'/></a>
                <a className='left-footer__link' href='https://www.linkedin.com/in/paulina-ma%C5%82ota-4835a9a5/'><img className='left-footer__social-icon' src={linkedin} alt='linkedin'/></a>
            </div>
        </div>  
    )
}

export default BottomMobileFooter

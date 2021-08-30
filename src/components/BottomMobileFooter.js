import React from 'react'
import Paulina from '../../static/assets/Paulina.jpg'
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
        </div>  
    )
}

export default BottomMobileFooter

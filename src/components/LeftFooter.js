import React from 'react'
import Paulina from '../../static/assets/Paulina.jpg'

function LeftFooter() {
    return (
        <div className='left-footer'>
            <div className='left-footer__icons'>
                {/* <i class="fab fa-facebook-square"></i> */}
            </div>
            <h1 className='left-footer__header'>O mnie</h1>
            <img className='left-footer__picture' src={Paulina} alt='moje zdjęcie'/>
            <p className='left-footer__description'>
                Miłośniczka elegancji i ponadczasowości. 
                Dziennikarka z wykształcenia i z zamiłowania. 
                Śmiało stawia swoje pierwsze kroki w świecie mediów.
            </p>
        </div>  
    )
}

export default LeftFooter

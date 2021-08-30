import React from 'react'
import LinkMenuComponent from './LinkMenuComponent'
import { Link } from 'gatsby'
import button from '../../static/assets/menu-button.png'
import MobileMenu from './MobileMenu'
import { useState } from 'react'
function Menu() {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <>
        <ul className='menu__items'>
            <li className='menu__item menu__item--savoir-vivre'>
                <LinkMenuComponent linkName='savoir-vivre'/>
            </li>
            <li className='menu__item menu__item--savoir-vivre'>
                <LinkMenuComponent linkName='dress-code'/>
            </li>
            <li className='menu__item'>
                <Link to='/kobieta'>Kobieta</Link>
            </li>
            <li className='mobile-menu'>
                <img onClick={
                    ()=>setIsClicked(handleClick(isClicked))} 
                    className='mobile-menu__image' src={button} alt='button'
                />
            </li>
        </ul>
            <MobileMenu shouldShow={isClicked?true:false}/>
        </>
    )
}
const handleClick = (isClicked)=>{
    isClicked === true ? isClicked = false : isClicked = true;
    return isClicked
}
export default Menu

import React from 'react'
import { Link } from 'gatsby'
function MobileMenu({shouldShow}) {
    console.log(shouldShow)
    return (
        <div className='mobile-menu__wrapper'>
        <ul className=
            {
                shouldShow?
                    'mobile-menu__main-links':
                    'mobile-menu__main-links--hidden'
            }
        >
            <li className='mobile-menu__item'>
                <Link to='/savoir-vivre'>savoir-vivre</Link>
            </li>
            <li className='mobile-menu__item'>
                <Link to='/savoir-vivre__historycznie'>historycznie</Link>
            </li>
            <li className='mobile-menu__item'>
                <Link to='/savoir-vivre__obyczajowo'>obyczajawo</Link>
            </li>
            <li className='mobile-menu__item'>
                <Link to='/savoir-vivre__biznesowo'>biznesowo</Link>
            </li>
            <li className='mobile-menu__item'>
                <Link to='/savoir-vivre__miedzynarodowo'>międzynarodowo</Link>
            </li>
            </ul>
        <ul className={
            shouldShow?
                'mobile-menu__main-links':
                'mobile-menu__main-links--hidden'
            }
        >
            <li className='mobile-menu__item'>
                <Link to='/dress-code'>dress-code</Link>
            </li>
            <li className='mobile-menu__item'>
                <Link to='/dress-code__historycznie'>historycznie</Link>
            </li>
            <li className='mobile-menu__item'>
                <Link to='/dress-code__obyczajowo'>obyczajawo</Link>
            </li>
            <li className='mobile-menu__item'>
                <Link to='/dress-code__biznesowo'>biznesowo</Link>
            </li>
            <li className='mobile-menu__item'>
                <Link to='/dress-code__miedzynarodowo'>międzynarodowo</Link>
            </li>
        </ul>
        </div>
    )
}

export default MobileMenu

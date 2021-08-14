import React from 'react'
import {Link} from 'gatsby'
import Logo from './Logo'
import LeftFooter from './LeftFooter'
import Menu from './Menu'
const Layout = props => {
    return (
        <>
            <div className='contact'><Link to='/kontakt'>Kontakt</Link></div>
            <Logo/>
            <Menu/>
            <div className="blog-post__container  ">
                <LeftFooter/>
                <div className='blog-post'>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Layout
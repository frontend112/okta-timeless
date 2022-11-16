import { Link } from 'gatsby'
import React from 'react'
import logo from '../../static/assets/logo.png'
import '../styles/index.css'
const Logo = () =>{
    return(
    <div className='logo__wrapper'>
        <Link className='logo__link' to='/'>
            <img className='logo__image'src={logo} alt ='logo'/>
        </Link>
    </div>)
}
export default Logo
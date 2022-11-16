import React from 'react'
import {Link} from 'gatsby'

export default function LinkMenuComponent(props) {
    const subLinks = ['historycznie', 'obyczajowo', 'biznesowo', 'miedzynarodowo'];

    return (
        <>
            <Link to = {'/'+props.linkName} >{props.linkName}
            </Link>
            <ul className={`menu__${props.linkName} menu__${props.linkName}--hidden`}>

                {
                    subLinks.map(sublink => (
                        <li key={sublink} className={`menu__${props.linkName}__item`}>
                            <Link to={`/${props.linkName}__${sublink}`}>
                                { sublink }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
        
    )
}

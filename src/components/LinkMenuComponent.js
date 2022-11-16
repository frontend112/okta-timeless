import React from 'react'
import {Link} from 'gatsby'

export default function LinkMenuComponent(props) {
    return (
        <>
            <Link to = {'/'+props.linkName} >{props.linkName}
            </Link>
            <ul className={`menu__${props.linkName} menu__${props.linkName}--hidden`}>
                <li className={`menu__${props.linkName}__item`}>
                    <Link to={`/${props.linkName}__historycznie`}>
                        historycznie
                    </Link>
                </li>
                <li className={`menu__${props.linkName}__item`}>
                    <Link to={`/${props.linkName}__obyczajowo`}>
                        obyczajowo
                    </Link>
                </li>
                <li className={`menu__${props.linkName}__item`}>
                    <Link to={`/${props.linkName}__biznesowo`}>
                        biznesowo
                    </Link>
                </li>
                <li className={`menu__${props.linkName}__item`}>
                    <Link to={`/${props.linkName}__miedzynarodowo`}>
                        miedzynarodowo
                    </Link>
                </li>
            </ul>
        </>
        
    )
}

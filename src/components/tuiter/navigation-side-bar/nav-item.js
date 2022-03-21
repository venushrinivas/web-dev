import React from "react";
import {Link} from "react-router-dom";

const NavItem = ({
                     navItem = {
                         is_button: false,
                         href: "/tuiter/home",
                         a_class: "list-group-item list-group-item-action",
                         icon_class: "fas fa-home",
                         div_class: "d-none d-xxl-inline-block d-xl-inline-block ps-1",
                         text: "Home"
                     }, class_name = "active"
                 }) => {
    if (navItem.is_button) {
        return (<button className={navItem.class} type={navItem.type}>{navItem.text}</button>)
    } else if (navItem.is_stacked) {
        return (<Link to={navItem.href} className={navItem.a_class + ' ' + class_name}>
                     <span className={navItem.stack_class}>
                        <i className={navItem.icon_class[0]}/>
                        <i className={navItem.icon_class[1]}/>
                     </span>
            <div className={navItem.div_class}>{navItem.text}</div>
        </Link>)
    }
    if (navItem.div_class) {
        return (
            <Link to={navItem.href} className={navItem.a_class + ' ' + class_name}>
                <i className={navItem.icon_class}/>
                <div className={navItem.div_class}>{navItem.text}</div>
            </Link>
        )
    }
    return (
        <Link to={navItem.href} className={navItem.a_class + ' ' + class_name}>
            <i className={navItem.icon_class}/>
        </Link>
    )
}
export default NavItem;
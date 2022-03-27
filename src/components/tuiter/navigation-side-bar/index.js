import React from "react";
import NavItem from "./nav-item";
import NavItems from "./nav-items.json";

const NavigationSideBar = ({current_page = "Home"}) => {
    return (
        <div className="list-group">
            {
                NavItems.map(navItem => {
                    return navItem.text === current_page ? <NavItem navItem={navItem} class_name='active' key={navItem.key}/> :
                        <NavItem navItem={navItem} class_name='' key={navItem.key}/>;
                })
            }
        </div>
    )
};
export default NavigationSideBar;
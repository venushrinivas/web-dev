const NavItem = (navItem, className) => {
    if (navItem.is_button) {
        return (`<button class="${navItem.class}" type="${navItem.type}">${navItem.text}</button>`)
    }
    else if (navItem.is_stacked) {
        return (`<a href='${navItem.href}' class='${navItem.a_class+' '+className}'>
                     <span class='${navItem.stack_class}'>
                        <i class="${navItem.icon_class[0]}"></i>
                        <i class="${navItem.icon_class[1]}"></i>
                     </span>
                     <div class='${navItem.div_class}'>${navItem.text}</div>
                 </a>`)
    }
    if (navItem.div_class) {
        return (`
            <a href='${navItem.href}' class='${navItem.a_class+' '+className} '>
                <i class='${navItem.icon_class}'></i>
                <div class='${navItem.div_class}'>${navItem.text}</div>
            </a>
        `)
    }
    return (`
                <a href='${navItem.href}' class='${navItem.a_class+' '+className} '>
                    <i class='${navItem.icon_class}'></i>
                </a>
            `)
}
export default NavItem;
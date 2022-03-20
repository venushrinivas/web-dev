import NavItems from './navitems.js';
import NavItem from './NavListItem.js';
const NavigationSidebar = (currentPage) => {
    return(`
            <div class="list-group">
                ${NavItems.map(navItem=>{
                    return navItem.text === currentPage ? (NavItem(navItem, 'active')) : (NavItem(navItem, ''));
                }).join('')
                }
            </div>
    `);
}
export default NavigationSidebar;

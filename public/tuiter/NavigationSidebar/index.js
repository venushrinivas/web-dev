import NavItems from './navitems.js';
import NavItem from './NavListItem.js';
const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                ${NavItems.map(navItem=>{
                    return (NavItem(navItem));
                }).join('')
                }
            </div>
    `);
}
export default NavigationSidebar;

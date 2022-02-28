import WhoToFollowListItem from './WhoToFollowListItem.js';
import WhoToFollow from './who.js'
const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <li class="list-group-item">
                <div class="wd-font-bold">
                    Who to follow
                </div>
            </li>
            ${WhoToFollow.map(who=>{
                return WhoToFollowListItem(who);
            }).join('')
            }
        </ul>
    `)
}
export default WhoToFollowList;
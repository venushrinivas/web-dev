import React from "react";
import Who from "./who.json";
import WhoToFollowListItem from "./who-to-follow-list";

const WhoToFollow = () => {
    return (<ul className="list-group">
        <li className="list-group-item">
            <div className="wd-font-bold">
                Who to follow
            </div>
        </li>
        {Who.map(who => {
        return <WhoToFollowListItem who={who} key={who.userName}/>;
    })}
    </ul>)
};
export default WhoToFollow
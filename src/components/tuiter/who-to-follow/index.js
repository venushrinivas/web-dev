import React from "react";
import WhoToFollowListItem from "./who-to-follow-list";
import {useSelector} from "react-redux";

const WhoToFollow = () => {
    const Who = useSelector((state) => state.who);
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
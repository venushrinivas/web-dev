import {useDispatch} from "react-redux";
import React from "react";
import {updateTuit} from "../../actions/tuits-actions";

const TuitStats = ({tuit, isLike}) => {
    const dispatch = useDispatch();
    const likeTuit = (tuit) => {
        isLike ? tuit.stats.like_count++ : tuit.stats.unlike_count++;
        updateTuit(dispatch, tuit);
    }
    return(
        <a className="text-decoration-none" onClick={()=>{likeTuit(tuit)}}>
            {
                isLike &&
                <i className="far fa-thumbs-up pe-2"/>
            }
            {
                isLike &&
                tuit.stats.like_count
            }
            {
                !isLike &&
                <i className="far fa-thumbs-down pe-2"/>
            }
            {
                !isLike &&
                tuit.stats.unlike_count
            }
        </a>
    )
}
export default TuitStats;
import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = (tuit) => {
        const action = {
            type: 'like-tuit',
            tuit
        }
        dispatch(action);
    }
    return(
        <a className="text-decoration-none" onClick={()=>{likeTuit(tuit)}}>
            {
                tuit.stats.liked &&
                <i className="fas fa-heart pe-2" style={{color:'red'}}/>
            }
            {
                !tuit.stats.liked &&
                <i className="far fa-heart pe-2"/>
            }
            {tuit.stats.like_count}
        </a>
    )
}
export default TuitStats;
import React, {useEffect} from "react";
import PostItem from "./post-item";
import {useDispatch ,useSelector} from "react-redux";
import {getTuits} from "../../../actions/tuits-actions";

const PostList = () => {
    const Posts = useSelector(state => state.tuits);
    const dispatch = useDispatch();

    useEffect(() => getTuits(dispatch), []);

    return (<div className="list-group">
        {Posts.map(post => {
            return (<PostItem post={post} key={post._id}/>)
        })
        }</div>)
};
export default PostList;
import React from "react";
import PostItem from "./post-item";
import {useSelector} from "react-redux";

const PostList = () => {
    const Posts = useSelector(state => state.tuits);
    return (<div className="list-group">
        {Posts.map(post => {
            return (<PostItem post={post} key={post._id}/>)
        })
        }</div>)
};
export default PostList;
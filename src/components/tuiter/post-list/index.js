import React from "react";
import Posts from "./posts.json";
import PostItem from "./post-item";

const PostList = () => {
    return (<div className="list-group">
        {Posts.map(post => {
            return (<PostItem post={post} key={post.handle_name}/>)
        })
        }</div>)
};
export default PostList;
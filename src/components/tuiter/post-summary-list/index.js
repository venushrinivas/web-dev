import React from "react";
import Posts from "./posts.json";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return (
        <div className="wd-content list-group">
            {Posts.map(post => {
                return <PostSummaryItem post={post} key={post.userName}/>
            })
            }
        </div>
    )
};
export default PostSummaryList;
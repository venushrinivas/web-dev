import React from "react";

const PostSummaryItem = ({
                             post = {
                                 topic: 'Web Development',
                                 userName: 'ReactJS',
                                 time: '2h',
                                 description: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
                                 image: '/tuiter/assets/images/react.png'
                             }
                         }) => {
    return (<a href="#" className="list-group-item list-group-item-action">
        <div className="wd-post">
            <div className="wd-flex-container">
                <div className="wd-width-80p">
                    <div className="wd-post-topic-new">
                        {post.topic}
                    </div>
                    <div className="wd-font-bold d-inline-block pe-1">
                        {post.userName}
                    </div>
                    <span className="fa-stack fa-1x wd-stack-correction wd-verified-override">
                        <i className="fas fa-circle fa-stack-1x"/>
                        <i className="fas fa-check fa-2xs fa-stack-1x fa-inverse color-black"/>
                    </span>
                    <label className="wd-post-topic-new ps-1">- {post.time}</label>
                    <div className="wd-font-bold">
                        {post.description}
                    </div>
                </div>
                <div className="wd-post-2-image mt-1">
                    <img src={post.image} height="100px" width="100px" alt=""/>
                </div>
            </div>
        </div>
    </a>)
}
export default PostSummaryItem;
import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../../tuit-stats";
const PostItem = ({
                      post = {
                          avatar: '/tuiter/assets/images/elon.png',
                          handle_name: 'Elon Musk',
                          user_name: '@elonmusk',
                          tuit: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                          stats: {
                              comment_count: 4100,
                              retweet_count: 3400,
                              like_count: 2000
                          }
                      }
                  }) => {

    const dispatch = useDispatch();
    const deleteTuitListener = (tuit) => {
        const action = {
            type: 'delete-tuit',
            tuit
        };
        dispatch(action);
    }
    return (<div className="list-group-item wd-border-bottom pt-3">
        <div className="d-flex">
            <div className="wd-avatar">
                <img src={post.avatar} height="48px" width="48px" alt=""/>
            </div>
            <div className="wd-post ps-3 wd-cursor-pointer w-100">
                <div className="wd-post-heading">
                    <div className="d-flex">
                        <div className="wd-handle-name">
                            <label className="pe-1">
                                {post.handle_name}
                            </label>
                            <span className="fa-stack fa-1x wd-stack-correction wd-verified-override pb-1"> <i
                                className="fas fa-certificate fa-stack-1x"/> <i
                                className="fas fa-check fa-2xs fa-stack-1x fa-inverse "/> </span>
                        </div>
                        <div className="wd-gray-text ps-1">
                            {post.user_name}
                        </div>
                        <div onClick={() => {deleteTuitListener(post)}} className="wd-margin-left-auto">
                            <i className="fas fa-times"/>
                        </div>
                    </div>
                </div>
                {post.tuit}
                {post.attachment ?
                    <div className="mt-2">
                        {post.attachment.video ?
                            <iframe className="wd-curve" width="100%" height="300" frameBorder="0"
                                    src={"https://www.youtube.com/embed/"+post.attachment.video} allowFullScreen>
                            </iframe> : <img className='wd-post-image wd-curve'
                            src={post.attachment.image} width="100%" alt=""/>
                        }
                    </div>
                    : ''}

                <div className="d-flex pt-2 ps-1">
                    <div className="w-25 wd-color-white">
                        <a className="text-decoration-none" href="#">
                            <i className="far fa-comment pe-2"/>
                            {post.stats.comment_count}
                        </a>
                    </div>
                    <div className="w-25 wd-color-white">
                        <a className="text-decoration-none" href="#">
                            <i className="fas fa-retweet pe-2"/>
                            {post.stats.retweet_count}
                        </a>
                    </div>
                    <div className="w-25 wd-color-white">
                        <TuitStats tuit={post}/>
                    </div>
                    <div className="w-25 wd-color-white">
                        <a className="text-decoration-none" href="#">
                            <i className="fas fa-share pe-2"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
export default PostItem;
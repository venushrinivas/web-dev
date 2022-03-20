const PostItem = (post) => {
    return (`
                    <div class="list-group-item wd-border-bottom pt-3">
                        <div class="d-flex">
                            <div class="wd-avatar">
                                <img src="${post.avatar}" height="48px" width="48px" alt=""/>
                            </div>
                            <div class="wd-post ps-3 wd-cursor-pointer">
                                <div class="wd-post-heading">
                                    <div class="d-flex">
                                        <div class="wd-handle-name">
                                            ${post.handle_name}
                                            <span class="fa-stack fa-1x wd-stack-correction wd-verified-override pb-1"> <i class="fas fa-certificate fa-stack-1x"></i> <i class="fas fa-check fa-2xs fa-stack-1x fa-inverse "></i> </span>
                                        </div>
                                        <div class="wd-gray-text ps-1">
                                            ${post.user_name}
                                        </div>
                                        <div class="wd-gray-text ps-1 pe-1 position-relative">
                                            •
                                        </div>
                                        <div class="wd-gray-text ps-1 pe-1">
                                            ${post.time}
                                        </div>
                                        <div class="wd-gray-text wd-margin-left-auto">
                                            <i class="fas fa-ellipsis-h "></i>
                                        </div>
                                    </div>
                                </div>
                                ${post.sub_heading}
                                <div class="wd-post-content mt-2">
                                    <img class="wd-post-image ${post.image_heading ? '' : 'wd-bottom-curve'}" src="${post.image_url}" width="100%" alt=""/>
                                    ${post.image_heading ? `<div class="p-2">
                                        ${post.image_heading}
                                        <div class="wd-gray-text">
                                            ${post.image_sub_heading}
                                        </div>
                                        <div class="wd-gray-text ">
                                            <a class="text-decoration-none" href="${post.post_url}" target="_blank">
                                                <i class="fas fa-link"></i>
                                                ${post.post_url_name}
                                            </a>
                                        </div>
                                    </div>` : ''}
                                </div>
                                <div class="d-flex pt-2 ps-1">
                                    <div class="w-25 wd-gray-text">
                                        <a class="text-decoration-none" href="#">
                                            <i class="far fa-comment pe-2"></i>
                                            ${post.comment_count}
                                        </a>
                                    </div>
                                    <div class="w-25 wd-gray-text">
                                        <a class="text-decoration-none" href="#">
                                            <i class="fas fa-retweet pe-2"></i>
                                            ${post.retweet_count}
                                        </a>
                                    </div>
                                    <div class="w-25 wd-gray-text">
                                        <a class="text-decoration-none" href="#">
                                            <i class="far fa-heart pe-2"></i>
                                            ${post.like_count}
                                        </a>
                                    </div>
                                    <div class="w-25 wd-gray-text">
                                        <a class="text-decoration-none" href="#">
                                            <i class="fas fa-share pe-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`);
}
export default PostItem;
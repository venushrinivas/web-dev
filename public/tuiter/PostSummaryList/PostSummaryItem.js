const PostSummaryItem = (post) => {
    return (`
        <a href="#" class="list-group-item list-group-item-action">
            <div class="wd-post">
                <div class="wd-flex-container">
                    <div class="wd-width-80p">
                        <div class="wd-post-topic-new">
                            ${post.topic}
                        </div>
                        <div class="wd-font-bold d-inline-block">
                            ${post.userName}
                        </div>
                        <span class="fa-stack fa-1x wd-stack-correction wd-verified-override">
                        <i class="fas fa-circle fa-stack-1x"></i>
                        <i class="fas fa-check fa-2xs fa-stack-1x fa-inverse color-black"></i>
                    </span>
                        <label class="wd-post-topic-new">- ${post.time}</label>
                        <div class="wd-font-bold">
                            ${post.description}
                        </div>
                    </div>
                    <div class="wd-post-2-image mt-1">
                        <img src="${post.image}" height="100px" width="100px" alt=""/>
                    </div>
                </div>
            </div>
        </a>
    `)
}
export default PostSummaryItem;
import PostSummaryItem from './PostSummaryItem.js';
import Posts from './posts.js';
const PostSummaryList = () => {
    return (`
        <div class="wd-content">
            ${Posts.map(post=>{
                return PostSummaryItem(post);
            }).join('')
            }
        </div>
    `)
}
export default PostSummaryList;
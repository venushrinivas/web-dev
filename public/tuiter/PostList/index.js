import postItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () => {
    return (`<div class="list-group">
        ${posts.map(post => {
        return postItem(post);
    }).join('')
    }</div>`)
}
export default PostList;
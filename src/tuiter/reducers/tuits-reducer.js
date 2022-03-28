import tuits from '../data/posts.json';

const TuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case 'create-tuit':
            const newTuit = {
                tuit: action.tuit,
                avatar: '/tuiter/assets/images/elon.png',
                _id: (new Date()).getTime() + '',
                handle_name: 'Elon Musk',
                user_name: '@elonmusk',
                stats: {
                    comment_count: 4100,
                    retweet_count: 3400,
                    like_count: 2000
                }
            }

            return [newTuit,...state];
        case 'delete-tuit':
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case 'like-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.stats.liked) {
                        tuit.stats.liked = false;
                        tuit.stats.like_count--;
                    }
                    else {
                        tuit.stats.liked = true;
                        tuit.stats.like_count++;
                    }
                }
                return tuit;
            });
        default: return state;
    }
}
export default TuitsReducer;
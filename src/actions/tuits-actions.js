import * as service from '../services/tuits-service';

export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';

export const createTuit = async (dispatch, tuit) => {
    const newTuit = {
        tuit: tuit,
        avatar: '/tuiter/assets/images/elon.png',
        verified: false,
        time: 'now',
        handle_name: 'Elon Musk',
        user_name: 'elonmusk',
        stats: {
            comment_count: 0,
            retweet_count: 0,
            like_count: 0,
            unlike_count: 0,
            liked: false
        }
    }
    tuit = await service.createTuit(newTuit);
    dispatch({
        type: CREATE_TUIT, tuit
    });
}

export const getTuits = async (dispatch) => {
    const tuits = await service.getTuits();
    dispatch({
        type: FIND_ALL_TUITS, tuits
    });
}

export const updateTuit = async (dispatch, tuit) => {
    const response = await service.updateTuit(tuit);
    if(response.acknowledged) {
        dispatch({
            type: UPDATE_TUIT, tuit
        });
    }
}

export const deleteTuit = async (dispatch, tuit) => {
    const response = await service.deleteTuit(tuit);
    if(response.acknowledged) {
        dispatch({
            type: DELETE_TUIT, tuit
        })
    }
}
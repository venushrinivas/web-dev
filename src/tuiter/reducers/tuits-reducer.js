import {CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT} from "../../actions/tuits-actions";

const TuitsReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_TUIT:
            return [action.tuit,...state];
        case DELETE_TUIT:
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case UPDATE_TUIT:
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    return action.tuit;
                }
                return tuit;
            });
        case FIND_ALL_TUITS:
            return action.tuits;
        default: return state;
    }
}
export default TuitsReducer;
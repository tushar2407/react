import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';
export const Comments = (state = {
    errMEss: null,
    comments:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading:false, errMess:null, comments:action.payload}
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.data = new Date().toISOString();
            return {...state,comments:state.comments.concat(comment)};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading:false, errMess:action.payload, comments:[]};
            
        default:
            return state;
    }
}
// now go to mainComponent to make use of this action/reducer
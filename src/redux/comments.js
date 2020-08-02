import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';
export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.data = new Date().toISOString();
            //alert(comment.rating);
            alert(action.type);
            // alert(state.concat(comment).length);
            return state.concat(comment);
        default:
            return state;
    }
}
// now go to mainComponent to make use of this action/reducer
import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';
import {baseUrl} from '../shared/baseUrl';
// export const addComment = ( dishId, rating, author, comment ) => ({
//     type: ActionTypes.ADD_COMMENT,
//     payload: {
//         dishId: dishId,
//         rating: rating,
//         author:author,
//         comment:comment
//     }
// }); this was for temporary addition of comment
// now adding post comment
export const addComment = ( comment ) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = ( dishId, rating, author, comment) => (dispatch) =>{
    const newComment = {
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
    newComment.date= new Date().toISOString();
    return fetch(baseUrl + 'comments',{
        method:'POST',
        body:JSON.stringify(newComment),
        headers:{
            'Content-type':'application/json',
            'credentials':'same-origin'
        },
    })
        .then(response => {
            if(response.ok)
                return response;
            else{
                var error=new Error("Error"+response.status+": "+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        })
        .then(response => response.json() )
        .then( response => dispatch(addComment(response)))
        .catch(error=>{ 
            console.log('Post comments ',error.message);
            alert("Comment not posted");
        });
};
export const addFeedback = (feedback) =>({
    type:ActionTypes.ADD_FEEDBACK,
    payload:feedback
});
export const alertFeedback = (feedback) => {
    alert('Thank you for your feedback!' + feedback);
};
export const postFeedback = ( feedback ) => (dispatch) =>{
    const newFeedback = {
        firstname:feedback.firstname,
        lastname:feedback.lastname,
        telnum:feedback.telnum,
        email:feedback.email,
        agree:feedback.agree,
        contactType:feedback.contactType,
        message:feedback.message
    }
    newFeedback.date= new Date().toISOString();
    return fetch(baseUrl + 'feedback',{
        method:'POST',
        body:JSON.stringify(newFeedback),
        headers:{
            'Content-type':'application/json',
            'credentials':'same-origin'
        },
    })
        .then(response=>{
            if(response.ok){
                alert(response.body);
                return response;
            }
            else{
                var error=new Error("Error" + response.status+" : "+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response=> dispatch(addFeedback(feedback)))
        .then(feedback => {console.log('Thank you for your feedback!', JSON.stringify(feedback.payload));
            alert('Thank you for your feedback!' + JSON.stringify(feedback.payload))
        })
        .catch(error =>{
            console.log("Post feedback ",error.message);
            alert("Feedback not posted");
        });
}
/**
 * Below are all action creator functions
 */
// when 2 arrow funcitons are used then the after the second arrow
// it is called an inner function
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    // setTimeout(()=> {
    //     dispatch(addDishes(DISHES));
    // }, 2000);
    // now communicating with the server
    return fetch(baseUrl+"dishes")
        .then(response =>{
            if ( response.ok ) {
                return response;
            }
            else{ // when server replies with an error
                var error=new Error("Error" + response.status+": "+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error =>{   // when no response from server
            var errmess= new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
}
export const fetchComments = ()=> (dispatch) => {
    return fetch(baseUrl+"comments")
        .then(response => {
            if(response.ok)
                return response;
            else{
                var error=new Error("error"+response.status+": "+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=> {
            var errmess=new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error=>{
            dispatch(commentsFailed(error.message))
        });
}
// dispatch is necessary to update the state of the app
export const dishesLoading= () => ({
    type: ActionTypes.DISHES_LOADING
});
// function that returns an action object
export const dishesFailed = (errmess) =>({
    type: ActionTypes.DISHES_FAILED,
    payload : errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
export const commentsFailed = (errmess) =>({
    type: ActionTypes.COMMENTS_FAILED,
    payload : errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));
    return fetch(baseUrl+"leaders")
        .then(response=>{
            if(response.ok)
                return response;
            else{
                var error= new Error("error"+response.status+" : "+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error => {
            var errmess= new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error=>{
            dispatch(leadersFailed(error.message));
        });
}

export const leadersLoading= () => ({
    type: ActionTypes.LEADERS_LOADING
});
// function that returns an action object
export const leadersFailed = (errmess) =>({
    type: ActionTypes.LEADERS_FAILED,
    payload : errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    return fetch(baseUrl+"promotions")
        .then(response =>{
            if(response.ok)
                return response;
            else{
                var error=new Error("Error"+response.status+": "+response.statusText);
                error.response=response;
                throw error;
            }
        }, 
        error=>{
            var errmess=new Error(error.message)
            throw errmess;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error=>{
            dispatch(promosFailed(error.message));
        });
}

export const promosLoading= () => ({
    type: ActionTypes.PROMOS_LOADING
});
// function that returns an action object
export const promosFailed = (errmess) =>({
    type: ActionTypes.PROMOS_FAILED,
    payload : errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
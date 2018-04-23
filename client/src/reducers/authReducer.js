import {FETCH_USER} from "../actions/types";

export default function(state=null,action){
    switch(action.type){
        case FETCH_USER:
            return action.payload || false; //actual user model. if logout/not a current user, return false
        default:
            return state; //request sent
    }
}
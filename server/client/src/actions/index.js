import axios from 'axios';
import { FETCH_USER } from './types'

export const fetchUser = () =>
    /*return function(dispatch){
        fetch('/api/current_user')
            .then(res => dispatch({  //action(object)
                type: FETCH_USER,
                payload: res.data
            }
        ));
    };*/
    async dispatch => {
        const res = await axios.get(`/api/current_user`);
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });
    };

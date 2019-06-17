import axios from 'axios';
import { generateListOfUsers } from './../service'

export const USER_ADDED = 'USER_ADDED';
export const USER_LIST_FETCHED = 'USER_LIST_FETCHED';
export const USER_DELETED = 'USER_DELETED';
export const USER_EDIT_SUCCESS = 'USER_EDIT_SUCCESS';
export const USER_SELECTED = 'USER_SELECTED';

export const addUser = (userData) => {
    return {
        type: USER_ADDED,
        payload: userData
    }
}

export const deleteUser = (userData) => {
    return {
        type: USER_DELETED,
        payload: userData
    }
}



export const editUser = (userData) => {
    return {
        type: USER_SELECTED,
        payload: userData
    }
}

export const saveEditedUserData = (userData) => {
    return {
        type: USER_EDIT_SUCCESS,
        payload: userData
    }
}

export const fetchUsersList = () => {
    console.log("calling fetch fetchUsersList")
    /* return (dispatch) => {
        console.log("dispatch: ", dispatch);
        axios.get('https://s3.amazonaws.com/jquerytestcsscorp/movies-in-theaters.json')
        .then(function (response) {
            console.log(response);
            dispatch( {
                type: MOVIES_DATA_FETCHED,
                payload: response.data
            })
        })
        .catch(function (error) {
            console.log("error: ", error);
        });

    } */
    return {
        type: USER_LIST_FETCHED,
        payload: generateListOfUsers()
    }
}





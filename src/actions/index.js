import axios from 'axios';
import { generateListOfUsers } from './../service'

export const USER_ADDED = 'USER_ADDED';
export const USER_LIST_FETCHED = 'USER_LIST_FETCHED';
export const USER_DELETED = 'USER_DELETED';
export const USER_EDIT_SUCCESS = 'USER_EDIT_SUCCESS';
export const USER_SELECTED = 'USER_SELECTED';

const MODE = 'ONLINE';
//const BASE_URL = 'http://localhost:3100'
const BASE_URL = 'http://localhost:8080'

export const addUser = (userData) => {
    
    if(MODE == "ONLINE")
    {

        return (dispatch) => {
            delete userData.id;
            axios.post(BASE_URL + '/employees', userData)
                .then(function (response) {
                    dispatch( {
                        type: USER_ADDED,
                        payload: response.data
                    })
                })
                .catch(function (error) {
                    console.log("error: ", error);
                }
            );
        }
    }
    else
    {
        return {
            type: USER_ADDED,
            payload: userData
        }
    }
}

export const deleteUser = (userData) => {
    if(MODE == "ONLINE")
    {
        return (dispatch) => {
            axios.delete(BASE_URL + '/employees/' + userData.id)
                .then(function (response) {
                    
                    dispatch( {
                        type: USER_DELETED,
                        payload: userData
                    })

                })
                .catch(function (error) {
                    console.log("error: ", error);
                }
            );
        }
    }
    else
    {
        return {
            type: USER_DELETED,
            payload: userData
        }
    }
}



export const editUser = (userData) => {
    return {
        type: USER_SELECTED,
        payload: userData
    }
}

export const saveEditedUserData = (userData) => {
    if(MODE == "ONLINE")
    {
        return (dispatch) => {
            
            axios.put(BASE_URL + '/employees/' + userData.id, userData)
                .then(function (response) {
                    
                    dispatch( {
                        type: USER_EDIT_SUCCESS,
                        payload: userData
                    })
                })
                .catch(function (error) {
                    console.log("error: ", error);
                }
            )
        };
    }
    else
    {
        return {
            type: USER_EDIT_SUCCESS,
            payload: userData
        }
    }
}

export const fetchUsersList = () => {
    
    if(MODE == "ONLINE")
    {
        return (dispatch) => {
            
            axios.get(BASE_URL + '/employees')
            .then(function (response) {
                
                dispatch( {
                    type: USER_LIST_FETCHED,
                    payload: response.data
                })
            })
            .catch(function (error) {
                console.log("error: ", error);
            });
        } 
    }
    else
    {
        return {
            type: USER_LIST_FETCHED,
            payload: generateListOfUsers()
        }
    }    
    
}





import * as actions from '../actions'

const initialState = {
    users: [],
    selectedUser: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        country: "",
        phone: ""
    }
};

var getRandomUserId = function (){
    let id = "";
    let arr = "0123456789".split("");
    for(let i = 0; i < 8; i++)
    {
        id+=arr[Math.round(Math.random() * (arr.length - 1))]
    }
    return id;
}

export default function UserReducer(state = initialState, action) 
{
    let users = state.users;
    switch (action.type) {
        
        case actions.USER_ADDED:
            let newUserData = action.payload;
            
            newUserData.id = getRandomUserId();
            users.push(newUserData);
            return {...state, users: [].concat(users)};
            
        case actions.USER_SELECTED:
            return {...state, ...{selectedUser: action.payload}};

        case actions.USER_DELETED:
            
            if(users.indexOf(action.payload) > -1){
                users.splice(users.indexOf(action.payload), 1);
            }
            
            return {...state, users: [].concat(users)};
        
        case actions.USER_EDIT_SUCCESS:
            
            for (let i = 0; i < users.length; i++){
                if(users[i].id == action.payload.id)
                {
                    users[i] = action.payload;
                    break;
                }
            }
            return {...state, users: [].concat(users)};


        case actions.USER_LIST_FETCHED:
            
            return {...state, users: action.payload};

        default:
            return state
    }
}
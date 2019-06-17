import faker from 'faker';


let jobTitles = [];
let countries = [];

var i = 0; 

for(i = 0; i < 5; i++)
{
    jobTitles.push(
        faker.name.jobTitle()
    )
}

for(i = 0; i < 3; i++)
{
    countries.push(
        faker.address.country()
    )
}

const getRandomUserId = function (){
    let id = "";
    let arr = "0123456789".split("");
    for(let i = 0; i < 8; i++)
    {
        id+=arr[Math.round(Math.random() * (arr.length - 1))]
    }
    return id;
}

export const generateListOfUsers = function(numOfUsers){

    if(!numOfUsers){
        numOfUsers = 10;
    }

    let usersList = [];

    for(var i = 0; i < numOfUsers; i++){
        let user = generateRawUserData();
        user.id = getRandomUserId();
        usersList.push(user);
    }
    return usersList;
}


export const generateRawUserData = function(){
    let newState = {};
    newState.id = "";
    newState.firstName = faker.name.firstName();
    newState.lastName = faker.name.lastName();
    let email = faker.internet.email();
    newState.email = (newState.firstName + "." + newState.lastName + email.substr(email.indexOf("@"))).toLowerCase();
    newState.jobTitle = jobTitles[Math.round(Math.random() * jobTitles.length)];
    newState.country = countries[Math.round(Math.random() * countries.length)];
    newState.phone = faker.phone.phoneNumber("(###) ###-####");
    
    return newState;
}
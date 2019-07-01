import faker from 'faker';


let departments = ['Automotive', 'Beauty', 'Books', 'Camping & Fishing', 'Children Clothing', 'Clothing', 'Computers', 'Cosmetics', 'Decor', 'Device Repair', 'First Aid', 'Furniture', 'Games', 'Garden', 'Grocery', 'Jewelry', 'Movies', 'Music', 'Pharmacy', 'Phones & Tablets', 'Sports', 'Tools', 'Toys', 'Vitamins'];
let countries = [];
let jobTitles = [];
let genders = ['M', 'F'];
let salaryNumbers = [1,2, 3];
let years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
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
    newState.department = departments[Math.floor(Math.random() * departments.length)];
    newState.country = countries[Math.floor(Math.random() * countries.length)];
    newState.gender = genders[Math.floor(Math.random() * genders.length)];
    newState.salary = parseInt(salaryNumbers[Math.floor(Math.random() * salaryNumbers.length)] + faker.phone.phoneNumber("#####"));
    let monthIndex = Math.ceil(Math.random() * 11);
    let dayIndex = Math.ceil(Math.random() * 30);
    newState.hire_date = years[Math.floor(Math.random() * years.length)] + '-' + ((monthIndex < 10) ? '0' + monthIndex : monthIndex) + '-' + ((dayIndex < 9) ? '0' + dayIndex : dayIndex); 
    newState.region_id = Math.ceil(Math.random() * 6); 
    
    return newState;
}
//ES6 - Ecma Script 6
//var -> ES5
//let & const -> ES6
function summarizeUser(userName, userAge, userHasHobby){
    return 'Name is '+userName+', age is '+userAge+' & user has hoby: '+userHasHobby;
}

//anonymous function
const summarizeUser = function(userName, userAge, userHasHobby){
    return 'Name is '+userName+', age is '+userAge+' & user has hoby: '+userHasHobby;
}

//arrow functions
const summarizeUser = (userName, userAge, userHasHobby) => {
    return 'Name is '+userName+', age is '+userAge+' & user has hoby: '+userHasHobby;
};
//without return statement
const summarizeUser = (userName, userAge, userHasHobby) => 'Name is '+userName+', age is '+userAge+' & user has hoby: '+userHasHobby;

const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
};

const addTwoNumbers2 = (num1, num2) => num1 + num2;
console.log(addTwoNumbers2(10,12));

const emptyFunc = () => { return 'Hello';}
const emptyFunc1 = () => 'Hello';

console.log(emptyFunc1());



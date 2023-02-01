const person = {
    Name: 'Michael Scott',
    age: 45,
    address: '204 Austin ave',
    ip: '104.105.1.2',
    greet(){
        return 'Hello '+this.Name;
    }
};
//spread operator
//spread operator on object
const personCopy = {...person};
// console.log(personCopy);

//spread operator on array
const hobbies = ['Cricket', 'football'];
const hobbies2 = ['Dancing',...hobbies,'Swimming'];
// console.log(hobbies2);


//rest operator
const arrayConverter = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

const arrayConverter2 = (...args) => {
    return args;
};
// console.log(arrayConverter2(10,12,25,100,21));

// const userName = person.Name;
// const userAge = person.age;
//destructuring
const {Name, address} = person;
// console.log(`The username is ${Name} and his address is ${address}`);

//__________________________________________________________
//Async code

// Callback: Whenever we call another function inside one function

console.log('Hello'); //sync

const fetchData = (callback) => {
    setTimeout(() => {
        callback('Done');
    }, 1500);
};


setTimeout(() => {
    console.log('Timer is done');
    fetchData((param) => {
        console.log(param);
    });
}, 2000);

console.log('Hi'); //sync


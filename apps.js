// 1. Data Type:
// String, Numbers, Boolean, Null, Undefine;
/* 
const Name = 'Jhon Smith';
const Number = 30; // or 3.99;
const BooleanData = true;
const NullData = null;
const Notdefined;

console.log(Name);
console.log(Number);
console.log(BooleanData);
console.log(NullData);
console.log(Notdefined);

//////////////////////////////////////
x = '10';
y = 10;
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);
*/

// 2. String Concatenation:
/*
const Name = 'Jhon Smith';
const Age = 30;

// Concatenation
console.log('My name is ' + Name + ' and i\'m ' + Age + ' years old!');

// Tamplate String
console.log(`My name is ${Name} and i'm ${Age} years old!`);
*/

// String:
/*
const s = 'Jhon Smith';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).length);
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));
console.log(s.split(' '));
*/

// 3. Arrays:
/*
const number = new Array(1, 2, 3, 4, 5);
console.log(number);

const fruits = ['Orange', 'Mango', 'Banana', 'Apple'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[0].length);


//////////////////////////////////////////////////
const color = ['White', 'Red', 'Blue', 'Orange'];
color[4] = 'Yellow';
console.log(color);

color.push('Dark');
console.log(color);

color.unshift('Pink');
console.log(color);

color.shift();
console.log(color);

console.log(color.indexOf('Blue'));

color.pop();
console.log(color);

console.log(Array.isArray(color));


//////////////////////////////////////////////////
const elements = ['jhon', 'lora', 40, 50.4, true, ['smith', 1, false]];

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}
*/

// 4. Objects:
/*
const person = {
    firstName: 'Jhon',
    lastName: 'Smith',
    Age: 30,
    hobbies: ['Music', 'Movies', 'Games'],
    isPassionate: true,
    // Nasted Object
    address: {
        street: '18/2 tallabagh',
        road: {
            firstDirection: 'newMarket road left',
            secondDirection: 'sobahanbgh road right',
            thirdDirection: 'rapa plaza top floor',
            optional: ['1st floor', '3rd floor', '8th floor']
        },
        city: 'Dhaka',
        state: 'BD'

    }
}

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.hobbies[1].length);

console.log(person.address.street);
console.log(person.address.road.firstDirection);
console.log(person.address.road.optional[1]);

//////////////////////////////////////////////////
const {
    firstName,
    lastName
} = person;

console.log(firstName, lastName);

/////////////////////////////////////////////////
person.fitness = 'Healthy';
console.log(person);

person.address.road.optional[3] = '9th floor';
person.address.road.optional.push('10th floor');
person.address.road.optional.pop();


/////////////////////////////////////////////////
const todos = [{
        name: 'Jhon Smith',
        id: 181400115,
        isCompleted: true
    },

    {
        name: 'Kathryn Lora',
        id: 181400116,
        isCompleted: true
    },

    {
        name: 'Henry Medona',
        id: 181400117,
        isCompleted: false
    }
];


const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

////////////////////////////////////////////
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].name);
    // console.log(todos[i].id);
    // console.log(todos[i].isCompleted);
}

////////////////////////////////////////////
for (let todo of todos) {
    console.log(todo.name);
    // console.log(todo.id);
    // console.log(todo.isCompleted);
}


// ForEach, Map, Filter:

//////////////////ForEach//////////////////////

todos.forEach(function (todo) {
    console.log(todo.name);
    // console.log(todo.id);
    // console.log(todo.isCompleted);
});
/////////////////// MAP ////////////////////////

const todoElement = todos.map(function (todo) {
    return todo.name;
    // return todo.id;
    // return todo.isCompleted;
});

console.log(todoElement);

/////////////////// Filter //////////////////////

const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted);

////////////////////////////////////////////////////
const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.name;
    // return todo.id;
    // return todo.isCompleted;
});

console.log(todoCompleted);

// 5. Loops:
/*
// For Loop:
for (let i = 0; i <= 10; i++) {
    console.log(i);
    //console.log('hello');
    //console.log(`Number: ${i}`);
}

//////////////////////////////////////////
// While Loops:

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

// 6. if, else if, else:

x = '10';
y = 10;
if (x === y) {
    console.log(`${x} is equal to ${y} because === shows the real Number`);
} else if (x == y) { // == In this expression string behaves like a Numbers
    console.log(`${x} is not equal to ${y} because x is a String y is a Number!`)
} else {
    console.log(`${x} is not equal to ${y}`);
}

/////////////////////////////////////////////////
x = 5;
y = 10;
if (x === y) {
    console.log(x + ' is Equal to ' + y);
} else if (x > y) {
    console.log(x + ' is Greater than to ' + y)
} else if (x < y) {
    console.log(x + ' is less than to ' + y);
} else {
    console.log('Invalid Syntax');
}
*/
/////////////////// Turnnary Operator ////////////////
/*
x = 10
const color = x > 20 ? 'red' : 'blue';
console.log(color);

switch (color) {
    case 'red':
        console.log('Color is Red');
        break;
    case 'blue':
        console.log('Color is Blue');
        break;
    default:
        console.log('Invalid Input');
}
*/

// 7. Function:
/*
function addNum(a = 1, b = 3) { // Default Arguement addNum(a = 1, b = 3)
    return a + b;
}

console.log(addNum(5, 3));

//////////////////////////////////////////////
const addNum = (a = 1, b = 1) => {
    return a + b;
}

console.log(addNum(5, 5));

///////////////////////////////////////////////
const addNum = (a, b) => console.log(a + b);

addNum(5, 5);
*/
//////////////////////////////////////////////
/*
function Person(firstName, lastName, dateOfbirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfbirth = dateOfbirth;
}

const person1 = new Person('Jhon', 'Smith', '09-feb-1994');
const person2 = new Person('Kathryn', 'Smith', '20-sep-1996');

console.log(person1);
console.log(person1.firstName);
console.log(person2);
console.log(person2.firstName);
*/
//////////////////////////////////////////////////////////
/*
function Person(firstName, lastName, dateOfbirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfbirth = new Date(dateOfbirth);

    this.getBirthYear = function () {
        return this.dateOfbirth.getFullYear();
    }
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
/*
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}
Person.prototype.getFullYear = function () {
    return this.dateOfbirth.getFullYear();
}

const person1 = new Person('Jhon', 'Smith', '9-3-1994');
const person2 = new Person('Kathryn', 'Smith', '6-8-1996');

console.log(person1.getBirthYear());
console.log(person1.getFullName());

// console.log(person1.getFullName());
// console.log(person2.getFullYear());
*/
////////////////////// Class ///////////////////////////////
/*
class Person {
    constructor(firstName, lastName, dateOfbirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfbirth = new Date(dateOfbirth);
    }


    getBirthYear() {
        return this.dateOfbirth.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


const person1 = new Person('Jhon', 'Smith', '9-3-1994');
const person2 = new Person('Kathryn', 'Smith', '6-8-1996');

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);
*/
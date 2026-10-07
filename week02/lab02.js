// Exercise 1
const greeter = (myArray, counter) => {
    for (const name of myArray) {
        console.log(`Hello ${name}`);
    }
};
console.log("==========");
console.log("Exercise 1");
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Exercise 2
const capitalize = (str) => {
    const [first, ...rest] = str;
    return first.toUpperCase() + rest.join('');
}
console.log("==========");
console.log("Exercise 2");
console.log(capitalize("fooBar"));
console.log(capitalize("nodeJS"));

// Exercise 3
const colors = ["red", "green", "blue"];
const capitalizedColors = colors.map(capitalize);

console.log("==========");
console.log("Exercise 3");
console.log(capitalizedColors);

// Exercise 4
const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log("==========");
console.log("Exercise 4");
console.log(filterLessThan20);

// Exercise 5
const value = [1,2,3,4];
const calculateSum = value.reduce(
    (acc, currentValue) => acc + currentValue,
        0
    );
const calculateProduct = value.reduce
    ((acc, currentValue) => acc * currentValue,
        1
    );
console.log("==========");
console.log("Exercise 5");
console.log(calculateSum);
console.log(calculateProduct);

// Exercise 6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
}
console.log("==========");
console.log("Exercise 6");
const mySedan = new Sedan("Honda Civic", 2024, 25000);
console.log(mySedan);
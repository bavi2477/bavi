// let arr = [1,2,3,4,5,6,7,8,9,10];

// console.log(...arr);

// // console.log(arr.pop());
// console.log(arr.length);

// arr.length = 5; //how to remove last 5 elements from array 

// console.log(...arr); // 1 2 3 4 5

// // how it is removing the five elemets.

class Pet{
    constructor(name, category = "dog", color = "white", age = 0) {
        this.petName = name;
        this.category = category;
        this.color = color;
        this.age = age;
    }
//getter
    get name() {
        return this.petName;
    }
//setter
    set name(name) {
        this.petName = name;
    }
} 

const myDog = new Pet("jackyyyy", "dog", "marron", 4);


console.log(myDog.name);

myDog.name = "Jack";

console.log(myDog.name);
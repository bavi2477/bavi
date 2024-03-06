class person {
    constructor(personName, personPlace, personJob) {
        this.name = personName;
        this.place = personPlace;
        this.job = personJob;
    }

    talk() {
        console.log("this ::::::", this);
        console.log(this.name , "is listening...");
    }
}

const person1 = new person("Bavithra", "Sivakasi", "Developer");

console.log(person1);

person1.talk();

const person2 = new person("Bavithra", "Sivakasi", "Developer");

console.log(person2);

person2.talk();

let arr = [];
for(let ind = 0 ; ind < 100; ind++) {
    arr.push(new person ("person " + (ind + 1), "place " + (ind + 1), "IT"));
}

console.log(arr);
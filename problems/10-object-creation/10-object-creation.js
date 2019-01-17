/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/
let student = {
    name: 'John',
    age: 22
}
function Student(name, age){
    this.name=name;
    this.age= age;
}
class StudentClass{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
}
let x = new Student('ConsName', 22);
let y = new StudentClass('ClassName', 22);
console.log(`object literal: ${student}
constructor: ${x}
class: ${y}`);
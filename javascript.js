// this 

// const person = {
//     name : "Mustafa",
//     fname: "Unal",
//     description : function() {
//         return this;
//     },
//     showName: function() {
//         return this.name
//     }
// }
// console.log(person.description())
// console.log(person.showName())

// Constructor

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
//   this.showInfos = function () {
//     console.log(this.firstName, " ", this.lastName, " ", this.age);
//   };
// }

// const person1 = new Person("Ahmet", "Bay", 25, "Brown");
// person1.showInfos();
// console.log("Eye-color :", person1.eyeColor);
// console.log("Constructor :", person1);
// console.log("Function showInfos ():", person1.showInfos);

// class Person {
//   constructor(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
//     showInfos () {
//       console.log(this.firstName, " ", this.lastName, " ", this.age);
//     };
  
// }
// const person2 = new Person("Ahmet", "Bay", 25, "Brown");
// person2.showInfos();
// console.log("Eye-color :", person2.eyeColor);
// console.log("Constructor 2 :", person2);
// console.log("Function showInfos ():", person2.showInfos);

// class Car {
//     constructor (name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     age (x) {
//         return x-this.year
//     }
// }

// let date = new Date();
// let year = date.getFullYear();
// let myCar = new Car("Tesla", 2020)
// console.log(myCar.name," ", myCar.year, " ", myCar.age(year))

// Arrow  fuction ( =>)
// let hello;
// hello = function() {
//     return "Hello World"
// }
// console.log(hello())

// hello = (value) => "Hello World" + value


// console.log(hello(" and Turkey"))

// let sayi = 1;
// let sayi2 = sayi
// sayi2++;
// console.log(sayi, '-', sayi2)

// const person = {
//     firstName: "ahmet",
//     lastName: "can"
// }
// // (array için de geçerlidir)
// const x = person ;
// x.firstName = "mehmet"
// console.log(person)
// console.log(x)

// Since the array and objects reference type;
// changes in its efects each other,

// person = {firstName:"mehmet"}

// const person = {
//     firstName: "ahmet",
//     lastName: "can"
// }

// // delete person.firstName; 
// // delete person.lastName;
// console.log(person)
// console.log(Object.values(person))
// //  values() returns the values as an array
// console.log(Object.keys(person))
// //  keys() returns the properties as an array
// console.log(Object.entries(person))
// //  entries() returns the properties as an array
// console.log(Object.entries(person)[1][1])
// console.log(Object.entries(person)[1])

// functions
// function myFunction(x,y) {
//     if (y === undefined) {
//         y=2;
//     }
//     return x+y
// }
// console.log(myFunction(5,8))

//  takes value as adefoult if it is not send in function
// function myFunction(x=3,y=2) {
//         return x+y
// }
// console.log(myFunction(5))
// console.log(myFunction(5, 8))
// console.log(myFunction())

// rest parameter

// function total(...args) {
//     let sum = 0;
//     for (let arg of args){
//        sum += arg
//     }
//     return sum
// }

// console.log(total(20, 11));

// self invoke

// function self() {
//     console.log("Hello")
// }
// self()

// self = () => console.log("Hello Turkey")

// self()

// (function self() {
//     console.log("Hello")
// })();


// (self = () => console.log("Hello Turkey"))()

// class detail, static fuction

// class Car {
//     constructor(name){
//         this.name = name
//     }
//     hello() { console.log("Hello Turkey")}

//     hello1 = (x) => console.log(x+ " ", "Hello Arrow")

//     static hello2() {console.log("Hello Static")}
// }

// let car1 = new Car ("Ford")
// console.log(car1);
// car1.hello();
// car1.hello1("From")
// Car.hello2()

// class inheritance

// class Person{
//     constructor(name, age) {
//         this.name=name;
//         this.age =age;
//     }
//     showInfos(){
//         console.log(`"Name :", ${this.name}, " Age :", ${this.age} `)
//     }
// }

// class Employee extends Person{
//     constructor(name, age, salary){
//         super(name,age) // Since it inherit from Person
//         this.salary=salary;
//     }
//     // Override on showInfos() in  class Person
//     showInfos(){
//         console.log(`"Name :", ${this.name}, " Age :", ${this.age}, "Salary :", ${this.salary} `)
//     }
// }

// const emp = new Employee("Mustafa", 23, 2500)
// console.log(emp)

// emp.showInfos()


// callback

// function display(message) {
//     console.log("Display :", message)
// }

// function first() {
//     display("Hello Display")
// }
// function second() {
//     display("Good By Display")
// }
// first()
// second()

// function display(some){
//     console.log(some)
// }
// function calc(num1, num2){
//     let sum = num1+num2
//     display(sum)
// }
// calc(5,7)


// function display(some){
//     console.log(some)
// }
// function calc(num1, num2, myCallback = ()=>{}){
//     let sum = num1+num2
//     myCallback(sum)
//     return sum
// }
// calc(9,8,display)

// let val;

// function multiplyByTwo(a,b,c, callback) {
//     let arr =[];
//     for (let i=0; i<3; i++){
//         arr[i] = callback(arguments[i]*2);
//         console.log(i, " ", arguments[i])
//     }
//     return arr;
// }

// // function addOne(a){
// //     return a+1;
// // }
// addOne = (a) => a+5;


// val = multiplyByTwo(10,20,30, addOne);

// for (let i=0; i<val.length;i++ ){
//     val[i]=addOne(val[i]);
// }

// console.log(val)


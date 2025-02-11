// variable
// var x=30;
// var y;
// var x=50;
// var num1=10;
// var my_num=10;
// var $num1=12;
// {
//     var myVar=10;
//     let myLet=30;
// }
// let x=10;
// x=20;
// const birthday=20;

// Loosely Type or Dynamic Type Language
// Data types | type juggling
// var myNum;
// typeof myNum;
// myNum=10;
// typeof myNum;
// myNum="hi there";
// typeof myNum;

// String
// let greet="Hello World!";
// console.log(greet);
// let myName="ShinAh";
// console.log(myName);
// let myAge='My age is 20.';
// console.log(myAge);
// let sayHi=`Hi there ${myName}.`;
// let sayHi="Hi there "+myName+".";
// console.log(sayHi);
// let time='3 o\'clock.';
// console.log(time);
// let myHeight="5\" 8'";
// let myHeight='5" 8\'';
// let myHeight=`5" 8'`;
// console.log(myHeight);

// Number
// let myNum=10;
// let myAnotherNum=20;
// let myFloat=20.121;
// console.log(myFloat);

// Boolean
// let myVar=false;
// console.log(myVar);

// Boolean function (Global function) | falsy values : 0, "", null, undefined, NaN, false
// let myName="ShinAh";
// console.log(Boolean(myName));
// let myVar=Boolean("");
// console.log(myVar);
// let x;
// console.log(Boolean(x));
// let y=null;
// console.log(Boolean(y));
// let num1;
// let num2=1;
// console.log(num1+num2); //NaN

// Expression | value 1 khu pyn ya
// 1+2;
// "a"+"b";
// 5-1;

// Statement | expression tway por muu ti pyee tot nout htet lote ya mae a lote tway ko that mat pay lite p so yin statement | undefined pyn ya
// let sum=1+2; //statement

// Operator | arithmetic, assignment, comparison, logical
// Arithmetic Operators | +, -, *, /, %
// let z="a"+"b";
// let z=3+2;
// let z=3+"b"; //string+number=string
// let z="4"+undefined; //string ko br ne paung paung string
// console.log(z);

// let z=5-2;
// let z="5"-"2";
// let z="a"-"b"; //NaN
// let z="5"-2;
// let z="a"-2; //NaN
// let z="3"-null; //3
// console.log(z);

// let x=2*3;
// console.log(x);

// Exponential
// console.log(2**4); //2 power 4 | 2*2*2*2

// let bread=3;
// // bread+=4; //bread=bread+4; //7
// bread-=1; //bread=bread-1; //2
// console.log(bread);
// let a=4;
// // a*=2; //a=a*2; //8
// // a/=2; //a=a/2; //2
// a%=2; //a=a%2; //0
// console.log(a);

// let x=4/2;
// let x=4%2;
// console.log(x);

// Assignment Operators | =
// let a,b,c=0; //let a; let b; let c=0; | a,b(undefined)
// console.log(a);

// Operator precedence
// 21. ()
// 15. * / % (left-to-right)
// 14. + - (left-to-right)
// 3. = (right-to-left)
// let b=(10+6-2*4)/5;
// console.log(b);

// Comparison Operators | >, <, >=, <=, ==, ===, !=, !== | boolean pyan pay

// Logical Operators | !(Not), &&(And), ||(Or)
// console.log(!false);
// console.log(!(5>2));
// let a=true;
// console.log(!a);
// let num=1;
// console.log(num>0 && num==1); //true && true => true
// console.log(num>4 && num==1); //false && true => false
// let num=1;
// console.log(num>4 || num==1); //false || true => true

// Functions
// function shopping(product){
//     console.log("Go to shop.");
//     console.log("Buy a "+product+".");
//     console.log("Go back home.");
// }
// shopping("pen");
// shopping("pencil");

// function add(num1,num2){
//     console.log(num1+num2);
// }
// add(1,2);

// function add(num1,num2){
//     return num1+num2;
// }
// // console.log(add(1,2));
// let result=add(1,2);
// console.log(result);

// function sayName(){
//     console.log("ShinAh");
// }
// sayName();
// function sayName(name){
//     console.log(name);
// }
// sayName("ShinAh");

// function sayName(name,age){
//     console.log(name,age);
// }
// sayName("ShinAh", 24);

// function sayName(name,age){
//     return name;
// }
// let test=sayName("ShinAh", 24);
// console.log(test);

// function sayName(name,age){
//     return "hi";
// }
// let test=sayName("ShinAh", 24);
// console.log(test);

// function sayName(name){
//     // some work
// }
// let test=sayName("ShinAh");
// console.log(test); //undefined

// Homework
// function calculateAge(birthYear){
//     let age=2025-birthYear;
//     console.log(age);
// }
// calculateAge(2000);

// Default parameter
// function add(a,b){ //a=2,b=undefined
//     console.log(a+b); //NaN
// }
// add(2);
// function add(a,b=0){ //a=2,b=0
//     console.log(a+b);
// }
// add(2);

// Rest parameter
// function test(a,b,...c){ //a=1,b=2,c=[3,4,5]
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// test(1,2,3,4,5);

// function statement
// myName();
// function myName(){
//     console.log("ShinAh");
// }

// function expression
// 1+2; //expression
// let myName=function(){
//     console.log("ShinAh");
// };
// myName();

// Callback function
// function sayMyName(name,fun){
//     fun();
//     console.log(name);
// }
// sayMyName("ShinAh", function(){
//     console.log("Hello!");
// });

// function sayMyName(name,fun){
//     fun("ShinAh");
// }
// sayMyName("No No", function(name){
//     console.log(name);
// });

// function sayMyName(name,fun){
//     let result=fun("ShinAh"); //ShinAh
//     console.log(result);
// }
// sayMyName("No No", function(name){
//     return name;
// });

// function sayMyName(name,fun){
//     let result=fun(name); //No No
//     console.log(result);
// }
// sayMyName("No No", function(name){
//     return name;
// });

// function twice(num,modifier){
//     let result=modifier(num)*2;
//     console.log(result);
// }
// twice(5, function(num){
//     return num+6;
// });

// Arrow function
// let sayHi=()=> console.log('Hi');
// sayHi();
// let sayHi=()=>{
//     let word='Hi';
//     console.log(word);
// }
// sayHi();

// let sayHi=()=> "Hi"; //let sayHi=()=> return "Hi"
// console.log(sayHi());

// let sayHi= word=> word; //let sayHi=(word)=> { return word; }
// console.log(sayHi("Hi")); //Hi

// let sayHi=(word,name)=> word+" "+name;
// console.log(sayHi("Hi","ShinAh"));

// let twice=num=> num*2;
// console.log(twice(5));

// Array
// Array object constructor
// let mixture=new Array('dog', 20, 1.3, true);
// console.log(mixture);
// console.log(mixture.length);

// Array literal
// let mixture=['dog', 20, 1.3, true];
// console.log(mixture);
// console.log(mixture[0]);

// let mixture=['dog', 20, 1.3, true];
// let bobo=mixture[0];
// mixture[4]="ShinAh";
// mixture[3]=false;
// console.log(mixture);
// console.log(bobo);

// let fruits=['apple', 'orange'];
// fruits[2]="mango";
// console.log(fruits[fruits.length-1]);

// Nested Array
// let arr=[
//     ['a', 'b', 'c'],
//     [1, 2, 3]
// ]
// console.log(arr);
// console.log(arr[0][2]);

// let arr=[
//     ['a', 'b', 'c'],
//     [1, 2, 3]
// ]
// arr[0][2]="d";
// console.log(arr);

// Spread Operator
// let data1=[1,2,3];
// let data2=[4,5,6];
// let result=[...data1,...data2];
// console.log(result);

// function add(a,b){
//     console.log(a+b);
// }
// let nums=[1,2];
// add(...nums);

// destructuring
// let datas=['ShinAh', 24, 'KMD'];
// let [name, age, school]=datas;
// console.log(name, age, school);

// function add([a,b]){
//     console.log(a+b);
// }
// add([1,2]);

// Array Methods
// let animals=['cat','dog','lion'];
// animals.push('bird');
// animals.pop();
// animals.unshift('bird');
// animals.shift();
// console.log(animals);

// let index=animals.indexOf('dog'); //return pyn
// console.log(index);

// let string=animals.join('-'); //default ',' | return pyn
// console.log(string);

// animals.splice(0,2);
// console.log(animals);

// let nums=[1,2,3,4,5];
// nums=nums.map((num)=>{ //[101,102,103,104,105]
//     return num+100;
// })
// console.log(nums);

// let names=['John', 'Chris', 'Mg Mg'];
// names=names.map((name)=>{
//     return "Mrs "+name
// })
// console.log(names);

// let nums=[1,2,3,4,5,6];
// nums=nums.filter((num)=>{
//     // return num%2===0;
//     // return num%3===0;
//     return num!=3;
// })
// console.log(nums);

// let nums=[1,2,3,4,5,6];
// let result=nums.reduce((prev,current)=>{
//     return prev+current;
// })
// console.log(result);

// Basic refactoring concept
// let nums=[1,2,3,4,5,6];

// let newArr=nums.map(num=> num+100);
// console.log(newArr);

// let failteredNumbers=nums.filter(num=> num%2===0);
// console.log(failteredNumbers);

// let result=nums.reduce((prev,current)=> prev+current);
// console.log(result);

// Everything is an object
// let str=new String('Hello'); //let str='Hello';
// console.log(typeof str);
// console.log(str.length);
// console.log(str[4]);

// let str1='hello';
// str1=str1.toUpperCase();
// console.log(str1);

// let str2='HELLO';
// str2=str2.toLowerCase();
// console.log(str2);

// let str3=' Hello ';
// str3=str3.trim();
// console.log(str3);

// let str="hello world again";
// str.split(" ");
// console.log(str);

// let num=new Number(12.6);
// console.log(typeof num);
// num=num.toFixed()
// console.log(num);

// let bool=new Boolean(true);
// console.log(typeof bool);
// bool=bool.toString();
// console.log(typeof bool);

// Object
// Properties
// let person={
//     name: 'ShinAh', //key value pair | 'name': 'ShinAh'
//     age: 24
// }
// console.log(person.name); //dot notation

// console.log(person['age']); //bracket notation
// let propName='age';
// console.log(person[propName]);

// person.name='No No';
// person.hairColor='black';
// console.log(person);

// Methods
// let person={
//     name: 'ShinAh',
//     eat: function(){
//         console.log("Person is eating.");
//     }
// }
// person.eat();

// person.drink=function(){
//     console.log("Person is drinking.");
// }
// console.log(person);

// let person={
//     name: 'ShinAh',
//     eat(){
//         console.log("Person is eating.");
//     }
// }
// person.eat();

// window object

// setTimeout function
// setTimeout(()=> {
//     console.log("i'm callback");
// }, 3000);

// console.log(window);

// this
// 1. method => method's object
// 2. regular function => window object
// 3. arrow function => parent's this (lexical scoping)

// 1
// let person= {
//     name: 'ShinAh',
//     eat(){
//         console.log(this.name+' is eating.');
//     }
// }
// person.eat();

// 2
// function test(){
//     console.log(this); //window
// }

// 2
// let person= {
//     name: 'ShinAh',
//     eat(){
//         setTimeout(function(){
//             console.log(this);
//         }, 3000);
//     }
// }
// person.eat();

// 3
// console.log(this); //parent
// let person= {
//     name: 'ShinAh',
//     eat:()=>{
//         //child
//         console.log(this);
//     }
// }
// person.eat();

// 3
// console.log(this); //parent
// let person= {
//     name: 'ShinAh',
//     eat:()=> {
//         //parent
//         setTimeout(()=>{
//             //child
//             console.log(this);
//         }, 3000);
//     }
// }
// person.eat();

// Object spread operator
// let obj1={
//     myName: 'ShinAh',
//     myAge: 24
// }

// let obj2={
//     myHairColor: 'black'
// }

// let obj3={
//     ...obj1,
//     ...obj2
// }
// console.log(obj3);

// Object destructuring
// let {name, age} ={
//     name: 'ShinAh',
//     age: 24
// }
// console.log(name, age);

// Property shorthand
// let name='ShinAh';
// let age=24;
// let person={
//     name, //name: name
//     age //age: age
// }
// console.log(person);

// Javascript data structure
// let people= [
//     {
//         name: 'shinah',
//         age: 24,
//         gender: 'female'
//     },
//     {
//         name: 'yona',
//         age: 16,
//         gender: 'female'
//     },
//     {
//         name: 'hok son',
//         age: 18,
//         gender: 'male'
//     }
// ]
// console.log(people);

// let names= people.map(person=>  {
//     return person.name;
// });
// console.log(names);

// let filteredArray= people.filter(person=> {
//     return person.gender === 'male';
//     // return person.age < 20;
// });
// console.log(filteredArray);

// let searchKeyword= prompt("Search person: ");
// let filteredArray= people.filter(person=> {
//     return person.name.includes(searchKeyword);
// });
// console.log(filteredArray);

// JSON
// let person='{"name": "ShinAh",}'
// data types | string, number, boolean, Array, object, null

// let person='{"name": "ShinAh", "age": 24}'
// let obj= JSON.parse(person);
// console.log(obj.name);

// let person= {
//     "name": "ShinAh", "age": 24
// }
// let obj= JSON.stringify(person);
// console.log(obj);

// conditions (if else statement)
// let tired=prompt("are you tired? (yes/no) :");
// if(tired==='yes')
//     console.log("rest well");
// else if(tired==='no')
//     console.log("go back to work");
// else
//     console.log("please enter yes or no");

// let product_prices= [100, 500, 100, 300, 700, 200, 100];
// product_prices= product_prices.map((price)=>{
//     if(price===100)
//         price-=30;
//     return price;
// })
// console.log(product_prices);

// let people= [
//     {name: 'ShinAh', age: 24},
//     {name: 'Yona', age: 16, gender: 'f'},
//     {name: 'Hok Son', age: 18, gender: 'm'}
// ]
// people= people.map((person)=> {
//     if(person.gender === 'f')
//         person.gender='Female';
//     else if(person.gender === 'm')
//         person.gender='Male';
//     else
//         person.gender='Unknown';
//     return person;
// })
// console.log(people);

// if else expression (ternary operator)
// let age= 24;

// let permission;
// if(age>18){
//     permission="authorized";
// }
// else{
//     permission="unauthorized";
// }
// console.log(permission);

// let permission= age > 18? "authorized" : "unauthorized"; //condition? work(if true) : work(if false);
// console.log(permission);

//switch statement
// switch(2) {
//     case 1:
//         console.log("one");
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//         console.log("three");
// }

// let people= [
//     {name: 'Hok Son', age: 18, gender: 'm'},
//     {name: 'ShinAh', age: 24},
//     {name: 'Yona', age: 16, gender: 'f'}
// ]
// people= people.map((person)=>{
//     switch(person.gender){
//         case 'm':
//             person.gender='Male';
//             break;
//         case 'f':
//             person.gender='Female';
//             break;
//         default:
//             person.gender='Unknown';
//     }
//     return person;
// })
// console.log(people);

// looping
// while loop
// let x=0;
// while(x<10) {
//     console.log("Hi");
//     x++;
// }

// let people= ['ShinAh', 'Yona', 'Hok Son', 'Su Won'];

// console.log(people[0]);
// console.log(people[1]);
// console.log(people[2]);
// console.log(people[3]);

// let x=0;
// while(x<people.length) {
//     console.log(people[x]);
//     x++;
// }

//do while loop
// while(true) { //condition a yin sit
//     console.log("work");
// }

// do {
//     console.log("work"); //a lote a yin lote
// } while(false);

// let x=0;
// do {
//     console.log('work'+x);
//     x++;
// } while(x<5);

// for loop
// for(let x=0; x<5; x++) {
//     console.log('Hello '+x);
// }

// let people= ['ShinAh', 'Yona', 'Hok Son', 'Su Won', 'Zeno'];
// for(let x=0; x<people.length; x++) {
//     console.log(people[x]);
// }

// for of loop | array ko loop pat yin thone
// let people= ['ShinAh', 'Yona', 'Hok Son', 'Su Won'];
// for(person of people) {
//     console.log(person);
// }

// for in loop | object ko loop pat yin thone
// let person= {
//     name: 'ShinAh',
//     age: 24
// }
// for(key in person) {
//     console.log(`${key} is ${person[key]}`); //template string
// }

// let people= ['ShinAh', 'Yona', 'Hok Son'];
// for(key in people) {
//     console.log(people[key]);
// }

// scoping
// let x=0; //global variable
// console.log(x);
// {
//     let y=10; //local variable
//     console.log(y);
//     console.log(x);
// }

//nested scope
// {
//     {
//         let z=100;
//         console.log(z);
//     }
// }

// OOP
// class Car{
//     wheels=4;
//     color="black";
//     drive() {
//         console.log("car is driving");
//     }
// }
// let car=new Car;
// console.log(car.color);

// let carTwo=new Car;
// carTwo.color="red";
// console.log(carTwo);

// class Calculator{
//     PI=3.14;
//     plus(n1, n2){
//         return n1+n2;
//     }
//     minus(n1, n2){
//         return n1-n2;
//     }
//     multiply(n1, n2){
//         return n1*n2;
//     }
//     division(n1, n2){
//         return n1/n2;
//     }
//     remainder(n1, n2){
//         return n1%n2;
//     }
// }
// let calculator=new Calculator;
// console.log(calculator.remainder(3, 2));
// console.log(calculator.PI);

// static property
// class Calculator{
//     static PI=3.14;
// }
// console.log(Calculator.PI);

// Math class | object
// console.log(Math.PI);

// static method
// class Calculator{
//     static PI=3.14;
//     static area(r) {
//         return 3.14*r**2;
//     }
// }
// console.log(Calculator.area(2));

// class Calculator{
//     PI=3.14;
//     area(r) {
//         return this.PI*r**2; //this=> class
//     }
//     volume(r, h) {
//         return this.area(r)*h;
//     }
// }
// let calculator=new Calculator;
// console.log(calculator.volume(2, 4));

// class Calculator{
//     Name="casio";
//     static info() {
//         let calculator=new Calculator;
//         console.log('i am '+calculator.Name+ ' calculator');
//     }
// }
// Calculator.info();

// OOP (constructor & access modifier)
// constructor
// class Car{
//     constructor() {
//         console.log("i'm running");
//     }
// }
// new Car;

// class Car{
//     Name= ''; //"n" thone lo ma ya, class name ko kor tr ne tuu nay lo
//     wheels= '';
//     constructor(name, wheels) {
//         this.Name=name;
//         this.wheels=wheels;
//         this.drive();
//     }
//     drive() {
//         console.log(this.Name+" is driving");
//     }
//     getWheels() {
//         console.log(this.Name+" has "+this.wheels+" wheels");
//     }
// }
// new Car("marcedes", 4);
// let toyota=new Car("toyota", 10);
// toyota.getWheels();

// access modifier | static, public, private, protected(not in JS)
// public => access anywhere
// private => access only in own class
// protected => access only in own class and child class

// class Car{
//     Name="marcedes"; //public property
//     #hp=300; //private property | encapsulation
//     getHorsePower() {
//         console.log('Horse Power is '+this.#hp);
//     }
// }
// let car=new Car;
// console.log(car.Name);
// car.Name="toyota";
// console.log(car);
// car.getHorsePower();

// inheritance
// class Animal{
//     constructor(name) {
//         this.Name=name; //Name= '';
//     }
//     run() {
//         console.log(`${this.Name} is running`);
//     }
// }
// // let dog=new Animal('dog');
// // dog.run();

// class Dog extends Animal{
//     bark() {
//         console.log(this.Name+' woof woof');
//     }
// }
// let dog=new Dog("Aung Nak");
// dog.run();
// dog.bark();

// Asynchronous JavaScript
// single thread | sync way | JavaScript is single thread
// multi thread | async way | event loop, framestack, message queue

// event loop
// console.log(1);
// setTimeout(()=>{
//     console.log(2);
// }, 3000);
// console.log(3);

// * promise
// function asynchronous() {
//     return new Promise((resolve, reject)=>{ //callback funvtion | executor
//         let result=0;
//         for(let i=0; i<1000000000; i++) {
//             // result+=i;
//             result+=i+undefined;
//         }
//         if(result){
//             resolve(result);
//         }else {
//             reject('i have got some error');
//         }

//     })
// }
// console.log('work')
// asynchronous()
// .then((result)=> {
//     console.log(result)
//     console.log('after async task')
// })
// .catch((error)=> {
//     console.log(error);
// })
// console.log('important work')

// * fetch api
// fetch('https://jsonplaceholder.typicode.com/todos') //api link
// .then((response)=> {
//     response.json().then((data)=> { //api mr shi te data tway ko js yae object 1 khu a phit pyg
//         console.log(data)
//     }).catch((error)=> {
//         console.log(error)
//     });
// })
// .catch((error)=> {
//     console.log(error)
// })

// let userInput=prompt('Tell me user id ?');
// fetch('https://jsonplaceholder.typicode.com/todos/'+userInput)
// .then((response)=> {
//     return response.json()
// })
// .then((data)=> {
//     console.log(data)
// }) //promise chain
// .catch((error)=> {
//     console.log(error)
// })

// * async await
// async function fetchTodos() {
//     try {
//         let response=await fetch('https://jsonplaceholder.typicode.com/todos')
//         console.log('hi')
//         let datas=await response.json()
//         console.log(datas);
//     }
//     catch(error) {
//         console.log(error)
//     }
// }
// fetchTodos();

// Coding Styles
// all cap
// HELLO_WORLD
// const PI=3.14;

// snake case
// hello_world
// let color_name="red";

// camel case
// helloWorld
// let obj= {
//     propertyName: 'name',
//     methodName() {
//     }
// }

// capital case
// HelloWorld
// class MyCar {
// }

// array
// let array=[
//     'ShinAh',
//     'Yona',
//     'Hok Son', //',' trailing comma
// ]

// if else
// if(condition) console.log('statement')
// else console.log('statement')

// if(condition) {
//     console.log('statement')
//     console.log('statement')
// }
// else console.log('statement')

// function
// function test() {
// }

// module system | node modules system (node.js) | es modules system (default)
// Node module system
// console.log("Hello World!");

// node module export
// const { PI, add, minus } = require("./math");
// console.log(add(3, 2));

//started learning from Git Hub

//1) Diffrent way of Initiating an Object in js
//object constructor
// let object = new Object();
// object["name"] = "Rohit"
// object["class"] = [12,2,12]
// console.log(object , typeof object)

// // //  object create method;
// // let object = Object.create({});
// // console.log(object)

// // // object literal syntax ;
// // let object = {
// //     name:"ROhit",
// //     class:"Rohit"
// // }


// // // object function constructor
// //  function Person(name){
// //     this.name = name,
// //     this.class ="10"
// // }

// // let object = new Person("rohit");
// // console.log(object.name);

// // // functional prototype constructor;
// // function Person (){};
// // Person.prototype.name = "Rohit"
// // Person.prototype.std = "12,1,14";

// // let NewPerson = new Person();
// // console.log(NewPerson.name)

// //ES6 syntax constructor Type;
// const  Person = class {
//     constructor(name , std ){
//         this.name = name,
//         this.std = std,
//         this.amount = 100
//     }

//     calArea (){
//         return this.name + this.std
//     }
//     totalAmount (value){
//         return this.std*this.amount +value+ value
//     }
// }

// let newPerson = new Person("rohhit", 12);
// console.log(newPerson);
// let area = newPerson.calArea();
// console.log(area)
// let totalFees = newPerson.totalAmount(38);
// console.log(totalFees)

// // intering concept in class;

// class totalArea {
//   constructor(name) {
//     this.name = name;
//   }

//   area() {
//     console.log(`Area of the class is ${this.name}`);
//   }
// }

// class circle extends totalArea {
//     constructor(name){
//         super(name)
//     }

//     area (){
//         return this.name*2*3.14
//     }
// }

// let newArea =  new totalArea(20);
// console.log(newArea.area())


// //  2) What is a prototype chain

// let newObj = {"name":"Rohit"} // watch Vidoe


// // 3  What is the difference between Call, Apply and Bind

// // call invokes a functon passed as with this paramertes and arugments passed one by onew

// let rohit = {"hindi":39 , "english":40 ,history:40};
// let rohit2 = { hindi: 39, english: 40, history: 40 };
//  function calculatePer (param1 ,parma2){
//       let RohitPercentage = (this.hindi/param1 + this.english/parma2)*100;
//       return RohitPercentage
//  }

// console.log(calculatePer.call(rohit , 100 , 80));

// //apply  invokes a function  passed with "this" parametres and arguments passed as an array;
// console.log(calculatePer.apply(rohit2,[100,100,100]));

// // Bind  return new function allowing you to pass any numbers of aruguments

// let markesheet =  calculatePer.bind(rohit);
// console.log(markesheet(100,100))

// // 4 ) purpose of slice Method
// // returns new array without changng the original Array
// let array = [23,2,89,98]
// let slicedArray = array.slice(2,-1)
// console.log(slicedArray)


//  // Q-5   purspose of splice method in array
//  let splicedArray = array.splice(3 ,4,4)
//  console.log(splicedArray)
// console.log(array)


// // Q 6 Maps and Object diffrences;
// let map1 = new Map();
// map1.set("boy","Rohit");
// map1.set("class" ,8);
// map1.set("new" ,"history")

// console.log(map1.has("boy"));
// for(let item of map1){
//     console.log(item)
// }

// // Q 7 === and == opreators
// console.log([] == [])  // false
// console.log([] === []); // false

// //Q 8 First Class function
// //fucntion which can be treated like a variable , wherer u can pass function to other function and return function from function

// // Q 9  Higher order function;
// const firstClassFucntion = ()=>{
//     console.log("i am first class function")
// };

// const highOrderFunction = (returFirstClassFucntion)=>  returFirstClassFucntion();
// highOrderFunction(firstClassFucntion)

// // Q 10 CurryFunction ;

// const multiArgument = (a,b,c) => a + b + c;
// console.log(multiArgument(2,3,5))

// const  curryUniaryFunction = (a) =>(b) =>(c) => a + b + c;
// let value = curryUniaryFunction(2)(3)(5)
// console.log(value)

//  function calculateCube(length){
//     return function(width){
//         return function(height){
//             return length+ width + height
//         }
//     }
//  }

//  console.log(calculateCube(6)(7)(8))


//  // Q -11 How do you redeclare let variables in switch block without an error   ;

//  let counter = 1

//  switch (counter) {
//    case 0:{
//      let name = "rohit";
//      console.log(name)
//    }
//      break;
//    case 1:{
//      let name = "Kumar ";
//       console.log(name);
//    }
//      break;

//    default:
//      break;
//  };


 //  Q -12 Temporal Dead Zone
// function TemporalDeadZone (){
//     console.log(counter);
//     console.log(counter1);
//     var counter = 20;
//     let counter1 = 30
//     console.log(counter1);

// }
// console.log(TemporalDeadZone());

// // Q -12 iifE ;

// (()=>{
// console.log("iife")
// })();

// (function (){
//     console.log("iiff without the help of arow function")
// }) ()
 

// // 13 encodeUrl and decodeUrl ' or anything using javaScript
// let uri = "employeeDetails?name=john&occupation=manager";
// let encoded_uri = encodeURIComponent(uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log(encoded_uri)
// console.log(decoded_uri);

// Q -14 Memorization  fucntion which case

const memorization = () => {
  let cahedData = {};
  return function (value) {
    if (value in cahedData) {
      console.log("Fetched form cahedData");
      return cahedData[value];
    } else {
      console.log("fetching the data form  databae");
      let result = value + 20 + 30;
      cahedData[value] = result;
      return result
    }
  };
};

let calculate = memorization();
console.log(calculate(20))
console.log(calculate(20));

const memorization2 = () => {
  let cached = {};
  return function (param) {
    if (cached.param) {
      console.log(param, "found in chached");
      return cached[param]
    } else {
      let couponId = "rohit" + param;
      console.log("couponId",couponId)
      cached[param] = couponId;
      return couponId;
    }
  };
};

let memorized1 = memorization2();
let memorized2 = memorization2();
console.log(memorized1(12345))
console.log(memorized1(12345));

// Q 15 Closure Question With Example;
let variable = 30

 function calculte (a){
  
  let b = 20;
  function  addition (b){
    return multiply(3.5)
  };
   function multiply (b){
     console.log(a + b + variable);
   }
   addition()

 }

let closureTest = calculte(30);

// another function for another Closures
const welcome = (user)=>{
    function greetingInfo(msg){
      return personlizeMsg(user ,msg)
    }
    function personlizeMsg (user, msg){
      return `myfac8ry welcomes you ${user} ${msg}`
    }
    return greetingInfo

}
let user = welcome("ROhit");
let msg = user("You are such nice person")
console.log(msg)

// sessionStorage localStorage ,cookies

let token = localStorage.setItem("token",msg)
let session = sessionStorage.setItem("token", msg);
let cookies =document.cookie = "cookie1=test; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/";
console.log(cookies)
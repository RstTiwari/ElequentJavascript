// started learning from Git Hub

// 1) Diffrent way of Initiating an Object in js
// object constructor
// let object = new Object();
// object["name"] = "Rohit"
// object["class"] = [12,2,12]
// console.log(object , typeof object)

// //  object create method;
// let object = Object.create({});
// console.log(object)

// // object literal syntax ;
// let object = {
//     name:"ROhit",
//     class:"Rohit"
// }


// // object function constructor
// export function Person(name){
//     this.name = name,
//     this.class ="10"
// }

// let object = new Person("rohit");
// console.log(object.name);

// // functional prototype constructor;
// function Person (){};
// Person.prototype.name = "Rohit"
// Person.prototype.std = "12,1,14";

// let NewPerson = new Person();
// console.log(NewPerson.name)

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

// Q 8 First Class function
// fucntion which can be treated like a variable , wherer u can pass function to other function and return function from function

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

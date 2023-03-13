//===>>>>>Propeties
// almsot all Javascript value has Poperties except null and undefined
//console.log("nullLenght", null.lenght);
// so basically there are two type to acess the properties of value
// by dot . notation or by box [] notation
// the only diffrence between these two method is depend on scenerio we are looking for

let array = [1, 2, 3, 5];
//console.log(array.length)  // easier to write yth array["length"]
let value1 = "ROhit";
//console.log(typeof value1.toUpperCase);
//console.log(value1.toUpperCase());

//===>>>>>Methods
/* every string or object has number of
  properties that hold fucntion values   this properties are called as Method  */
// take a example of methoda
let array1 = [1, 5, 3, 4, 6, 7, 8];
array1.push(4);
array1.push(6);
//console.log(array);

//===>>>> Objects

let details = {
  name: "ROhit",
  class: 10,
  sub: ["maths", "number", "schools"],
  other: {
    dad: "Ratan",
    mom: {
      father: "Sharda",
      mother: "sarita",
    },
  },
};

Object.assign(details, { love: "I love Book" });

delete details.love;
//console.log(details)

// going deeper into an Object for mutation
if ("sub" in details) {
  for (val of details.sub) {
    //console.log("object", val);
  }
}

// finding the key of an object
let key = Object.keys(details.other);
let value = Object.values(details);
//console.log(key);
//console.log(value);

//====>>> MUTABILTY
//--- all Sting , Number , Boolen values are immutable

const object1 = { value: 1 };
const object2 = object1;
const object3 = { value: 1 };
console.log(object1 == object2); // bcs both are refering to same memory location , where they stored
console.log(object1 == object3); // both are same but False becasue diffrent memory location

// this is allowed
object1.value = 10;
// this is not allowe
// object1 = {value:11 , home:12}
//console.log(object1)

//====>>>> METHODS of ARRAY

// You can keep Reminding yourself for this kind of Method

//====>>> METHODS OF STRING
/*One difference is that a string’s indexOf can search for a string containing
more than one character, whereas the corresponding array method looks only
for a single elemen  */
//console.log("one two three for Five six seven".indexOf("e"));
let name1 = "ROHItKumar   Tiwari ".trim();
//console.log(name1)

//console.log(String(24566).padStart(3,0))  // Learn More about padding
// split Method
let sentence = "Secretarybirds/specializ/in stomping";
let words = sentence.split("/");
//console.log(words);
// join method
sentence = words.join(",");
//console.log(sentence);

// Repeat Method is There
//console.log("rohit".repeat(3))

//==>>>RestParameter

// function to calculate the Max Numeber from all Number
function max(...numbers) {
  let result = -Infinity; // variable - Infinnity usaed beacuse to compare the numbers from this Number
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

console.log(max(-1, -1, -3, -5, 0));

// function to get the smallest numbers of all the Number

function min(...numbers) {
  let result = 1 / 0;
  for (let number of numbers) {
    if (number < result) result = number;
  }
  return result;
}

console.log(min(6, 7, 8, 9, 0, -1, -4));
// infinity is Predefiend Value , we can make our own var
// let result = 1/0 (value of which is infinite Only)

// Destructuing an array
// calling the same above function with array
let numbers = [2, 3, 5, 6, -1, 8, 10, -1, -2, 3, -5, -5, -111, -2938];
console.log(max(...numbers));
console.log(min(...numbers));

//entering new array inside an existing array
let items = ["Books", "Fruits", "choclates", "Vanial", "Cucumber"];
let newItem = ["Coding", "Reding", "Repeating"];
items = [...items, ...newItem];
//console.log(items)

let items1 = [items, newItem];
for (let item of items1) {
  console.log(item[0]);
}

//Practis Question for Array chapter
function range(start, end, step = 1) {
  let array = [];
  if (step > 0) {
    for (let i = start; i <= end; i = i + step) {
      array.push(i);
    }
  }
  if (step < 0) {
    for (let i = start; i <= end; i = i - step) {
      array.push(i);
    }
  }

  return array;
}
console.log(range(5, 10, -3));

//  the sum function
function sum(range) {
  let total = 0;
  for (let elem of range) {
    total += elem;
  }
  return total;
}
console.log(sum(range(2, 10, 2)));

// writing  function to reverse an Array
function reversArray(input) {
  let array = [];
  for (let i = 0; i < input.length; i++) {
    array.unshift(input[i]);
  }
  return array;
}

//console.log(reversArray([2, 4, 5, 6]));

// now writing the same function with diffrent format of for loop
function reversArray(input) {
  let array = [];
  for (let i in input) {
    console.log(i);
    array.unshift(input[i]);
  }
  return array;
}

// reverseInPlace Method of array should be looked after

//==>>> Practise question from the


//converiting array into the list
function arrayToList(input) {
  let list = null;
  for (let i = 1; i < input.length; i++) {
     list = {
      value: input[i],
      rest: list,
    };
  }

  return list;
}

//console.log(arrayToList([1, 2, 3, 5]));

// conveting a list into array

function listToarray(input){
 let keys=  Object.keys(input)
 let value = Object.values(input)
let finalarray = [...keys , ...value]
return finalarray

}
//console.log(listToarray({key:1 , value:2}));

// Function to Deep  Check Weather Both the Object are Equal of not

function checkObject(obj1 , obj2){
        let propA =  Object.getOwnPropertyNames(obj1)
        let propB = Object.getOwnPropertyNames(obj2);
    
        if(propA.length !== propB.length){
          return "Objects are not Equal"
        }
        for(let i = 0 ; i < propA.length ; i++){
          let propName = propA[i];
          console.log("propName", propName);
          // if the values of both the Object
          if(obj1[propName] !== obj2[propName]){
            return "Object are Not Equal"
          }
        }

        //if everthing Matched correctly
        return "Objecrts are equal"

}

console.log(checkObject({ key: 1, value: 2 }, { key1: 1, value: 2 }));



















































// take example of properties
// console.log(array.sort());
// // Objects and
// let obj = { left: 1, right: 2, center: 4 };
// console.log(obj.left);
// console.log(obj.right);
// delete obj.left;
// console.log(Object.values(obj));
// console.log(obj.right);
// let details = {
//   name: "ROhit",
//   class: 10,
//   sub: ["maths", "number", "schools"],
//   other: {
//     dad: "Ratan",
//     mom: {
//       father: "Sharda",
//       mother: "sarita"
//     }
//   }
// };

// console.log(details.other.mom.mother);
// console.log(Object.values(details));
// Object.assign(details, {
//   name: "rohit",
//   fullname: "Classicals"
// });
// console.log(details);

// // array of object
// // holding the values and detials as an array of object
// let journal = [
//   { event: ["eating", "cycling", "walking"], sleeping: false },
//   { event: ["wroking", "studying", "complex-works"], sleeping: true }
// ];
// console.log(journal[0].event[2]);
// // mutability
// //in case of Stirng and numbers  they are Immutable;
// let val1 = "rohit";
// let val2 = val1;
// let val3 = "tiwari";
// console.log(val2);
// val1 = "ROhit";
// console.log("=======>", val1);
// // but objects are mutable;
// let obj1 = { value: 10 };
// let obj2 = obj1;
// let obj3 = { value: 15 };
// console.log(obj2);
// console.log(obj2 === obj1);
// console.log(obj1 === obj3);
// obj1.value = 45;
// console.log(obj1);

// const score = { number: 25 };
// score.number = 20;
// console.log(

// // Lycanthropes Log
// let  journal1 = []

// function addEntry(event, squerl){
//   return journal1.push({ event, squerl });
// }

// addEntry(["values", "bottom", "sleeping", "walking"], false);
// addEntry(["values", "pizza", "mathss", "walking"], true);
// /* the statical obeservation can also be done through the js measurment way */
// // eg
// let table = [76, 9, 4, 1];
// function phi(table) {
//   return (
//     (table[3] * table[0] - table[2] * table[1]) /
//     Math.sqrt(
//       (table[2] + table[3]) *
//         (table[0] + table[1]) *
//         (table[1] + table[3]) *
//         (table[2] + table[0])
//     )
//   );
// }

// console.log(phi(table));
// var JOURNAL = [
//   { events: ["carrot", "exercise", "weekend"], squirrel: false },
//   {
//     events: ["bread", "pudding", "brushed teeth", "weekend", "touched tree"],
//     squirrel: false
//   },
//   {
//     events: ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
//     squirrel: false
//   },
//   {
//     events: [
//       "brussel sprouts",
//       "ice cream",
//       "brushed teeth",
//       "computer",
//       "weekend"
//     ],
//     squirrel: false
//   },
//   {
//     events: [
//       "potatoes",
//       "candy",
//       "brushed teeth",
//       "exercise",
//       "weekend",
//       "dentist"
//     ],
//     squirrel: false
//   },
//   {
//     events: [
//       "brussel sprouts",
//       "pudding",
//       "brushed teeth",
//       "running",
//       "weekend"
//     ],
//     squirrel: false
//   },
//   {
//     events: ["pizza", "brushed teeth", "computer", "work", "touched tree"],
//     squirrel: false
//   },
//   {
//     events: ["bread", "beer", "brushed teeth", "cycling", "work"],
//     squirrel: false
//   },
//   { events: ["cauliflower", "brushed teeth", "work"], squirrel: false },
//   { events: ["pizza", "brushed teeth", "cycling", "work"], squirrel: false },
//   { events: ["lasagna", "nachos", "brushed teeth", "work"], squirrel: false },
//   { events: ["brushed teeth", "weekend", "touched tree"], squirrel: false },
//   {
//     events: ["lettuce", "brushed teeth", "television", "weekend"],
//     squirrel: false
//   },
//   { events: ["spaghetti", "brushed teeth", "work"], squirrel: false },
//   { events: ["brushed teeth", "computer", "work"], squirrel: false },
//   { events: ["lettuce", "nachos", "brushed teeth", "work"], squirrel: false },
//   { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
//   { events: ["brushed teeth", "work"], squirrel: false },
//   { events: ["cauliflower", "reading", "weekend"], squirrel: false },
//   { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
//   { events: ["lasagna", "brushed teeth", "exercise", "work"], squirrel: false },
//   {
//     events: ["spaghetti", "brushed teeth", "reading", "work"],
//     squirrel: false
//   },
//   {
//     events: ["carrot", "ice cream", "brushed teeth", "television", "work"],
//     squirrel: false
//   },
//   { events: ["spaghetti", "nachos", "work"], squirrel: false },
//   {
//     events: ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"],
//     squirrel: false
//   },
//   { events: ["spaghetti", "peanuts", "computer", "weekend"], squirrel: true },
//   {
//     events: ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"],
//     squirrel: false
//   },
//   {
//     events: ["potatoes", "ice cream", "brushed teeth", "work"],
//     squirrel: false
//   },
//   { events: ["peanuts", "brushed teeth", "running", "work"], squirrel: false },
//   { events: ["potatoes", "exercise", "work"], squirrel: false },
//   { events: ["pizza", "ice cream", "computer", "work"], squirrel: false },
//   { events: ["lasagna", "ice cream", "work"], squirrel: false },
//   { events: ["cauliflower", "candy", "reading", "weekend"], squirrel: false },
//   {
//     events: ["lasagna", "nachos", "brushed teeth", "running", "weekend"],
//     squirrel: false
//   },
//   { events: ["potatoes", "brushed teeth", "work"], squirrel: false },
//   { events: ["carrot", "work"], squirrel: false },
//   { events: ["pizza", "beer", "work", "dentist"], squirrel: false },
//   { events: ["lasagna", "pudding", "cycling", "work"], squirrel: false },
//   {
//     events: ["spaghetti", "brushed teeth", "reading", "work"],
//     squirrel: false
//   },
//   {
//     events: ["spaghetti", "pudding", "television", "weekend"],
//     squirrel: false
//   },
//   {
//     events: ["bread", "brushed teeth", "exercise", "weekend"],
//     squirrel: false
//   },
//   { events: ["lasagna", "peanuts", "work"], squirrel: true },
//   { events: ["pizza", "work"], squirrel: false },
//   { events: ["potatoes", "exercise", "work"], squirrel: false },
//   { events: ["brushed teeth", "exercise", "work"], squirrel: false },
//   {
//     events: ["spaghetti", "brushed teeth", "television", "work"],
//     squirrel: false
//   },
//   { events: ["pizza", "cycling", "weekend"], squirrel: false },
//   { events: ["carrot", "brushed teeth", "weekend"], squirrel: false },
//   { events: ["carrot", "beer", "brushed teeth", "work"], squirrel: false },
//   { events: ["pizza", "peanuts", "candy", "work"], squirrel: true },
//   {
//     events: ["carrot", "peanuts", "brushed teeth", "reading", "work"],
//     squirrel: false
//   },
//   { events: ["potatoes", "peanuts", "brushed teeth", "work"], squirrel: false },
//   {
//     events: ["carrot", "nachos", "brushed teeth", "exercise", "work"],
//     squirrel: false
//   },
//   {
//     events: ["pizza", "peanuts", "brushed teeth", "television", "weekend"],
//     squirrel: false
//   },
//   {
//     events: ["lasagna", "brushed teeth", "cycling", "weekend"],
//     squirrel: false
//   },
//   {
//     events: [
//       "cauliflower",
//       "peanuts",
//       "brushed teeth",
//       "computer",
//       "work",
//       "touched tree"
//     ],
//     squirrel: false
//   },
//   {
//     events: ["lettuce", "brushed teeth", "television", "work"],
//     squirrel: false
//   },
//   {
//     events: ["potatoes", "brushed teeth", "computer", "work"],
//     squirrel: false
//   },
//   { events: ["bread", "candy", "work"], squirrel: false },
//   { events: ["potatoes", "nachos", "work"], squirrel: false },
//   {
//     events: ["carrot", "pudding", "brushed teeth", "weekend"],
//     squirrel: false
//   },
//   {
//     events: ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"],
//     squirrel: false
//   },
//   { events: ["brussel sprouts", "running", "work"], squirrel: false },
//   { events: ["brushed teeth", "work"], squirrel: false },
//   { events: ["lettuce", "brushed teeth", "running", "work"], squirrel: false },
//   { events: ["candy", "brushed teeth", "work"], squirrel: false },
//   {
//     events: ["brussel sprouts", "brushed teeth", "computer", "work"],
//     squirrel: false
//   },
//   { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
//   { events: ["cauliflower", "brushed teeth", "weekend"], squirrel: false },
//   {
//     events: ["spaghetti", "candy", "television", "work", "touched tree"],
//     squirrel: false
//   },
//   { events: ["carrot", "pudding", "brushed teeth", "work"], squirrel: false },
//   { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
//   {
//     events: ["carrot", "ice cream", "brushed teeth", "cycling", "work"],
//     squirrel: false
//   },
//   { events: ["pizza", "brushed teeth", "work"], squirrel: false },
//   { events: ["spaghetti", "peanuts", "exercise", "weekend"], squirrel: true },
//   {
//     events: ["bread", "beer", "computer", "weekend", "touched tree"],
//     squirrel: false
//   },
//   { events: ["brushed teeth", "running", "work"], squirrel: false },
//   {
//     events: ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"],
//     squirrel: false
//   },
//   {
//     events: ["lasagna", "brushed teeth", "television", "work"],
//     squirrel: false
//   },
//   {
//     events: ["cauliflower", "brushed teeth", "running", "work"],
//     squirrel: false
//   },
//   { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
//   { events: ["carrot", "reading", "weekend"], squirrel: false },
//   { events: ["carrot", "peanuts", "reading", "weekend"], squirrel: true },
//   { events: ["potatoes", "brushed teeth", "running", "work"], squirrel: false },
//   { events: ["lasagna", "ice cream", "work", "touched tree"], squirrel: false },
//   {
//     events: ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"],
//     squirrel: false
//   },
//   { events: ["pizza", "brushed teeth", "running", "work"], squirrel: false },
//   { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
//   {
//     sports: ["bread", "brushed teeth", "television", "weekend"],
//     squirrel: false
//   },
//   {
//     events: ["cauliflower", "peanuts", "brushed teeth", "weekend"],
//     squirrel: false
//   }
// ];

// function tableFor(event, JOURNAL) {
//   let table = [0, 0, 0, 0];
//   for (let i = 0; i < journal.length; i++) {
//     let entry = JOURNAL[i],
//       index = 0;
//     console.log(JOURNAL[5]);
//     if (entry.events.includes(event)) index += 1;
//     console.log("=========entry", event);
//     if (entry.squirrel) index += 2;
//     table[index] += 1;
//   }
//   return table;
// }
// console.log(tableFor("television", JOURNAL));
// // call by refrence and call by value
// // call by value
// let original = 10;
// function callByValue(originalVal) {
//   originalVal += 10;
//   console.log(originalVal);
// }
// callByValue(original);
// console.log(original);

// const myObj = {
//   value: 20
// };
// function callByRef(newObj) {
//   newObj.value += 10;
//   console.log(newObj);
// }
// callByRef(myObj);
// console.log(myObj);

// array loops witjout using conventional for loop
// for (let entry of JOURNAL) {
//   console.log(`====${entry.events.length} events.`);
// }
// other array parmaeters we need to look for

// const array = [ 3,4,6,7,3,8];
// console.log(array.indexOf(3))
// console.log(array.lastIndexOf(3))

// array.shift()
// console.log(array)
// function remove(value , index){
//     return value.slice(0,index).concat(value.slice(index +1))
// }

// console.log(remove(array ,2))
// console.log(array.indexOf)

// // strings and there propertiesrhoit
// let name1 ="Rohittiwari"
// console.log(name1.indexOf("t"))
// console.log(name1.slice(0,3))
// console.log("  okay love ".trim())
// console.log(name1.trim())
// let num = 78
// console.log(String(num).padStart(4,0))

// let sentence = "Secretarybirds specialize in stomping";
// let words = sentence.split(" ")
// console.log(words)
// console.log(words.join("\h"))
// console.log("lala".repeat(10,","))

//Rest Parameter
//rest parameter are use to pass the multiple values to the given function
// function max(...numbers) {
//     let result = -Infinity;
//     for (let val of numbers) {
//         if (val > result) result = val;
//     }
//     return result;
// }
// console.log(max(1, 4, 5, -8))
/* important points to note down here */

// let array = [ 1,2,3,4,6,9]
// array.newProp = 10

// for( num in array){
//     console.log(num)
// }
// for(num of array){
//     console.log(num)
// }
// // for in works better with object values where as for of works better with  array string list kind of values
// let others =["gauavav" ,"mango"]
// let fruits = ["banana" ,  ...others,"apple", ]
// console.log(fruits)

// destructring
// let destructring = [1, 2, 4, 5, 66]
// let [x, y, z, ...rest] = destructring;
// console.log(x)
// console.log(rest)
// // destructruing in object values
// let { name, age } = { name: "Faraji", age: 23 };
// console.log(age)
// /*Json basically means  serilization of data for
//  sending or storing to  the file
//  what can be further noticed that Json is just j
//  avascript object
// */
// let string = JSON.stringify({
//     squirrel: false,
//     events: ["weekend"],
//     mood: "[jfhfhfhfhfh]"
// });
// console.log(string)
// console.log(JSON.parse(string).mood)
// // summrary of the chapter
// console.log(string)
// // let deifne what is property in javascript of array and objects
// // SO objects tends to use name for there property , where as Array uses value such as [0],[1], to acees there property name;

// // exercise question for chapter 4
// let rangeArray = [];
// function range(start, end ,step) {
//     if(step > 0){
//         for (let i = start; i <= end; i+= step||1) {
//             rangeArray.push(i)
//         }
//         return rangeArray
//     }else{
//         for (let i = start; i <= end; i-= step) {
//             rangeArray.push(i)
//         }
//         return rangeArray
//     }

// }
// console.log(range(10, 100 ,-5))

// function sum(sumArray) {
//     let total=0;
//     for (let i = 0; i < sumArray.length; i++) {
//         total += sumArray[i]
//     }
//     return total;

// }
// console.log(sum([3,4,5,6]))
// // Reversing an array
// let arrayToBeReverse =[2,3,5,6,7]
// function reverseArray(arrayToBeReverse){
//     let output = []
//     for(let i = arrayToBeReverse.length -1 ; i > -1;i--){
//         output.push(arrayToBeReverse[i]);
//     } return output;
// }
// console.log(reverseArray(arrayToBeReverse))

// function reverseArray1(arrayToBeReverse1){
//     let output=[];
//     for(let i = 0 ;i < arrayToBeReverse1.length ; i++){
//         output.unshift(arrayToBeReverse1[i])
//         console.log(output)
//     } return output;
// }
// console.log(reverseArray1(arrayToBeReverse))

// // objects question for practise;
// function arrayToList(toBeList){
//     let outputList = null;
//     for(let o = toBeList.length -1 ; o > -1; o--){
//         outputList ={
//             value:toBeList[o],
//             rest:outputList
//         }
//         console.log("toBeList[i]",outputList)
//     } return outputList;
// }

// console.log(arrayToList([1,2,3]))

// // from list to array.
// let finallist = {
//      value: 1, rest: { value: 2, rest: { value: 3, rest: null
//     }
// }
// }

// function listToarray(toBeArray){
//     let outputArray =null;
//     for(let i = toBeArray.length-1; i > -1 ; i--){
//        console.log(Object.keys(toBeArray(i)))
//     }

// }
// console.log(listToarray(finallist))

let newObj = {
  rohit:"the key are Value",
  class:"10Std",
  sub:["math","english","newBook"],
}

Object.assign(newObj ,["THe all new","The wholeWorls","the new Class"])
//console.log(newObj)   // uncommnent when want to check

// function to calculate the Max Numeber from all Number
function max(...numbers) {
  console.log(numbers)
  let result = -Infinity; // variable - Infinnity usaed beacuse to compare the numbers from this Number
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

console.log(max(-1, -1, -3, -5, 0,100));

function findMax (numbers){
  let result = Infinity;
  for(let number of numbers){
    if(number < result) result = number;

  }
  return result
}

console.log(findMax([2,3,6,-9 ,199, -100]))
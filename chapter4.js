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

// checking if Tow Obj are same or not

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

function newFun(...numbers){
  console.log(...numbers )
}

console.log(newFun(2,4,5,7,9))

let obj1 = {
  name: "Rohit",
  class: 5,
  boooK: "fifthStd",
};
let obj2 = {
  name: "Rohit",
  class: 5,
  boooK: "fifthStd",
};
console.log(JSON.stringify(obj1) == JSON.stringify(obj2))

//  the sum function
function sum(range) {
  console.log(range)
  let total = 0;
  for (let elem of range) {
    total += elem;
  }
  return total;
}
console.log(sum(range(2, 10, 2)));

function calRange (start , end , step = 1){
  let array = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i)
    }
  }
   if (step < 0) {
     for (let i = start; i <= end; i -= step) {
       array.push(i);
     }
   }
  return array

}

console.log(calRange(5 , 20 , 2))

function calSum (range){
  let sum = 0
  for(let ele of range){
      sum += ele
  }
  return sum
}
console.log(calSum(calRange(5 , 30 , 3)))

// finding max and minimum of given array
function maxAndMin(numbers){
  let max = -Infinity;
  let min = Infinity
  for (let ele of numbers){
    if(ele > max){
      max = ele
    }else if( ele < min){
      min = ele
    }
  }
  return [max, min]

}
console.log(maxAndMin([ 5 ,6,7,-100 ,1000 ,-1100]))

// sorting array without the sort function
let sortArray = [5, 4, 3, 4, 1, 6];

for (let i = 1; i < sortArray.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] < array[j]) {
      let x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
  }
}
console.log(array);
//==>function as values
let safeMode = true;
let launchMissle = function(){
    console.log("launch misslie System" ,future())
};

launchMissle();


//==>Declare Notation Declare Notation where Code doesn't move from Top To Bottom  
console.log("the futur us" , future())

function  future(){
    return "i m goona be the best version of my coding self"
}

//==> arrow function

//===>>>   call stack 
function egg(){
    return chicken()
}
function chicken(){
    return egg()
}
//console.log(egg()+ "who came first")


//===>> optional arugment     Deafult notation
function minus( a,b){
    if( b == undefined) return  a;
    else return a-b;
}
// console.log(minus(6,4))

//we ca pre defined a parameteres value id there is chanches of it coming as null or undefined
function power (base , expomnent = 2){
    let result = 1;
    for(let count = 0 ;count < expomnent ; count ++) {
       result *= base;
    }
    return  result;
}
// console.log(power( 7,10)) 

function weekOfDay(today , tomorrow = 2){
    let day = "sunday";
    if(tomorrow === undefined){
        return "value is not defined"
    } else{
        return  today = tomorrow;
    }
}
// console.log(weekOfDay("tuesday"))


////===>>>>> closure
// the ability to treat function as values are called as closures
function multipleValue(n){
    let pow = n;
   
    return (localVariable) => localVariable**pow;  // returnin local variable as function
}
let value1 = multipleValue(3)
//console.log(value1(10))

function multiplier(factor){
    return number => number*factor; // u dont have to pre defined that variable
}
let newValue = multiplier(2)
//console.log(newValue(5))

// More Example for Closuure Understanding

function first1(){
    var name = "my name is FUnctionfirst"

    function first2(){
        console.log(name)
    }
    return first2
}
let myMac = first1();
myMac()

let z = 10;
const makeAdd = (x ,z) =>{
    return function (y){
        
         return x + y +z
    }
}

const add2 = makeAdd(10 ,z)
//console.log(add2(10))
// we can use it for like incrasing the Size of Button or Change ther font multiple times in 



//==>>>>> recursion

//recursion the fucntion which keep callimg it self for multiple number of time are called as recursion function;

function power1 (base ,exponment){
    if(exponment == 0){
        return 1
    }else{
        return base *power1(base ,exponment-1)
    }
}
//console.log(power1(5,3))

// // its basically goes from bottom where (5,0) = 1 then (5,1) =5  then (5,2) = 25 , (5,3)= 125
// //*** Running through a simple loop is generally cheaper than calling a function multiple times.

// onther Examp0le of Recursion
 function recursion (x){
    if(x > 0){
        console.log(x)
        recursion(x-1)
    }
 }
 //console.log(recursion(10))


 //other example of Recursion
 function multipleRecursion(n){
    if(n === 0){
       return 1;
    }else{
        return n*multipleRecursion(n -1)
    }
 }
// console.log(multipleRecursion(10));

// another Example of Recursio using 
function  countTheNumber(num){
    console.log(num);
    // decrsing the number
    var newNumber = num-1;
    if(newNumber > 0){
        countTheNumber(newNumber)
    }
}
console.log(countTheNumber(10))




//====>>>> Given Exercise Problem from chapter3

function countBS (string ,char){
        let reg = char ;
        let count = 0;
     for(let i = 0 ; i < string.length ; i++){
        if(string[i] === reg){
            count ++}
     }
     return count
} 
//  console.log(countBS("ROHiBBBBBB1t" ,"B"))



// for loop for pritning the solution numbers in the loop
function count(num){
    for(let i = num; i >= 1; i--){
        console.log(i)
    }


 }

 // to check whethe the input is sting or not
  function is_String(string){
    let reg = /[a-zA-Z]/;
    if(reg.test(string)){
        return true
    }else {
        return false
    }

  }
 console.log(is_String("a"))

 // wirting a function to convert a string into array of Words

 const arrayOfWord = (string) =>{
    let Word = [];
    for (let char of string){
        console.log(char)
        Word.push(char)
    }
        return Word;
 }
console.log(arrayOfWord("ROHIT"));

// Chapter practise on other topics
// array Loops insted of for loop
//let journal = ["ththht", "(rjhhh)", "love", "the tortose", "camel"]
//for (let entry in journal) {
   // console.log(`${entry}`)
//}

// let library = [
//     { books: ["fiftyshades", "the vertices", "the Numan", "fifty shades of freak"] ,author:"Emma"},
//     { books: ["started with frnds req", "password of my life", "the love", "fifty shades of freak"] ,author:"Ravinder singh"},
//     { story: ["godan", "Dhahej", "idgaha", "aprhan"] ,author:" premChnad"}
// ]

// function authorName(bookname){
//     for(let i = 0; i <library.length ; i++){
//         let entry = library[i] , index=0;
//         if(entry.books.includes(bookname)){
//             console.log(bookname)
//         }
//     }

// }

//authorName()


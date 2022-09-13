//====>>>High Order Function


// Abstractions = abstraction hide details and talk about problems.

// Abstractions repetition 
 function repeat (n ,action){
     for(let i = 0 ; i < n ; i++){
         action(i)
     }
 }

 //repeat(3 , console.log) 

 let labels = [];

 repeat( 5  ,i => {
     labels.push(`Unit ${i +1}`)
 } )

 //console.log(labels)

 // Abstraction repetition function for Writting table

 function table (n , action){
     for(let i = 1; i <= n ; i++){
         action(i)
     }
 }
let  twoTable  = [];
 table(10, i => twoTable.push(`two ${i} = ${i*2}`))
 //console.log(twoTable)

 /* high order function => function which operates on other function by taking them as 
 argument or by returning them are called HighorderFunction */


 //==>> function that create new function
 // this is also concept of closure

 function greaterThan(n){
     return m => m > n ;
 }

 let newValue  = greaterThan(5)
 //console.log(newValue(6))

 // function that changes the other function;
 // i need to study this function ;


 // funnction that changes the flow of the fucntion

 function flowChanger( test , then){
     if(test) then()
 };

 repeat(6 ,  n => {
     flowChanger( n % 2 == 0, () =>{
         //console.log(n , "is even number")
     })
 })


 repeat(8 , n => {
    flowChanger(n % 3 == 0 , ()=>{
       // console.log(n ,"is odd Number")
    })
 })

 // using script model to learn or check the filter concept;

 const Script =  require("./script")

 // creating a filter function that passes that data set the satisfy the condition

 function filter (array , test){
     let passed = [];
     for( let element of array){
        if (test(element)){
            passed.push(element)
        }
     }
     return passed;
 }

 // how filter method can be written in simple function
 function  fiterMethod(input , test){
    let newArray = [];
    for(let val  of input){
        if(test(val))
        newArray.push(val)
    }
    return new array;
}

//console.log(fiterMethod());

let oldestLanguges = filter(Script , item => item.year == 1000);
//console.log("oldest", oldestLanguges);


// now  we can write the same  like this
 let ltr = Script.filter(item => item.direction == "ltr");

 /* ==>>  Map method  =  Map method tranform an array by applying
  function to all the elements of array , the length on 
  new array will be same as the lenth of input array but 
  elemnts will be changed as per defind function */

   function map( script , test){
       let mapped = [];
       for (let element of script){
           if(test(element)){
               mapped.push(element)
           }
       }return mapped;
   }

let newValue1 = ["UP", "MAHARASTRA" , "KARNATKA" ,"TAMILNADU" , "TELEGANA"]   

let value1 = Script.map((item) => {
  newValue1.map((item2) => {

      // console.log(item, item2)

  });
});
//console.log(value1)

// u can store varibale with applying console.log 
// we can again short hand the proerty with map

//console.log(ltr.map(item => item.ranges))



/* Reduce*/
 function reduce (array , combine , start) {
     let current = start;
     for( let element of array){
         current = combine(current , element)

     }
     return current
 }

//console.log(reduce([2,3], (a , b) => b**a , 1 ))
// always use "b" first and "a" second on reduce method
//the other way of Using the  reduce method npow u to gain the knowledge from here onwords

//another example for standard reduce function
let array = [1,2,3,5,7,11,17,23,29 ,31]
function likeReduce (array , combine , start){
    let current = start;
    for(let num in array){
         current = combine(current, num);

    }
    return  current

}
let likeReduceValue = likeReduce(array ,(a, b) => a  + b , 0)
//console.log(likeReduceValue);

// another standard function for Reducer
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}
//console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

//===> Learning to write reduce function in Short hand Format
console.log(array.reduce((a ,b) => b + a , 1))

//Now using standard script to test reduce Function
let scriptValue = Script.reduce((from , to) =>{
    return  Script

}, 1)

console.log(scriptValue);




//creating function to find the maximum characters;
function characterCount(script){
    script.ranges.reduce((count ,[from , to] )=>{
        //console.log("---",count ,from ,to)
        return  count + (to + from)
    }, 0)
}

// console.log(Script.reduce((a, b) =>{
//     console.log("....",b ,a)
//     return  characterCount(a) < characterCount(b) ? b :a
// }))



//===>>>>Composabilty  
let biggest = null ;

for(let script of Script){
    if(biggest == null || characterCount(biggest) < characterCount(script)){
        biggest = script
    }
}
//console.log(biggest)


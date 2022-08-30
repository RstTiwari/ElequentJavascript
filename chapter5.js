// High Order Function

// Abstractions = abstraction hide details and talk about problems.

// Abstractions repetition 
 function repeat (n ,action){
     for(let i = 0 ; i < n ; i++){
         action(i)
     }

 }
 repeat(3 , console.log) 

 let labels = [];

 repeat( 5  ,i => {
     labels.push(`Unit ${i +1}`)
 } )

 console.log(labels)

 // Abstraction repetition function for Writting table

 function table (n , action){
     for(let i = 1; i <= n ; i++){
         action(i)
     }
 }
let  twoTable  = [];
 table(10, i => twoTable.push(`two ${i} = ${i*2}`))
 console.log(twoTable)

 // high order function => function which operates on other function by taking them as argument or by returning them are called HighorderFunction
 // function that create new function

 function greaterThan(n){
     return m => m > n ;
 }

 let newValue  = greaterThan(5)
 console.log(newValue(6))

 // function that changes the other function;
 // i need to study this function ;


 // funnction that changes the flow of the fucntion

 function flowChanger( test , then){
     if(test) then()
 };

 repeat(6 ,  n => {
     flowChanger( n % 2 == 0, () =>{
         console.log(n , "is even number")
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

  let rtl
   = console.log(filter(Script , item => item.direction =="ltr"));
 // now  we can write the same htread like this

 let ltr = Script.filter(item => item.direction == "ltr");

 /*Map method  =  Map method tranform an array by applying
  function to all the elements of array , the length on new array will be same as the lenth of input array but 
  elemnts will be changed as per defind function */
   function map( script , test){
       let mapped = [];
       for (let element of script){
           if(test(element)){
               mapped.push(element)
           }
       }return mapped;
   }
console.log(map( ltr , item => item.ranges));

//*** u can store varibale with applying console.log */

// we can again short hand the proerty with map
console.log(ltr.map(item => item.ranges))

/* Reduce*/
 function reduce (array , combine , start) {
     let current = start;
     for( let element of array){
         current = combine(current , element)

     }
     return current
 }

console.log(reduce([2,3], (a , b) => a  * b , 1 ))
// the other way of Using the  reduce method npow u to gain the knowledge from here onwords

console.log([2,3,4,5,6].reduce((a,b) =>  a + b ,0))


// creating function to find the maximu characters;
function characterCount(script){
    script.ranges.reduce((count ,[from , to] )=>{
        console.log("---",count ,from ,to)
        return  count + (to + from)
    }, 0)
}

console.log(Script.reduce((a, b) =>{
    console.log("....",b ,a)
    return  characterCount(a) < characterCount(b) ? b :a
}))

//Composabilty  

let biggest = null ;

for(let script of Script){
    if(biggest == null || characterCount(biggest) < characterCount(script)){
        biggest = script
    }
}
console.log(biggest)


// here You fill find all the difficult questions releted to Arrays

// 1) to check input is array

function checkArray (input){
    if(Array.isArray(input)){
        return true
    }else{
        return false
    }   
}
Array.prototype.checkForArray{
    if(this.isArray)return true
    else{return false}
}
//console.log(checkArray([1,3,4,5]))

// 2) Write a JavaScript function to clone an array.

function cloneArray(input){
    return input
}
//console.log(cloneArray([1,2,[3,4]]))

//  3. Write a JavaScript function to get the first element of an array.
//     Passing a parameter 'n' will return the first 'n' elements of the array

function firstN(input ,n){ 
    console.log(input)
      input.slice(0,n)
    console.log(input);
    return input


}   
//console.log(firstN([1,2,3,4,5,6,7] ,4))                                                                

//  4.Write a JavaScript function to get the
//  last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array

function lastN(input, n){
    console.log(input);
     return input.slice(Math.max(input.length-n , 0))
}

console.log(lastN([9, 4, 5, 6, 978], 3));


// 5 joining all elements of array as an String
let  joinArry = function(input){
       let joinArray =  input.join("+");
       return joinArray
 
}
console.log(joinArry(["Rohit" ,"tiwari" , "Kumar"]))


//printing date and Time like this
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

let today = new Date()
let day = today.getDay()
console.log(day)
let hour = today.getHours();
let minutue = today.getHours()
let second =  today.getSeconds()
let currentTime = ""
if( hour > 12){
     currentTime = `${hour}pm:${minutue}:${second}`
}else{
        currentTime = `${hour}am:${minutue}:${second}`
    }
console.log(currentTime)

// function to Print the Content of Current Page

function printTheCurrentPage (){
    window.print()
}
//printTheCurrentPage()   // not works in the current directory 

// programe to get the extesnision of file
let filename = "rohit.js"
console.log(filename.split(".").pop())

// write a javaScript Programe to check weathe number range

function numberRange(a,b){
    if( a <= 40 && b >= 60){
          
    }
}
// which is nearest to Hundered
function nearest (a ,b){
 let x = Math.abs(a - 100)
 let y = Math.abs(b - 100)
    return x > y ? b : a

}
console.log(nearest(200 ,60)) 

// number are increasing soft mode or Strict mode
// strict mode means incresing in Highest order only 
function incrse_Order (x, y, z){


}
// CHECK MULTIPLE OF 7 0R 11
function checkmultiple(a, b){
    let value =  a%7=== 0 || b%7=== 0 || a%11 === 0 || b%11 ===0 ? true : false
    return value
}
console.log(checkmultiple(33,14));

// reverse the String
let string = "Rohit Kumar"
console.log(string.split("").reverse().join(""))

// replacing each character of String



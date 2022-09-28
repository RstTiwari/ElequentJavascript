// New Chapter of the Book to learn Even more In the Deep values

//Encapsulation:seprating the  inner interface  from the implementation is called as Encapsulations;
// Methods  : Method are basically Predeifned Function which Perform the Task on given Value

let Rabbit = {}
Rabbit.speak = function(line){
     return (`Rabbit say ${line}`)
}
//console.log(Rabbit.speak("hey guys"))


// it's better way of Defining Methods and parameter
function speak(line){
    return (`the  ${this.type} Raabit says ${line}`)
}

// this extra method(paramewter) pass in object , we can this it in diffrent way
let whiteRabbit = {type : "White"  ,speak}
let hungarryRabit = {type : "hungary" ,speak}

whiteRabbit.speak("ohh the Man u are awsome ")
hungarryRabit.speak("i can use the carrat right now")  

// we can use  call method for explicitly using this method
//console.log(speak.call(hungarryRabit , "Burpppppp"))

// Defining Method Using the array function

const action = (line)=>{
    return (`the action ${this.type} , take you thorugh ${line}`)
}

let running = {type:"Running" , action}
//console.log(running.action("healthy life"))

//====>>> PROTOTYPE
//prodtotype : prototypes are another object
//Prototypes are the mechanism by which objects in JavaScript inherit features from another object

//===>>> CLASSES

//==>CLASS NOTATION

class Rohit {
    constructor(type){
        this.type = type
    }

    speak(){
        console.log(`This ${this.type} Rabbit can speak `)
    }
}

let rohitBro  = new Rohit("Weried")

rohitBro.speak()


//SYMBOLS are Topic needs to Be Learn On Qucik Basis


//get setter and Statics
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
}


const newVal = new Temperature(30);
console.log("tem" , newVal.fahrenheit)

newVal.fahrenheit =  26;
console.log("object ," , newVal.fahrenheit)
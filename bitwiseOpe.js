// checking if both numbers have the Same Sign or not

const sameSignFunction  =(x,y)=>{
    if ((typeof x != "number") || (typeof y != "number")) {
        return "Parameters Value Must be Number"
    } 
    if((x ^ y) < 0){
        return "Both Numbers Having the Diffrent  Sign "
    }else{
        return "Both Numbers Having same Sign"
    }

}

console.log(sameSignFunction(100,-10))
console.log( 100  |     1101)
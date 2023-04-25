// Question applying  chanining on conditional Operator;

function trackValue(parma) {
  return parma == "Rohit"
    ? newFuncion()
    : parma == "Poonam"
    ? "Good Girl"
    : parma == "Priti"
    ? "bad girl"
    : "wronh param";
}

console.log(trackValue("Rohit"));


function newFuncion(){
    return "your the nices boy"
}
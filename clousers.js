let a = 30

function  value(a){
    let  b = 10
     function add (c){
        let d = 20
        return sub(a + b +c + d)
        
        function sub (e){
            console.log(e**2)
        }
}
    return add

}
 let  calculate  = value(5)
calculate(10)
let x = 20
 function z (){
     console.log(x)
     return function y(a) {
       console.log(a);
     }

 }
    
 setTimeout (z , 10000)

 // function to practise about callBacks


 let product = ["shoes", "shirt"]


   api.addToCart(product, function () {

     api.paymentGateWay(function () {

       api.updateOrderSummary();
     });

     console.log("payment gateWay Callled");
   });


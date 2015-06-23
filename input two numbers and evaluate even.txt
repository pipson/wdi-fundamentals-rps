/*areBothEven, which accepts two parameters, a and b; it should return true if a and b are both even, but false otherwise.

*/

var a,b;
var x = parseInt(prompt(" Enter first numbers",a));
var y = parseInt(prompt(" Enter second numbers",b));

function areBothEven(x,y){
    
    if (x%2===0 && y%2===0){
       
        console.log("true");
       
    }
    else{
        return false;
    }

   return x,y;
   
 
}
console.log(areBothEven(x,y));

// to be checked

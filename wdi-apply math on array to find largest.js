
var number = [23,45,60,7889];
function getBiggest(number){
    var largest =Math.max.apply(Math,number);
    return largest;
}
console.log(getBiggest(number));

/* The apply function is used to call another function, with a given context and arguments, provided as an array. The min and max functions can take an arbitrary number of input arguments: Math.max(val1, val2, ..., valN)
*/

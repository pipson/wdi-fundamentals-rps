var x;
var temp = prompt("Enter temperature", x);

function weather(temp){
   var climate = (temp>75)? "Hot":"not Hot";
   return climate;
}
console.log("Todays is"+ " "+weather(temp));

/*

hot or not hot */


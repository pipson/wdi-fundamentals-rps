function square(x) {
  console.log(x * x);
  //console.log(y * y);
  //return x * x, y * y;
  
}

//var resultingArray = [1, 2, 3].map(square);

var resultingArray = [1,2,3].forEach(square);
//console.log(resultingArray);


//what if we want to do [[1,2,3],[2,3,4]].map(square);

/* when var resultingArray = [1, 2, 3].map(square); & console.log(resultingArray); is highlighted we get below: why undefined?
1
4
9
[ undefined, undefined, undefined ]
*/

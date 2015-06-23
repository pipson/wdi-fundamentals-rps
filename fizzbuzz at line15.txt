var num=15;
var n = 1;

function fizzbuzz(n) { 
    if(n===16){
             console.log(fizzbuzz(n))==="";
             n==="";
         }
    while(n<=15){
         if (n % 3 === 0 && n % 5 === 0) return "fizzbuzz";
         else if (n % 3 === 0) return 'fizz';
         else if (n % 5 === 0) return 'buzz';
         else return n;
         }
         
         
}

while (n<=num) {
        console.log(fizzbuzz(n));
        n +=1; 
        
      
}

//why am i getting 16 at the end even though i have checked at the beginning.

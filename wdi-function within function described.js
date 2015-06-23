var somenumber;
function glorp(somenumber){
    return somenumber * 5-3;
}
 console.log(glorp(glorp(1)));
 
 // note that when you try  to write console.log statement after return inside function, you would get an error. write this out of the funtion.


/* also note the below execution


    glorp(10)
    2 * (glorp(5) + 10)
    glorp(1 + 2)
    glorp(glorp(1))
*/

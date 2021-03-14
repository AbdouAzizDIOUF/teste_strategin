/**
 * returns the maximum between the two numbers passed in parameter
 *
 * @param number1
 * @param number2
 * @returns {*}
 */
function max2number(number1, number2){
    alert ((number1 > number2) ? number1 : number2);
    //return (number1 > number2) ? number1 : number2
}

/**
 * This function returns a value according to a criterion
 *
 * @param number
 * @returns {string|*}
 */
function fozz_bezz(number){
    if ((number % 5 === 0) && (number % 3 === 0)) alert("<<FozzBezz>>"); //return "<<FozzBezz>>"
    if (number % 3 === 0) alert("<<Fozz>>"); //return "<<Fozz>>"
    if (number % 5 === 0) alert("<<Bezz>>");  //return "<<Bezz>>";

    alert(number);
    //return number;
}

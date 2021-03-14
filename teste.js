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

/**
 * Display number with parity label
 *
 * @param limit
 */
function showNumbers(limit){
    const label = ["EVEN", "ODD"];
    let result = [];
    for (let i=0; i <= limit; i++){
        if (i % 2 === 0)  result.push(i + ' ' + label[0]);
        else  result.push(i + ' ' + label[1]);
    }

    console.log(result);
    return alert(result);
}

/**
 * The sum of the numbers multiple of 3 and 5
 *
 * @param limit
 */
function sumMultiple3And5(limit){
    let sum = 0;

    for (let i = 1; i <= limit; i++){
        if ((i % 3 === 0) || (i % 5 === 0)){
            console.log(i);
            sum+=i;
        }
    }
    //return sum;
    return alert (sum);
}


/**
 * right triangle following the {rows} parameter
 *
 * @param rows
 */
function show_stars(rows){

    if (rows>0){
        let triangle = "*\n";
        for (let i = 2; i <= rows; i++) {
            for (let j = 1; j <= i; j++) {
                triangle += "* ";
            }
            triangle += "\n";
        }
        return alert(triangle);
    }
    return alert("Impossible !!!");
}

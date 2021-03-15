/**
 * returns the maximum between the two numbers passed in parameter
 *
 * @param number1
 * @param number2
 * @returns {*}
 */
function max2number(number1, number2){
    return alert ((number1 > number2) ? number1 : number2);
    //return (number1 > number2) ? number1 : number2
}

/**
 * This function returns a value according to a criterion
 *
 * @param number
 * @returns {string|*}
 */
function fozz_bezz(number){
    if ((number % 5 === 0) && (number % 3 === 0)) return alert("<<FozzBezz>>"); //return "<<FozzBezz>>"
    if (number % 3 === 0) return alert("<<Fozz>>"); //return "<<Fozz>>"
    if (number % 5 === 0) return alert("<<Bezz>>");  //return "<<Bezz>>";

    return alert(number);
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

/**
 * display the list of prime numbers between 1 and the variable {limit}
 *
 * @param limit
 */
function printsPrimeNumbers(limit){
    let i = 2;
    let k = 2;
    let premiers = [];// contains prime numbers
    let max = limit;
    let ok = true;
    while(i <= max) {// test each number
        ok = true;// reset ok to true
        k = 2;// reset k to 2
        while(k < i && ok) {// test if i is divisible by k
            if(i % k === 0)// if i divided by k is integer
                ok = false;// i is not first
            k ++;// Increment k
        }
        if(ok)// if i is prime ...
            premiers.push(i);// we add i to the table
        i ++;
    }
    //console.log(premiers);
    return alert(premiers); //return premiers;
}

/**
 * I did not understand this excercise well. If possible, you can give me details to get back to it.
 * @param speed
 * @returns {string}
 */
function speedOfDrivers(speed){
    if (speed < 80) return "Ok";

}

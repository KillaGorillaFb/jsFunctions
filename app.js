/*
Developer:  Frankie Barrios
Date:       9/5/18

Purpose: Complete the following program 
so that the square1() and square2() functions
work properly.
*/


// Square the given number x
function square1(x) {
    // TODO: complete the function code
    x = Math.pow(x,2);
    return x;
}

// Square the given number x
const square2 = x => Math.pow(x,2)// TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

/************************/

for (let x = 0; x < 11; x++)
{
    console.log(square1(x));
}


const min = (x, y) => {
    if (x > y)
        return y;
    else if (x < y)
        return x;
    else if (x === y)
        return x;
}
console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9)); // Must show 9
console.log(min(1, 1)); // Must show 1
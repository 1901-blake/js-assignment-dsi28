/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    return someStr.split("").reverse().join("");
}
let str = 'problem 3';
console.log(reverseStr(str));
/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    if(someNum & 1 ==1){ // odd
        return false;
    }else return true;
}
console.log(isEven(8));
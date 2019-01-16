/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
   if(startIndex >=0 &&endIndex<=someStr.length  && startIndex<endIndex){
        return someStr.substring(startIndex,endIndex);
    }else{
       return 'input was incorrect';
    }
}
let str= 'hello';
console.log(substring(str,0,3));
/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
***removing element at given index.
*/
function spliceElement(someArr, index) {
    someArr.splice(index,1);
}
let someArr= [0,1,2,3];
spliceElement(someArr, 2);
console.log(someArr);
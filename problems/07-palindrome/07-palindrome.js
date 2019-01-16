/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    someStr = someStr.replace(/ /g, '');
    if(someStr === someStr.split("").reverse().join("")){
        return true;
    }else return false;
}
let pal= 'madam';
console.log(isPalindrome(pal));
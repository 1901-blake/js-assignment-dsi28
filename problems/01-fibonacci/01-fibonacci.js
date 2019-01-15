/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
   return (1/Math.sqrt(5)) *  ((Math.pow(((1+Math.sqrt(5))/2),n)) - (Math.pow(((1-Math.sqrt(5))/2),n)))
}
console.log('Fibo: '+fib(7));
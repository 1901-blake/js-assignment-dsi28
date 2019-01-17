/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
   //return Math.round((1/Math.sqrt(5)) * ((Math.pow(((1+Math.sqrt(5))/2),n))-(Math.pow(((1-Math.sqrt(5))/2),n))));
   let last = 0;
   let fibo =0;
   if(n === 0 || n===1){
      last = n;
      fibo = n;
   }else if(n>=2 ){
      last =1;
      fibo=1;
      for (let i = 2; i < n; i++) {
         let temp = fibo;
         fibo += last;
         last= temp;
      }   
   }
   return fibo;
}
console.log('Fibo: '+fib(0));
// const fibonacci = (n) => {
//     if(n<2) return n    //caso base
//     return fibonacci(n-2) + fibonacci(n-1) //caso recursivo
// }

// const fibonacci = n => {
//   const fib = [0, 1]
//   for (let i = 2; i <= n; i++) {
//     fib[i] = fib[i - 2] + fib[i - 1]
//   }
//   return fib[n]
// }

// console.time("fibo")
// console.log(fibonacci(0))
// console.log(fibonacci(1))
// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(5))
// console.log(fibonacci(8))
// console.log(fibonacci(40))
// console.timeEnd("fibo")


function reverseWords(str) {
    const array = str.split("")
    const arrayREverse = array.reverse("")
    return arrayREverse.join("")
    
}

console.log("el resultado es: ", reverseWords("hola mundo"));


const numeros: number[] = []
for(let i=10;i;i--) numeros.push(+prompt("ingrese un numero")!)
const positivos = numeros.filter(n => n > 0)
const negativos = numeros.filter(n => n < 0)

console.table([positivos,negativos]);
console.log("positivos",positivos.length)
console.log("negativos",negativos.length)











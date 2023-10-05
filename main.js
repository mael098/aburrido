function elminarRepetido(lista, N) {
    const reltado = []//
    const conteo = {}

    for (const num of lista){
        if(!conteo[num]){
            conteo[num] = 1
            reltado.push(num)
        }else if (conteo[num] < N) {
            conteo[num]++
            reltado.push(num)
        }
    }
    return reltado
}   


const lista = [1,2,3,4,5,6,7,8,9]

const N = 2

const reltado = elminarRepetido(lista, N)   

console.log(reltado);





// function numerobinario(n) {
//     const toString = (n) => n.toString(2);
//     const split = (n) => n.split("");
//     return split(toString(n));
// }
// console.log(numerobinario(6));


const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
}
console.log(binaryArrayToNumber([0, 1, 0, 1]));

function ordenarImparesAscendente(arr) {
    const imparesOrdenados = arr.filter(num => num % 2 !== 0).sort((a,b) => a-b)

    let i = 0
    const resultado = arr.map(num => {
        if (num % 2 !== 0) {
            return imparesOrdenados[i++]
        }
        return num
    })
    return resultado
    
}

console.log(ordenarImparesAscendente([7,1]));
console.log(ordenarImparesAscendente([5,8,6,3,4]));
console.log(ordenarImparesAscendente([9,8,7,6,5,4,3,2,1,0]));


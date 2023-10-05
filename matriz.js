const orden = [2,7,1,1,2,3]
var n = true
while (n) {
    n = false
    for (let index = 1; index < orden.length; index++) {
        if (orden[index] >= orden[index-1]) {
            continue
        }
        var temp = orden[index-1]
        orden[index-1] = orden[index]
        orden[index] = temp
        n= true    
        
        
    }
    
    
}
console.log(orden);
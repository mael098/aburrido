// function reverseWords(str) {
//     const array = str.split("")
//     const arrayREverse = array.reverse("")
//     return arrayREverse.join("")
    
// }

// console.log("el resultado es: ", reverseWords("hola mundo"));

class Pila {
     constructor() {
        this.pila1 = new Array()
        this.pila2 = new Array()
        this.pila3 = new Array()
     }
    PushPila1(elemento) {
        return this.pila1.push(elemento)
    }
    PushPila2(elemento){
        return this.pila2.push(elemento)

    }
    PushPila3(){
        return this.pila3.push(this.pila2.pop())
    }

    mostrarPila1(){
        return this.pila1
    }
    mostrarPila2(){
        return this.pila2
    }
    mostrarPila3(){
        return this.pila3
    } 

}
const pila = new Pila()

pila.PushPila1(1)
pila.PushPila1(2)
pila.PushPila1(3)


pila.PushPila2(4)
pila.PushPila2(5)
pila.PushPila2(7)

pila.PushPila3(8)
pila.PushPila3(9)
pila.PushPila3(10)

console.log(pila.mostrarPila1());
console.log(pila.mostrarPila2());
console.log(pila.mostrarPila3());
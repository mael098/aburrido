

class Stask {
  constructor(sezi) {
    this.sezi = sezi
    this.top = -1
    this.pila = new Array(sezi)
  }
  emply() {
    return this.top === -1
  }

  push(e) {
    if (this.top < this.sezi - 1) {
        this.top++
        this.pila[this.top] = e
    }
    else{
      console.log("pila llena");
       
    }
  }
}
const pila = new Stask(5)

pila.push(1)
pila.push(2)
pila.push(3)
pila.push(4)
pila.push(5)
pila.push(6)

console.log("la pila esta vacia", pila.emply());

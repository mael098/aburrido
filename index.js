class Stack {
  constructor(size) {
    this.size = size;
    this.top = -1;
    this.stack = new Array(size);
  }

  isEmpty() {
    return this.top === -1;
  }

  isFull() {
    return this.top === this.size - 1;
  }

  push(element) {
    if (!this.isFull()) {
      this.top++;
      this.stack[this.top] = element;
    } else {
      console.log("Pila llena");
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const poppedElement = this.stack[this.top];
      this.top--;
      return poppedElement;
    } else {
      console.log("Pila vacía, no se puede hacer pop.");
    }
  }

  mostrar() {
    if (!this.isEmpty()) {
      console.log("Elementos en la pila:");
      for (let i = 0; i <= this.top; i++) {
        console.log(this.stack[i]);
      }
    } else {
      console.log("La pila está vacía.");
    }
  }
}

const pila = new Stack(5);

pila.push(1);
pila.push(2);
pila.push(3);
pila.push(4);
pila.push(5);
pila.push(6);

console.log("La pila está vacía:", pila.isEmpty());

console.log("Elemento pop:", pila.pop());
console.log("Elemento pop:", pila.pop());

pila.mostrar();

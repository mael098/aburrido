import java.util.Arrays;

public class Stack {
    private int size;
    private int top;
    private int[] stack;

    public Stack(int size) {
        this.size = size;
        this.top = -1;
        this.stack = new int[size];
    }

    public boolean isEmpty() {
        return top == -1;
    }

    public boolean isFull() {
        return top == size - 1;
    }

    public void push(int element) {
        if (!isFull()) {
            top++;
            stack[top] = element;
        } else {
            System.out.println("Pila llena");
        }
    }

    public int pop() {
        if (!isEmpty()) {
            int poppedElement = stack[top];
            top--;
            return poppedElement;
        } else {
             System.out.println("Pila vacía, no se puede hacer pop.");
            return -1; // Valor de retorno de error
        }
    }

    public void mostrar() {
        if (!isEmpty()) {
            System.out.println("Elementos en la pila:");
            for (int i = 0; i <= top; i++) {
                System.out.println(stack[i]);
            }
        } else {
            System.out.println("La pila está vacía.");
        }
    }
    public static void main(String[] args) {
        Stack pila = new Stack(5);

        pila.push(1);
        pila.push(2);
        pila.push(3);
        pila.push(4);
        pila.push(5);
        pila.push(6);

        System.out.println("La pila está vacía: " + pila.isEmpty());

        System.out.println("Elemento pop: " + pila.pop());
        System.out.println("Elemento pop: " + pila.pop());

        pila.mostrar();
    }
}
// jdoodte.com/online-java-copilet/

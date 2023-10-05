import java.util.Stack;

public class PilaConPopPersonalizado<T> {
    private Stack<T> pilaPrincipal;
    private Stack<T> pilaAuxiliar1;
    private Stack<T> pilaAuxiliar2;

    public PilaConPopPersonalizado() {
        pilaPrincipal = new Stack<>();
        pilaAuxiliar1 = new Stack<>();
        pilaAuxiliar2 = new Stack<>();
    }

    public void push(T elemento) {
        pilaPrincipal.push(elemento);
    }

    public T pop() {
        if (!pilaPrincipal.isEmpty()) {
            T elemento = pilaPrincipal.pop();
            pilaAuxiliar1.push(elemento);
            pilaAuxiliar2.push(elemento);
            return elemento;
        } else {
            return null; // La pila está vacía
        }
    }

    public void moverAPila1() {
        while (!pilaAuxiliar1.isEmpty()) {
            pilaPrincipal.push(pilaAuxiliar1.pop());
        }
    }

    public void moverAPila2() {
        while (!pilaAuxiliar2.isEmpty()) {
            pilaPrincipal.push(pilaAuxiliar2.pop());
        }
    }

    public static void main(String[] args) {
        PilaConPopPersonalizado<Integer> miPila = new PilaConPopPersonalizado<>();

        miPila.push(1);
        miPila.push(2);
        miPila.push(3);

        System.out.println("Pila principal: " + miPila.pilaPrincipal);

        miPila.pop();
        miPila.moverAPila1();
        System.out.println("Pila principal después de mover a pila 1: " + miPila.pilaPrincipal);

        miPila.pop();
        miPila.moverAPila2();
        System.out.println("Pila principal después de mover a pila 2: " + miPila.pilaPrincipal);
    }
}
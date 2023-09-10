public class index {
    int top,size;
    int pila[];
    public index(int s){
        size = s;
        pila = new int[size];
        top = -1;
    }
    public boolean empty(){
        if (top == -1) {
            return true;
        }else {
            return false;
        }
    }
    public void push(int e){
        if (top < size-1) {
            top++;
            pila[top] = e;
        }else{
            System.out.println("Pila llena");
        }
    }


    public static void main(String[] args) {
     index pila = new index(5);
        pila.push(1);
        pila.push(2);
        pila.push(3);
        pila.push(4);
        pila.push(5);
        pila.push(6);
        pila.push(7);
        pila.empty();  
        System.out.println("la pila no esta vacia:" + pila.empty());    
          
    }
}
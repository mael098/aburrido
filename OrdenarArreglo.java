import java.util.Arrays;

public class OrdenarArreglo {
    public static void main(String[] args) {
        int[] arreglo = {5, 2, 9, 1, 5, 6};
        
        ordenarArreglo(arreglo);
        
        System.out.println("Arreglo ordenado: " + Arrays.toString(arreglo));
    }
    
    public static void ordenarArreglo(int[] arreglo) {
        Arrays.sort(arreglo);
    }
}

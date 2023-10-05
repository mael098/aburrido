public class main {

    public static void main(String[] args) {
        int [] a = {3,8,5,1,9};
        var r = true;
        while (r) {
            r = false;
            for (int i = 0; i < a.length-1; i++) {
                if (a[i] < a[i+1]) {
                    var aux = a[i];
                    a[i] = a[i+1];
                    a[i+1] = aux;
                    r = true;
                }
            }
        }
        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }
    }

        // dado un arreglo de 5 elementos de tipo entero  cuyos datos son 3 8 5 1  9
        // hacer el codigo para ordenarlos de mayor y menor
        
        

        

    
    
}

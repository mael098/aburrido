import java.util.Scanner;

public class index {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] nombres = new String[10];
        double[] estaturas = new double[10];

        for (int i = 0; i<10;i++){
            System.out.println("Ingrese el nombre de la persona"+(i+1));
            nombres[i] = sc.nextLine();
            System.out.println("Ingrese la estatura de la persona"+(i+1));
            estaturas[i] = sc.nextDouble();
            sc.nextLine();
        }
        System.out.println("la salida es nombre ----estatura");
        for(int i = 0; i<10;i++){
            System.out.println(nombres[i]+"----"+ estaturas[i]);
        }
    }
}

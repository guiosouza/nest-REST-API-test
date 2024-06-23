public class Program2 {
    public static void main(String[] args) {
        String sex = "ASD";
        int age = 67;

        if(sex.equals("masculino") || age >= 65) {
            System.out.println("APOSENTADO");
        } else { 
            System.out.println("NÃO É APOSENTADO");
        }
    }
}
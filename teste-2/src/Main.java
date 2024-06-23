public class Main {
    public static void main(String[] args) {
        // Arrays de sexos e idades
        String[] sexos = {"masculino", "feminino", "feminino", "masculino", "masculino", "feminino"};
        int[] idades = {74, 4, 13, 60, 19, 60};

        // Verificar categoria de cada pessoa
        for (int i = 0; i < sexos.length; i++) {
            String sex = sexos[i];
            int age = idades[i];
            verificarCategoria(sex, age);
        }
    }

    // Método para verificar categoria de uma pessoa
    public static void verificarCategoria(String sex, int age) {
        if (sex.equals("masculino") && age >= 65) {
            System.out.println("APOSENTADO");
        } else if (sex.equals("feminino") && age >= 60) {
            System.out.println("APOSENTADA");
        } else if (age >= 13 && age <= 18) {
            System.out.println("ADOLESCENTE");
        } else if (age < 13) {
            System.out.println("CRIANÇA");
        } else {
            System.out.println("ADULTO");
        }
    }
}

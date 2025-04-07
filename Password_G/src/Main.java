import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int digit = 0;
 
        while (true) {
            System.out.println("How long do you want your password to be (Characters)?");
            try {
                digit = input.nextInt();
                if (digit <= 0) {
                    System.out.println("Please enter a positive number greater than 0.");
                } else {
                    break;  
                }
            } catch (Exception e) {
                System.out.println("Invalid input! Please enter a whole number.");
                input.nextLine();  
            }
        }

        String lower_cases = "qwertyuiopasdfghjklzxcvbnm";
        String upper_cases = "QWERTYUIOPASDFGHJKLZXCVBNM";
        String symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

        StringBuilder password = new StringBuilder();
        for (int i = 0; i < digit; i++) {
            int rand = (int)(4 * Math.random());
            switch(rand) {
                case 0:
                    password.append((int)(10 * Math.random()));  
                    break;
                case 1:
                    rand = (int)(lower_cases.length() * Math.random());
                    password.append(lower_cases.charAt(rand));  
                    break;
                case 2:
                    rand = (int)(upper_cases.length() * Math.random());
                    password.append(upper_cases.charAt(rand));  
                    break;
                case 3:
                    rand = (int)(symbols.length() * Math.random());
                    password.append(symbols.charAt(rand)); 
                    break;
            }
        }

        System.out.println("Generated password: " + password);
        input.close();
    }
}

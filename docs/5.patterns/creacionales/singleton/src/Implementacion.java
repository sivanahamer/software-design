public class Singleton {
    private static Singleton instance;
    
    private Singleton() {
        // constructor privado
    }
    
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
    
    // Métodos adicionales de la clase Singleton
    
    public void doSomething() {
        System.out.println("Singleton: Haciendo algo...");
    }
}

public static void main(String[] args) {
    Singleton singleton1 = Singleton.getInstance();
    Singleton singleton2 = Singleton.getInstance();

    singleton1.doSomething(); // Output: Singleton: Haciendo algo...
        
    // Verificación de que singleton1 y singleton2 son la misma instancia
    if (singleton1 == singleton2) {
        System.out.println("Las instancias de Singleton son iguales");
    } else {
        System.out.println("Las instancias de Singleton son diferentes");
    }
}
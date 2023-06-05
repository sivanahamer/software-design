public class EagerInitializedSingleton {
    private static final EagerInitializedSingleton instance = new EagerInitializedSingleton();
    
    private EagerInitializedSingleton() {
        // constructor privado
    }
    
    public static EagerInitializedSingleton getInstance() {
        return instance;
    }
}

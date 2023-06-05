# Patrón Singleton

## Integrantes

Mauricio Delgado Leandro B82553

## Problema

El patrón Singleton es parte de los patrones creacionales. Se implementa para asegurarse que una clase tenga una única instancia y acceso global a dicha instancia.

Este patrón resuelve dos problemas al mismo tiempo, no cumpliendo con el principio de **Responsabilidad Única**:

1. Permitir una instancia única
1. Garantizar acceso global a esta instancia

## Solución

Para garantizar la implementación correcta del patrón singleton se deben cumplir dos requisitos:

1. Crear un constructor privado de la clase
1. Crear método getInstance() 

El método getInstance actuará como constructor de la clase y punto de acceso a la única instancia. La siguiente figura muestra el diagrama de una clase Singleton en la que se cumplen ambos requisitos. 

![Solucion Singleton](img/Solucion%20Singleton.jpeg)

## Ejemplos

### Tipos de Inicialización

Existen 4 tipos de inicialización de una clase singleton:

1. Eager/Impaciente
Acá se crea la instancia única sin saber si se necesita.
```java
public class EagerInitializedSingleton {
    // Se inicializa antes de saber si se necesita la instancia
    private static final EagerInitializedSingleton instance = new EagerInitializedSingleton();
    
    private EagerInitializedSingleton() {
        // constructor privado
    }
    
    public static EagerInitializedSingleton getInstance() {
        return instance;
    }
}
```
2. Clasica 
Esta implementación es la más común, se crea la instancia hasta que sea necesitada. Aunque puede dar problemas de concurrencia. 
```java
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
}
```
3. Thread Safe
Esta inicialización es la versión thread safe de la inicialización clásica. Se asegura que no existan problemas de concurrencia. 
```java
public class ThreadSafeSingleton {
    private static ThreadSafeSingleton instance;
    
    private ThreadSafeSingleton() {
        // constructor privado
    }
    
    public static synchronized ThreadSafeSingleton getInstance() {
        if (instance == null) {
            instance = new ThreadSafeSingleton();
        }
        return instance;
    }
}
```
4. Double Checked Locking
En esta inicialización se hace thread safe únicamente la creación de la instancia y se confirma dos veces en caso de que más de un proceso intente crear la instancia. Esta implementación es la menos frecuente.
```java
public class DoubleCheckedLockingSingleton {
    private static volatile DoubleCheckedLockingSingleton instance;
    
    private DoubleCheckedLockingSingleton() {
        // constructor privado
    }
    
    public static DoubleCheckedLockingSingleton getInstance() {
        if (instance == null) {
            synchronized (DoubleCheckedLockingSingleton.class) {
                if (instance == null) {
                    instance = new DoubleCheckedLockingSingleton();
                }
            }
        }
        return instance;
    }
}
```
### Ejemplo en java de un objeto singleton

```java
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
```
En el main podemos crear dos objetos que acceden a la instancia única del objeto. Luego comparamos estos objetos para asegurarnos que accedieron a la misma instancia.

```java
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
```

## Consecuencias

### Positivas 
1. Control de acceso concurrente
1. Un objeto singleton se instancia una única vez
1. Objeto disponible en un estado controlado
1. Puede implementar interfaces
1. Fácil de implementar

### Negativas
1. Resuelve dos problemas a la vez. No sigue el Single Responsibility Principle
1. Su estado siempre activo complica unit testing

## Implementación

Conexión singleton a una base de datos en java

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySQLDatabaseConnection {
    private static MySQLDatabaseConnection instance;
    private Connection connection;
    
    private final String url = "jdbc:mysql://localhost:3306/mydatabase";
    private final String username = "your-username";
    private final String password = "your-password";
    
    private MySQLDatabaseConnection() {
        // Constructor privado
    }
    
    public static MySQLDatabaseConnection getInstance() {
        if (instance == null) {
            instance = new MySQLDatabaseConnection();
        }
        return instance;
    }
    
    public Connection getConnection() {
        if (connection == null) {
            try {
                connection = DriverManager.getConnection(url, username, password);
                System.out.println("Conexión a la base de datos establecida.");
            } catch (SQLException e) {
                System.out.println("Error al establecer la conexión: " + e.getMessage());
            }
        }
        return connection;
    }
}

```

## Relación con otros patrones

1. Builder
1. Factory Method
1. Adapter
1. Decorator
1. Proxy
1. Observer


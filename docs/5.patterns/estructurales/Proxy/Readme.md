# Patrón Proxy
Daniel Lizano Morales C04285

Esteban Castañeda Blanco C01795

# ¿Qué es el patrón proxy?

El patrón Proxy es un patrón de diseño estructural que permite proporcionar un sustituto o placeholder para otro objeto. Este objeto sustituto actúa como intermediario entre el cliente y el objeto real, permitiendo al cliente interactuar con el objeto real a través del proxy.

## ¿Cuándo usar el patrón Proxy?

El patrón Proxy se utiliza en situaciones en las que se necesita un objeto más flexible o sofisticado que el objeto original. Este patrón se utiliza comúnmente en aplicaciones web para acelerar la carga de páginas web al utilizar un servidor proxy para almacenar en caché el contenido.

## Analogía de la vida cotidiana

Un ejemplo de la vida cotidiana que se asemeja al patrón Proxy es el uso de un asistente personal. Al igual que un proxy actúa como intermediario entre el cliente y el objeto real, un asistente personal actúa como intermediario entre una persona y sus tareas diarias. Al delegar ciertas tareas a su asistente personal, la persona puede enfocarse en tareas más importantes y complejas, de la misma manera en que el cliente puede interactuar con el objeto real a través del proxy sin preocuparse por los detalles de implementación. Además, al igual que un proxy puede proporcionar una capa adicional de seguridad al ocultar el objeto real del cliente, un asistente personal puede proporcionar una capa adicional de privacidad al manejar tareas delicadas y personales en nombre de su cliente.


## Estructura de clases del patrón Proxy

![Clases UML](/../Proxy/img/UML.png)


## Ejemplo de implementación del patrón Proxy en Java

```java
public interface Image {
    void display();
}

public class RealImage implements Image {
    private String fileName;

    public RealImage(String fileName){
        this.fileName = fileName;
        loadFromDisk(fileName);
    }

    @Override
    public void display() {
        System.out.println("Displaying " + fileName);
    }

    private void loadFromDisk(String fileName){
        System.out.println("Loading " + fileName);
    }
}

public class ProxyImage implements Image{
    private RealImage realImage;
    private String fileName;

    public ProxyImage(String fileName){
        this.fileName = fileName;
    }

    @Override
    public void display() {
        if(realImage == null){
            realImage = new RealImage(fileName);
        }
        realImage.display();
    }
}

public class ProxyPatternDemo {
    public static void main(String[] args) {
        Image image = new ProxyImage("test.jpg");

        // La imagen se cargará desde el disco
        image.display();
        System.out.println("");

        // La imagen no se cargará desde el disco
        image.display();
    }
}

```

En este ejemplo, la interfaz `Image` y la clase `RealImage` son la implementación real del objeto. La clase `ProxyImage` actúa como intermediario entre el cliente y el objeto real. Cuando se llama al método `display()` en `ProxyImage`, comprueba si el objeto `realImage` ya ha sido creado. Si no es así, crea un nuevo objeto `RealImage` y llama al método `display()` en el objeto `realImage`. Si el objeto `realImage` ya ha sido creado, llama directamente al método `display()` en el objeto `realImage`.

Aquí hay un ejemplo de implementación del patrón Proxy en Python:

```python
from abc import ABC, abstractmethod

class Image(ABC):
    @abstractmethod
    def display(self):
        pass

class RealImage(Image):
    def __init__(self, filename):
        self.filename = filename
        self.load_from_disk()

    def load_from_disk(self):
        print(f"Loading {self.filename}")

    def display(self):
        print(f"Displaying {self.filename}")

class ProxyImage(Image):
    def __init__(self, filename):
        self.filename = filename
        self.real_image = None

    def display(self):
        if self.real_image == None:
            self.real_image = RealImage(self.filename)
        self.real_image.display()

image = ProxyImage("test.jpg")

# La imagen se cargará desde el disco
image.display()
print("")

# La imagen no se cargará desde el disco
image.display()

```

En este ejemplo, la clase `Image` y la clase `RealImage` son la implementación real del objeto. La clase `ProxyImage` actúa como intermediario entre el cliente y el objeto real. Cuando se llama al método `display()` en `ProxyImage`, comprueba si el objeto `real_image` ya ha sido creado. Si no es así, crea un nuevo objeto `RealImage` y llama al método `display()` en el objeto `real_image`. Si el objeto `real_image` ya ha sido creado, llama directamente al método `display()` en el objeto `real_image`.

### Ventajas del patrón Proxy

- Mejora el rendimiento de la aplicación al reducir la cantidad de objetos que se crean.
- Proporciona una capa adicional de seguridad al permitir que el objeto real permanezca oculto del cliente.
- Permite una mayor flexibilidad en la implementación de objetos.
- Puede mejorar la escalabilidad de la aplicación al permitir que los objetos se creen bajo demanda.

### Desventajas del patrón Proxy

- Puede aumentar la complejidad del código al requerir la creación de múltiples clases.
- Puede introducir una sobrecarga innecesaria en la aplicación al requerir que se creen objetos adicionales.
- Puede reducir la legibilidad del código al introducir una capa adicional de abstracción.

### Casos de uso del patrón Proxy

- **Caché de objetos**: como se mencionó anteriormente, uno de los casos de uso más comunes del patrón Proxy es para cachear objetos en una aplicación web. El proxy actúa como intermediario entre el cliente y el objeto real, lo que permite que los objetos se almacenen en caché y se sirvan más rápido en el futuro.
- **Acceso remoto**: el patrón Proxy también se puede utilizar para permitir el acceso remoto a objetos. Por ejemplo, si necesita acceder a un objeto en una red remota, puede utilizar un proxy para actuar como intermediario entre el cliente y el objeto remoto.
- **Control de acceso**: el patrón Proxy también se puede utilizar para controlar el acceso a objetos. Por ejemplo, si tiene un objeto que solo debe ser accesible por ciertos usuarios, puede utilizar un proxy para controlar el acceso al objeto.
- **Sincronización de objetos**: el patrón Proxy también se puede utilizar para sincronizar objetos. Por ejemplo, si tiene un objeto que debe ser sincronizado en varias instancias de una aplicación, puede utilizar un proxy para garantizar que todas las instancias tengan acceso al objeto actualizado.
- **Lazy loading**: el patrón Proxy también se puede utilizar para implementar lazy loading. Por ejemplo, si tiene un objeto que es costoso de crear y no se necesita inmediatamente, puede utilizar un proxy para retrasar la creación del objeto hasta que sea necesario.

## Patrones de diseño relacionados

El patrón Proxy guarda similitudes con otros patrones de diseño estructurales, como los siguientes:

### El patrón Decorator

El patrón Decorator también se utiliza para proporcionar una capa adicional de funcionalidad a un objeto existente. Sin embargo, a diferencia del patrón Proxy, el patrón Decorator se utiliza para agregar funcionalidad a un objeto sin cambiar su interfaz. El patrón Decorator se utiliza comúnmente en situaciones en las que se necesita agregar funcionalidad a un objeto existente, pero no se desea modificar el objeto original.

### El patrón Adapter

El patrón Adaptater se utiliza para permitir que dos objetos con interfaces incompatibles trabajen juntos. Al igual que el patrón Proxy, el patrón Adapter actúa como intermediario entre el cliente y el objeto real. Sin embargo, a diferencia del patrón Proxy, el patrón Adapter se utiliza para permitir que dos objetos incompatibles trabajen juntos, en lugar de proporcionar una capa adicional de funcionalidad a un objeto existente.

### El patrón Facade

El patrón Facade se utiliza para proporcionar una interfaz simple y unificada a un conjunto complejo de clases. Al igual que el patrón Proxy, el patrón Facade actúa como intermediario entre el cliente y el objeto real. Sin embargo, a diferencia del patrón Proxy, el patrón Facade se utiliza para proporcionar una interfaz simple y unificada a un conjunto complejo de clases, en lugar de proporcionar una capa adicional de funcionalidad a un objeto existente.

Al igual que el patrón Proxy, estos patrones de diseño estructurales se utilizan para agregar funcionalidad a un objeto existente o para permitir que dos objetos incompatibles trabajen juntos. Sin embargo, cada patrón se utiliza en situaciones ligeramente diferentes y tiene sus propias ventajas y desventajas.

## Conclusión

El patrón Proxy es una herramienta poderosa para mejorar el rendimiento y la flexibilidad de las aplicaciones. Al utilizar el patrón Proxy, se pueden crear objetos más sofisticados y flexibles que los objetos originales, lo que permite a los desarrolladores crear aplicaciones más eficientes y escalables.


## Referencias

https://refactoring.guru/design-patterns/proxy#:~:text=Proxy%20is%20a%20structural%20design,through%20to%20the%20original%20object.

https://reactiveprogramming.io/blog/es/patrones-de-diseno/proxy


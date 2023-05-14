# Investigación de Diseño Abstract Factory

## Estudiantes:

Fabio Andrés Sanabria Valerín C07194

**Correo:** fasav12@gmail.com

Esteban Iglesias Vargas C03913

**Correo:** Esteban.iglesias@ucr.ac.cr


## **Concepto**

Abstract Factory es un patrón de diseño creacional que proporciona una manera de crear familias de objetos relacionados o dependientes sin especificar las clases concretas, es decir, este patrón proporciona una forma de encapsular un conjunto de objetos relacionados sin especificar la clase concreta de objetos que se crearán. [1]

Para entender mejor este patrón puede observar el siguiente diagrama creado por el ingeniero en software y creador de contenido Martin de Betta Tech en donde parece que se basó en el diagrama de GOF de Abstract Factory.

![Imagen Explicativa del Abstract Factory](./img/DiagramaAbstractYoutube.png)

|Diagrama 1. Diagrama explicativo de Abstract factory creado por BettaTech [2]|
| :----------: |


## **Nombres**

Abstract Factory, Kit, Kit de objetos, Kit de herramientas o Kit Pattern, este nombre se le atribuye debido a que se utilizan diversas herramientas abstractas para poder crear objetos concretos.[1]

## **Problema**

Existen diversos escenarios y contextos en donde se debe de utilizar este patrón para conseguir eficiencia, eficacia y mejoría en el diseño de un sistema, es por eso que es indispensable conocer este patrón y usarlo cuando:

1. Se necesita crear diferentes tipos de objetos, pero no se conoce con exactitud el tipo del objeto que se desea utilizar hasta llegar al tiempo de ejecución. Esto se puede lograr ya que el patrón Abstract Factory permite definir una fábrica/interfaz para crear objetos, pero delega la creación de los objetos concretos a las subclases. [1]

2. Se quiere asegurar que los objetos creados sean compatibles entre sí, ya que el patrón permite crear objetos pertenecientes de diferentes familias pero que están diseñados para lograr trabajar juntos y que sean coherentes entre ellos. [1]

3. Se necesita proporcionar una biblioteca de objetos para su uso por otros programas o sistemas y solo desea revelar las interfaces y no sus implementaciones. Esto se debe a que el patrón Abstract Factory es especialmente útil en la creación de bibliotecas de objetos reutilizables, ya que permite encapsular la lógica de creación de objetos y proporcionar una interfaz común para acceder a ellos. [1]

4. Se quiere tener una estructura flexible y extensible para la creación de objetos. El patrón de Abstract Factory permite agregar fácilmente nuevas familias de objetos al sistema sin tener que cambiar la estructura existente.

Para poder entender todo lo anterior de manera correcta se procederá a dar un ejemplo de cuándo y cómo se puede utilizar este patrón.

## **Ejemplo**

*Se requiere crear un nuevo sistema para el manejo de las plataformas universitarias de la UCR (correo institucional y mediación virtual). Cada plataforma tendrá diferentes tipos de componentes como usuarios, mensajes e iconos representativos, pero se desea que cada uno de esos componentes tengan una estructura similar y coherente entre cada plataforma, además permitir que el programa este modularizado y que permita modificaciones a futuro como agregar una nueva plataforma institucional (como por ejemplo ematricula). Para poder lograr lo anterior, se puede hacer uso del patrón Abstract Factory para crear familias de objetos relacionados para que estas puedan manejar de manera sencilla y eficaz los distintos componentes mencionados anteriormente.*

Para que el ejemplo anterior se pueda entender de una mejor manera, se creó un dibujo basado en el diagrama hecho por GOF en el libro Design Patterns sobre Abstract Factory:

![Diagrama del ejemplo](./img/DiagramaAbstractEjemplo.png)

|Diagrama 2. Diagrama macro del ejemplo anterior basado en diagrama de GOF|
| :----------: |

## **Relación con otros patrones**


El patrón Abstract Factory es una extensión del patrón **Factory**, ambos son muy parecidos y normalmente las personas los tienden a confundir ya que hacen funciones similares. La diferencia principal entre estos 2 es que el patrón Factory se centra en la encapsulación y creación de un objeto en específico, mientras que el patrón Abstract Factory se encarga de crear y encapsular familias de objetos relacionados o dependientes. Otros patrones que están relacionados con el patrón Abstract Factory son **el Singleton** y **el Prototype**.[1]


## **Solución** 

El cliente utiliza las fábricas abstractas para crear los objetos concretos, aunque no conoce las clases concretas que se utilizan, también la fábrica abstracta utiliza las clases concretas para crear objetos concretos, aunque no conoce cómo se crean:

**Abstract Factory** : Declara una interfaz en donde se crean los objetos abstractos relacionados, no tienen clase concreta.

- Relación: Es usado e implementado por la Concrete Factory y define los métodos de los productos abstractos.

**Concrete Factory** : Implementa la interfaz (Abstract Factory) en donde se crean los objetos concretos relacionados basados en los objetos abstractos del Abstract Factory. 

- Relación: Implementa o especifica los objetos y métodos abstractos creados por **Abstract Factory**

**Producto Abstracto** : Declara una interfaz para un tipo de objeto abstracto que son creados por la Abstract Factory.

- Relación: Es usado por el Producto Concreto y define los métodos que tiene que implementar.

**Producto Concreto** : Implementa la interfaz (Producto Abstracto) en donde se crean los objetos concretos para que sea creado por la fábrica (de objetos relacionados) correspondiente.

- Relación: Crea objetos concretos y es usado por la fábrica correspondiente al objeto relacionado.

**Cliente** : Usuario que usa solo las interfaces declaradas por las clases Fábrica Abstracta y Producto Abstracto.

## **Consecuencias**

Mediante la implementación de este patrón tenemos diferentes ventajas que logramos obtener y desventajas que tenemos que “pagar” por hacer uso del mismo, entre las que tendremos los objetivos logrados al realizar una implementación y los **trade-off**:

### **Objetivos**:

1. Crear familias para modularizar su creación y así separar objetos relacionados en una fábrica y los demás en otra respectivamente, permitiendo crear diferentes versiones de los objetos.

2. Permite escalabilidad y reutilización mediante la creación de nuevas fábricas sin modificar las existentes.

### **Trade-off**:

1. Aumento de la complejidad al aumentar el nivel de abstracción, aumenta la complejidad de código y de modificación.

2. Lograr crear interfaces bien definidas.

## **Implementación**

La idea de la lógica de la implementación de este patrón es crear fábricas (fábrica de familias) de fábricas (fábrica de objetos), entonces tendremos que tener ciertas notas a tener en cuenta para poder lograr una implementación exitosa.

### **Trampas, sugerencias o técnicas:**

1. Mantener modularidad entre familias: no mezclar distintas familias de productos en una misma abstract factory, al mezclarlas perdemos la esencia del patrón, lo que queremos es dividir la relación entre los productos para que los iguales se encuentren en un mismo lugar. Por lo tanto, la fábrica solo debe crear productos que sean de una misma familia de objetos.

2. Equilibrio entre las abstracción y la simplicidad: no mantener un equilibrio entre la abstracción puede llevarnos a problemas de complejidad y entendimiento del código y su funcionamiento, sobre todo si se realizan muchos niveles de abstracción, por lo que, haría difícil su mantenimiento, depuración e implementación de nuevas funcionalidades.

3. Tener bien definidas las interfaces para los productos y las fábricas: hay que tener en cuenta que las interfaces van a trabajar con productos, por lo que necesitan ser lo suficientemente genéricas para poder intercambiarlos entre diferentes de la misma familia. Igualmente pasa con las interfaces de fábrica, pero en un nivel superior, las interfaces tienen que ser capaces de poder intercambiar entre familias y poder mantener su capacidad de crear productos.

4. Siguiendo los principios **SOLID**, seguir el principio sobre *“single responsability”*: respetar las clases de la fábrica para que solo lleven a cabo una tarea, en caso de ser necesario crear otra clase en la fábrica que la cumpla.

5. Este patrón está bastante ligado a la herencia, usarla para crear fábricas y productos concretos y nuevamente, no mezclarlos.

## **Ejemplo en código**

Recuerda el ejemplo sobre mediación virtual que se planteó anteriormente, pues se logró implementar en C++ utilizando el patrón de Abstract Factory. 



Si desea ver el código y probarlo tenga en cuenta las siguientes indicaciones:

1. Utilizar Linux

2. Instalar C++ utilizando el comando **sudo apt install g++**

3. Luego poner el comando **sudo apt update**

4. Luego irese a la carpeta con el src y el makefile y hacer poner **make** en la terminal para compilar

5. Luego ejecute el código con ./bin/archivo.exe

### **Enlace para ver el código:**

[Carpeta con el código en C++"](./Ejemplo_en_C++/)

## Bibliografía

[1] Helm, R., Gamma, E., Vlissides, J., & Johnson, R. (2005). Design Patterns. Addison Wesley.

[2] BettaTech. (2020, 11 de marzo). ABSTRACT FACTORY | PATRONES de DISEÑO [Video]. YouTube. https://www.youtube.com/watch?v=CVlpjFJN17U
# Chain Of Responsibility

## Nombres
- COR
## PROBLEMA
Supongamos que tenemos una solicitud. Esa solicitud debe de pasar por diferentes niveles jerárjicos para establecer
quién o quiénes pueden manejarla. Una solución a este problema es la utilización del patrón Chain of Responsibility.

También, imaginemos que usted tiene un sistema de solicitudes, el cual puede ser manejado por diferentes Handlers.


![Sistema simple de manejadores](https://github.com/sivanahamer/software-design/assets/82900350/51610aee-23c5-48b3-a564-2a9d82748635)


*Figura 1. Elaboración propia*


Sin embargo su sistema crece demasiado y ocupa una solución que le provea flexibilidad. Es decir, que sea simple añadir
manejadores o remover. El patrón chain of responsibility es una excelente opción.


![Sistema complejo de solicitudes](https://github.com/sivanahamer/software-design/assets/82900350/887d6e73-22b2-4fc5-8c91-716834e2c1fa)


*Figura 2. Elaboración propia*


## SOLUCIÓN
Para dicho sistema, tal y como se mencionó, lo ideal es establecer una cadena de responsabilidad, en el cual, la solicitud se va pasando de manejador en manejador, hasta que
uno o varios, manejen la solicitud.


![Manejadores pasándose la solicitud](https://github.com/sivanahamer/software-design/assets/82900350/98c8d533-c05d-4db1-b512-0fd11004663a)



*Figura 3. Imagen tomada de Refactoring Guru*


Básicamente se establece una cadena de objetos encadenados. Cada objeto tiene la opción de manejar la solicitud o pasarla al siguiente objeto en la cadena. Esto reduce el acoplamiento, ya que el remitente solo necesita enviar la solicitud al primer objeto de la cadena, y cada objeto decide si puede manejarla o pasarla al siguiente objeto. Esto permite una mejor mantenibilidad y flexibilidad del código, ya que los objetos de manejo pueden agregarse o eliminarse sin afectar al remitente.

## Estructura


![Estrucutra de COR](https://github.com/sivanahamer/software-design/assets/82900350/43435f3f-72bd-40e4-9bf6-c85910cb843b)


*Figura 4. Imagen tomada de Gamma et al*

En sí, la estrucutra esta formada por los siguientes elementos:


* Una interfaz llamada Handler, la cual se utiliza como base para los concreteHandlers, establece el método HandleRequest() y un apuntador hacia su sucesor de tipo Handler.
* ConcreteHandlers, son los manjadores concretos, implementan la interfaz Handler.
* Cliente, es quien interactúa con la cadena enviando la solicitud.

## Ejemplo con la UCR: Sistema de Solicitudes
Imagine que la universidad tiene un sistema de solicitudes, la cual reparte las solicitudes entre todos sus órganos (Registro, Oficina de Becas,
Oficina de Bienestar y Salud, ...)


![Imagen del ejemplo de la UCR. Imagen 1](https://github.com/sivanahamer/software-design/assets/82900350/70e4e205-e673-465c-ba56-94d63bbd3c9e)


*Figura 5. Elaboración propia*

Sin embargo, cada vez que se cree un órgano en la institución, se deberá integrar en el sistema o bien, si uno cierra se deberá de eliminar, mismamente una solicitud
puede ser tratada por varios órganos a la vez. Por lo tanto una vía sencilla de manejar este sistema es por medio de la implementación del patrón: Chain of Responsibility.


![Imagen del ejemplo de la UCR. Imagen 2](https://github.com/sivanahamer/software-design/assets/82900350/53bfbf2a-d5aa-441f-9e5d-ef2e521dfe12)


*Figura 6. Elaboración propia*

El sistema principal sería el cliente, y cada uno de los órganos de la UCR, sería un concreteHandler.

## COLABORACIONES

El sistema de colaboración es muy sencillo. El cliente envía la solicitud y cada concrete Handler propaga la solicitud entre los sucesores.


![Colaboraciones en COR](https://github.com/sivanahamer/software-design/assets/82900350/da0c671c-8b71-4f8d-abe3-78fb55c84fb5)


*Figura 6. Elaboración propia*

## Implementación

A la hora de implementar una aplicación con un patrón de diseño chain of responsibility, se deben tomar en cuenta las siguientes consideraciones:

### Dos formas de implementar la cadena de sucesión

Hay dos principales variaciones a la hora de implementar la cadena de sucesión:
1. Crear nuevos links: es básicamente cuando no existe ningún tipo de relación entre los objetos de la cadena que se desea.
2. Usar links existentes: a veces, ya existe una jerarquía que define relaciones entre los objetos que se quieren relacionar, por lo que se pueden reutilizar estos links. Un ejemplo de esto son jerarquías de clases donde cada instancia tiene una propiedad parent, y yo puedo usar ese parent como referencia al sucesor.

### Conectar sucesores

Si no existe una relación entre clases que me permita crear una cadena, yo debo crearla manualmente. Esto significa que ahora el Handler no solo define una interfaz para los requests, sino que también tiene un sucesor. El tener este sucesor como atributo le permite tener una implementación default para el método de Handle. Entonces, si un ConcreteHandler no está interesado en manejar el request, simplemente no sobreescribe el método Handle, porque por default ya llama al sucesor a manejarlo.

<img width="597" alt="image" src="https://github.com/sivanahamer/software-design/assets/79823004/04526e2a-5f73-41d2-83e9-9cbeb7c08eb5">

### Representación de requests

Hay dos formas de manejar los requests a la hora de utilizar el patrón the chain of responsibility. La primera es hacer un método Handle para cada request posible. Esto es conveniente y muy seguro, sin embargo, es poco flexible, pues habría que crear un método por cada request.

La otra alternativa es más flexible pero más insegura. Se trata de crear un único método Handle llamado HandleRequest. A este método se le pasa el tipo de request como parámetro (ya sea como un entero, string, etc). El único requisito es que tanto el receptor como el emisor estén de acuerdo con el formato de request. Las desventajas son que ahora se necesita una lógica de ifs y no se puede asegurar que el parámetro que se pase sea de un tipo de datos correcto.

Una solución a este problema del tipado del parámetro es crear una clase abstracta Request, que va a ser heredada por los diferentes tipos de requests. Finalmente, se pasa un puntero de un objeto Request al método HandleRequest y este lo desempaca dependiendo del tipo de request que sea (el tipo de request se obtiene al agregar un método a la clase Request que retorne el tipo).

<img width="599" alt="image" src="https://github.com/sivanahamer/software-design/assets/79823004/4774ec8a-b496-4805-922a-2eb308bdea3f">

## Ejemplo en código

Supongamos que se quiere programar un ATM. Este por dentro tiene la capacidad de dispensar 3 tipos de billetes: 50$, 20$ y 10$. Para cada tipo de billete hay un dispensador diferente. Entonces, por dentro del ATM se tiene un dispensador de 50$, uno de 20$ y uno de 10$. Por convención, el ATM quiere dispensar la menor cantidad de billetes posibles, o sea, entre más grande el billete, mejor. Para eso, el sistema debería primero dispensar billetes de 50$, luego de 20$ y finalmente de 10$. Esto empieza a sonar como una cadena de responsabilidades. Lo que se quiere entonces es que el primer dispensador siempre sea el de 50$. Y conforme sea necesario, vaya bajando en la cadena hasta que termine en los billetes más pequeños. Se tiene entonces el siguiente código:

Se crea una clase wrapper para el monto solicitado:

<img width="466" alt="image" src="https://github.com/sivanahamer/software-design/assets/79823004/c9042efe-df9b-4e73-bcf2-0578ef8c819f">

Ahora, se crea la clase que va a servir como Handler y cuyos hijos serán los Handlers concretos. Esta va a tener el método para definir su sucesor y el método para procesar el request.

<img width="594" alt="image" src="https://github.com/sivanahamer/software-design/assets/79823004/6da5a4f1-49fd-422f-92ef-7b5df5268940">

Ahora se realizan las 3 clases de ConcreteHandlers, que corresponden a los 3 dispensadores. Cada una sobreescribe los dos métodos anteriores:

<img width="602" alt="image" src="https://github.com/sivanahamer/software-design/assets/79823004/99583905-c949-4b7e-a4f9-b60fee1413f8">

<img width="598" alt="image" src="https://github.com/sivanahamer/software-design/assets/79823004/177a4950-9c44-44ff-8617-0ae0eed57252">

<img width="598" alt="image" src="https://github.com/sivanahamer/software-design/assets/79823004/706f9400-aeef-40bf-aa54-d8c58d8816f6">

Y finalmente, se crea la cadena y se configura el orden de la misma:

<img width="601" alt="image" src="https://github.com/sivanahamer/software-design/assets/79823004/95c23d17-ec84-49bb-8974-58178f2490e6">

## Consecuencias

### Malas

El recibimiento de los requests no está garantizado: Como no hay un receptor explícito, no hay garantía de que un request vaya a ser manejado. Puede ser que se caiga al final de la cadena y nunca fue manejado por nadie. Esto también puede pasar si no se configura bien la cadena.

### Buenas

Menos acoplamiento: Este patrón libera al objeto de tener que saber a quién le manda el request, cómo funciona la cadena de responsabilidades, o cómo está estructurada. Ningún objeto sabe de la existencia del otro, solo sabe que si él no puede manejar un request, el sucesor puede que sí.

Flexibilidad al asignar responsabilidad a los objetos: El orden de responsabilidades es muy flexible, tanto que se puede alterar en tiempo de ejecución. Y las responsabilidades se pueden distribuir entre objetos muy fácilmente.

## Relación con otros patrones

### Composite

En Composite, el parent de un componente puede actuar como su sucesor, al igual que en ciertos casos con Chain of Responsibility.

## Principios SOLID

| Principio          | Descripción                                                                                   |
|--------------------|-----------------------------------------------------------------------------------------------|
| Single Responsibility      | Cada handler en la cadena tiene una única responsabilidad, que es manejar un tipo específico de mensaje.               |
| Open/Close Principle    | El patrón permite extender el comportamiento de la cadena agregando nuevos handlers sin modificar los existentes.   |
| Liskov’s Substitution Principle | Los handlers pueden ser sustituidos por subclases o implementaciones concretas sin alterar el funcionamiento del patrón.   |
| Dependency Inversion   | Permite que los clientes dependan de abstracciones (interfaz de handler) en lugar de depender de implementaciones concretas.     |

## Principios de Diseño asociados

El patrón de Chain of Responsibility (COR) se relaciona con los siguientes patrones de diseño de software:

1. **KISS** (Keep It Simple, Stupid): COR permite mantener la simplicidad al evitar acoplamientos innecesarios entre el remitente de una solicitud y los objetos que pueden manejarla, lo que facilita la comprensión y el mantenimiento del código.

2. **OOP** (Object-Oriented Programming): COR se basa en los principios de la programación orientada a objetos, como la encapsulación y la abstracción, al separar el procesamiento de una solicitud en objetos independientes y permitir que se agreguen o modifiquen.

3. **DRY** (Don't Repeat Yourself): COR promueve la reutilización del código al permitir que múltiples objetos en la cadena manejen diferentes aspectos de una solicitud sin duplicar la lógica en cada uno de ellos, evitando así la repetición y mejorando la mantenibilidad.



 ## Bibliografía

Gamma, Erich et.al. “Design Patterns”. Addison-Wesley, 1995.

Refactoring.Guru. (2023). Chain of Responsibility. Refactoring.Guru. https://refactoring.guru/design-patterns/chain-of-responsibility

Pankaj. (2022). Chain of responsibility design pattern in java. Digital Ocean. https://www.digitalocean.com/community/tutorials/chain-of-responsibility-design-pattern-in-java

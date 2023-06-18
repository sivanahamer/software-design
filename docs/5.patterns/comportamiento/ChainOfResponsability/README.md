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






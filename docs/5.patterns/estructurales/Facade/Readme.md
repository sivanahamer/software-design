# Facade

<img src="./img/Facade.png" alt="Facade"/>

## Descripción
Facade es un patron de software que simplifica el acceso a un sub sistema en un programa, donde el codigo cliente de este sub sistema en vez de usar los distintos componentes del sistema directamente, utiliza una "Fachada" la cual representa todo el sub sistema, lo que es capaz de convertir multiples lineas de inicializacion, orquestracion y manejo de dependencias, en un simple llamado a una funcion

# Qué soluciona
* Subsistemas complejos
* Programas monolíticos
* Mal escalado de código.


## Beneficios
Facade en el desarrollo de software es algo muy importante para hacer codigo 
* Entendible
* Cohesivo
* Desacoplado
* Escalable
Las razones por las que estos beneficios se cumplen son por:
* Dar una estructura sencilla
* Permitir concentrar las funcionalidades de un mayor nivel en la Fachada 
* Ser el unico componente que interactua con el codigo cliente
* Mantener los cambios en el sub sistema y no cada vez que un codigo cliente utilizo algunos componentes del sub sistema

### Diferencia entre Facade y API
Si bien las API y el patron Facade se parecen, no significa que sean lo mismo, siendo concretos, Facade solo se encarga de agrupar un subsistema en una clase y hacerse cargo de todas sus funciones, mientras que una API (Application **Programming** Interface), se encarga de mucho mas, porque necesita definir la interaccion con un programa externo, esto se traduce a definir protocolos de interaccion, reglas y las funciones con las que dispone el otro programa
Una API puede contener un Facade pero no viceversa

## Perjuicios de Facade
Estos son posibles perjuicios que Facade puede ocasionar en el codigo dependiendo de la implementacion, causando mas problemas que soluciones, estos son:
* Funcionalidad limitada
Ya que Facade ahora se encarga de interactuar con el codigo cliente unicamente, la variedad de funciones que el sub sistema ofrecia es reducida sustancialmente, como en sub sistemas que no siguen una secuencia normal de funcionamiento
* Acoplamiento
Ya que el Facade es el unico que interactua con codigo cliente, este codigo tiene que acoplarse a lo que el Facade del sub sistema ofrezca y adaptarse a su modo de uso, donde si este modo de uso se cambia frecuentemente, se genera dificultad en el codigo
* Apertura de malas practicas
La simpleza por la que Facade se rige puede dar a pie una "creatividad peligrosa" por parte del desarrollador, donde ahora este Facade empieza a hacer funcionalidades extras que no le competen para cumplir su rol, o tambien implementar nuevas funciones directamente en el Facade en vez de un componente, bajando la cohesion del codigo

## Cuando utilizar Facade

El patrón Facade se debe utilizar cuando se desea simplificar la interacción con un sub-sistema complejo y proporcionar una interfaz unificada y fácil de usar para los clientes.
Casos: Cuando se tiene un sub-sistema complejo, cuando se busca una interfaz más intuitiva y fácil de usar, cuando se desea simplificar el mantenimiento.

## Cuando no utilizar Facade
Cuando se necesita un alto grado de flexibilidad, cuando el sub-sistema cambia con frecuencia, cuando se necesita acceso a funcionalidades avanzadas del subsistema.

# Relación con los principios SOLID
El patrón Facade se relaciona con el principio de responsabilidad única, ya que permite que cada sub-sistema complejo tenga una única responsabilidad y se encargue de realizar sus tareas específicas. Además, se relaciona con el principio de abierto/cerrado, ya que permite que el código cliente no se vea afectado por los cambios en el sub-sistema, ya que el Facade se encarga de realizar las modificaciones necesarias. Por último, se relaciona con el principio de sustitución de Liskov, ya que el Facade permite que el código cliente pueda utilizar los sub-sistemas de forma transparente, sin importar el sub-sistema que se esté utilizando.

# Patrones relacionados
* Composite
* Decorator
* Proxy
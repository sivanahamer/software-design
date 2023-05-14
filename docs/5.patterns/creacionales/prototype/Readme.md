# PROTOTYPE

## Introducción:

El patrón Prototype pertenece a los patrones creacionales.
Uno de los mejores analogías que explican el patrón creacional de prototype es el de la mitosis celular. La mitosis es un proceso fundamental para la vida. Durante la mitosis, una célula duplica todo su contenido, incluyendo sus cromosomas, y se divide para formar dos células hijas idénticas. 

## Problema: 

Describir en qué escenario o contexto en específico en donde tiene sentido utilizar este patrón, con ejemplo
Dada la complejidad de ciertos objetos, se vuelve necesario agregar un método de clonado. De esta manera, podemos obtener una copia del objeto, sin tener que crearlo nuevamente desde cero. Por ejemplo, para obtener el promedio ponderado en ematricula, un objeto de la super-clase Promedio, puede contener la lista de cursos con su respectiva nota, cuando se crea una instancia del mismo, se calcula el promedio iterando por todos los cursos y sus notas. Además, hay diferentes promedios (PromedioPonderadoAnual, PromedioPonderadoTotal, PromedioPonderadoParaMatrícula). Dado que esta operación resulta costosa, pues debe obtener todos los cursos de un estudiante y recorrerlos para hacer la operación matemática relacionada al promedio. Este escenario para un solo estudiante, una sola vez, no representa mayor problema. Sin embargo, en período de matrícula la cantidad de estudiantes accediendo a e-matrícula y consultando sus promedios e historial de los mismos se incrementa considerablemente. Las peticiones al servidor para obtener esta información incrementan considerablemente. De esta forma, la instanciación del objeto Promedio, sobrecarga al sistema debido a su alto costo. 

## Solución: 

Estructura de la solución incluyendo los elementos, sus relaciones, responsabilidad y colaboraciones. Además, vienen en formato de plantilla dado que no describen un diseño o implementación en particular.
Para evitar tener que invertir tanto tiempo para acceder a esta información, hacemos que las clases implementen una interfaz llamada Clonable, y cada vez que un estudiante solicite cualquier promedio, la primera vez que lo solicite se crea una instancia y se guarda en una estructura de datos que relacione la instancia del Promedio con un id (aka carne estudiantil y el nombre del promedio unidos). Con esto, la próxima vez que el usuario requiera de esta información el sistema de e-matrícula accederá un object Store (aka cache) que mantiene una instancia del promedio y que devuelve una copia del mismo al estudiante.

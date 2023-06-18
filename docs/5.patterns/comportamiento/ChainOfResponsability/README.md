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
[Manejadores pasándose la solicitud](https://github.com/sivanahamer/software-design/assets/82900350/07458ee4-a6ee-4372-9c93-fc502d557e7b)






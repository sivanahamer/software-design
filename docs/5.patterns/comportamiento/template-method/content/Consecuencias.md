# Consecuencias
## Ventajas
* Puede permitir que los clientes anulen solo ciertas partes de un algoritmo grande, de modo que se vean menos afectados por los cambios que ocurren en otras partes del algoritmo. 
* Puede extraer el código duplicado en una superclase. 
* Cumple el principio DRY al evitar la duplicación de código.

(Shvets, A, 2019, p.392) 

## Desventajas
* Algunos clientes pueden estar limitados por el esqueleto proporcionado por un algoritmo. 
* Puede violar el principio de Liskov Substitución al suprimir la implementación de un paso predeterminada a través de una subclase. 
* Los métodos plantilla tienden a ser más difíciles de mantener cuantos más pasos tienen.

(Shvets, A, 2019, p.392) 


[Regresar al Readme](./../README.md)
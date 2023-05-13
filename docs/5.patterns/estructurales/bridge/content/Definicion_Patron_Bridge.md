# Patrón Bridge
También conocido como **Handle/Body**.

Formalmente se define como un patrón de diseño estructural que proporciona un desacoplamiento de una abstracción de su implementación para permitir que ambas puedan desarrollarse y modificarse de forma independiente. 

(Gamma, E., 1994, p.151).

Una abstracción puede tener una de varias implementaciones posibles, por lo que normalmente se recurre a la herencia para este fin. Una clase abstracta define la interfaz de la abstracción y las subclases concretas la implementan de diferentes maneras. Sin embargo, este enfoque no es lo suficientemente flexible, dado que la herencia relaciona una implementación a la abstracción de forma permanente, lo cual provoca problemas al desear modificar, ampliar y reutilizar abstracciones e implementaciones de forma independiente, de modo que se genera un alto acoplamiento entre estos elementos. 

(Gamma, E., 1994, p.151)

Por lo que, el patrón Bridge es implementado cuando dos elementos de software se encuentran inherentemente relacionados, no obstante, debido a los requerimientos del sistema es necesario que al menos uno de ellos sufra algún cambio a lo largo del ciclo de vida del sistema.

[Regresar al Readme](./../README.md)
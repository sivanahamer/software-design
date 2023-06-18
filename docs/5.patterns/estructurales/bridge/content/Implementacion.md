# Implementación
Para implementar el patrón Bridge debemos tener en cuenta las siguientes sugerencias y técnicas.

- Identificar las diferentes dimensiones independientes en nuestra clase por anticipado, esto nos permite desarrollar partes de una aplicación de forma independientes entre sí. 
- Determinar las operaciones que va a necesitar el cliente y definirlas en la interfaz Abstraction.
- Establecer las operaciones que estarán disponibles para todas las plataformas y declarar las que necesitan la abstracción en la interfaz Implementor.
- Crear las clases ConcreteImplementor asegurándonos de seguir la interfaz del Implementor.
- Dentro de la clase Abstraction agregar un campo que referencia al Implementor, esto va a generar que la clase Abstraction delegue la mayor parte del trabajo al Implementor.
- En el caso de que se tengan muchas variantes de lógica de alto nivel, se deben crear las clases RefinedAbstraction para cada variante extendiendo la clase base Abstraction.

[Regresar al Readme](./../README.md)
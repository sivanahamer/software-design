## Ventajas
- Separa  interfaz  e  implementación:  Una implementación  de  una  abstracción no  está  permanentemente  confinada  a  una  interfaz,  ya  que  puede  ser configurada en tiempo de ejecución.  Además,  un  objeto  tiene  la  posibilidad de  cambiar  su  implementación  en  tiempo de ejecución. 

- Desacopla las clases Abstraction e  Implementor:  provoca que  se  elimine  en  tiempo  de compilación las dependencias sobre una clase de implementación.
Mejora  la extensibilidad:  se  puede  extender  en  forma  independiente  las jerarquías de Abstraction e Implementor. 

- Oculta a los clientes los detalles de implementación: Se puede proteger a los clientes de los detalles de implementación.

(Sandra, A  y Perez, V, 2007, p.61)

## Desventajas
- Aparece un nivel adicional de direccionamiento indirecto: El patrón logra flexibilidad al introducir un nivel adicional de direccionamiento indirecto (El Implementor es la clase que fue delegada por el Abstraction de realizar la implementación), lo que hace que el Abstraction dependa de un objeto Implementor.

(W3sdesign, s.f)

[Regresar al Readme](./../README.md)
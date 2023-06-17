# Patrón Memento o Patrón Token

**Estudiantes**:

- Julio Rodroguez Salguera C16717
- Geancarlo Rivera Hernández C06516

## Tabla de Contenidos

- [Patrón Memento o Patrón Token](#patrón-memento-o-patrón-token)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Problema](#problema)

***

## Problema

El patrón Memento es muy útil cuando se necesita preservar el estado de un objeto, componente o sistema sin comprometer su encapsulación. Es decir, el patrón Memento se utiliza para restaurar un objeto a un estado anterior, lo que resulta muy beneficioso para corregir errores o implementar un historial de versiones. Una característica importante de este patrón es que protege la encapsulación de los objetos, ya que la interfaz para modificar el estado guardado solo puede ser accedida por la clase que lo creó, siendo inaccesible y opaca para las demás clases.

Este patrón es especialmente útil cuando se necesita recordar y restaurar el estado de un objeto en un momento específico. Imaginemos que estamos trabajando en una aplicación y deseamos implementar la función "deshacer". En lugar de guardar múltiples copias del estado actual, el patrón Memento permite almacenar solo ciertos estados de un objeto "Originator" en estructuras llamadas "Memento".

Un ejemplo interesante que ilustra el uso del patrón Memento se encuentra en la plataforma de Correo Institucional de la Universidad de Costa Rica. Al redactar un correo, existe la posibilidad de volver al estado previo al presionar la combinación de teclas "Ctrl + z". Por ejemplo, es posible regresar del texto "Buenas tardes profesor!" (**Figura 1**) al texto previo "Buenas tardes" (**Figura 2**), que fue el último estado almacenado gracias al patrón Memento.

![estadoActual](./images/estadoActualCorreo.svg)

FIGURA 1: Estado actual del correo (Captura del Corre Universidad de Costa Rica)

![estadoAnterior](./images/estadoAnteriorCorreo.svg)

FIGURA 2: Estado anterior del correo

![estadoInicial](./images/estadoInicialCorreo.svg)

FIGURA 3: Estado inicial del correo

Además, en el sistema de Correo Institucional, no solo es posible regresar al estado anterior al actual, sino que también se tiene la opción de regresar al estado inicial del correo si se continúa utilizando la acción "Ctrl + z" (**Figura 3**) de manera consecutiva. Esto permite retroceder y restaurar el texto al punto en el que se comenzó a redactar el correo.

[Volver al índice](#tabla-de-contenidos)
***

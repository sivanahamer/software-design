# Patrón Memento o Patrón Token

**Estudiantes**:

- Julio Rodroguez Salguera C16717
- Geancarlo Rivera Hernández C06516

## Tabla de Contenidos

- [Patrón Memento o Patrón Token](#patrón-memento-o-patrón-token)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Problema](#problema)
  - [Solución](#solución)

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

## Solución

El patrón Memento utiliza y se basa en tres componentes principales para definir e implementar su estructura, que pueden ser observados en el diagrama UML de la **Figura 4**:

![umlMemento](./images/DiagramaUMLMemento.svg)

FIGURA 4: Diagrama UML del patrón de comportamiento Memento

**Memento**
La clase Memento es responsable de almacenar la información del estado en un momento específico del componente *Originator*, conocido comúnmente como *snapshot*. Contiene toda la información necesaria para restaurar versiones anteriores de manera precisa. Estos objetos Memento se guardan en una estructura de datos en el componente *Caretaker*. Es importante destacar que el acceso a los datos del Memento se limitan únicamente al componente *Originator*, ya que éste utiliza los datos para recuperar estados anteriores (Haythornwaite, 2002, p. 285).

**Originator**
El Originator es la clase de la cual se toma el *snapshot* que se almacena en los objetos *Memento*. Es el componente que contiene el estado actual del sistema y utiliza objetos *Memento* para recuperar estados anteriores (Haythornwaite, 2002, p. 165). Esta clase interactúa directamente con los objetos *Memento*, ya que necesita leer su contenido para restaurar sus datos.

**Caretaker**
El Caretaker es el componente encargado de almacenar los *snapshots*, es decir, los objetos *Memento*. También es responsable de implementar las interfaces que permiten al cliente indicar a la clase *Originator* guardar el estado actual o volver a un estado anterior específico. Este componente no interactúa directamente con los objetos Memento ni puede acceder a su información, simplemente los almacena (Haythornwaite, 2002, p. 165).

**Interacción entre los componentes**
En el patrón Memento, los componentes interactúan de la siguiente manera: el cliente por medio de la interfaz Caretaker solicita al Originator guardar su estado actual, por lo que el Originator crea un nuevo objeto Memento y se lo devuelve al Caretaker para que lo almacene. Cuando el cliente solicita volver a un estado anterior, el Caretaker proporciona al Originator el estado deseado que está almacenado en el Memento. El Originator toma el *snapshot* del estado y lo aplica, volviendo al estado previo. Esto permite ocultar la implementación y los datos del Memento y del Originator a clases externas.

[Volver al índice](#tabla-de-contenidos)
***

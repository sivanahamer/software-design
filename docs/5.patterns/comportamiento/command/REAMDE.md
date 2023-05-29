# Patrón Command

Para ver una presentación en formato `pdf` descargue el archivo [command.pdf](./command.pdf)

## 1. Integrantes

- Ángel Chaves Chinchilla C12113  
angel.chaveschinchilla@ucr.ac.cr

- Camilo Suárez Sandí C17811
camilo.suarez@ucr.ac.cr

## 2. Descripción

El patrón *Command* puede ser clasificado como un patrón de comportamiento, esta clasificación corresponde a una de las tres categorías descritas por la “Gang of Four” en su libro de Design Patterns. De acuerdo a estos autores:
> "El patrón Command encapsula una solicitud como un objeto, lo que le permite parametrizar otros objetos con diferentes solicitudes, poner en cola o registrar solicitudes y admitir operaciones que se pueden deshacer."

Para entenderlo mejor, podemos utilizar una analogia de la vida real, por ejemplo, imaginemos que estamos en un restaurante. El proceso para ordenar la comida no involucra tener un contacto directo, es decir, no hacemos lo siguiente:

[PONER IMAGEN]

Si no que primero tenemos un contacto con el mesero al cual le indicamos los parámetros de nuestra orden y el mesero es el encargado de llevar nuestra orden al chef el cuál sabe ejecutarla. Veámolo en la siguiente secuencia:

[Poner imagen]

De esta forma, nosotros nos desentendemos de la orden (o solicitud), la encapsulamos utilizando al mesero y el chef se encarga de ejecutarla.

Ahora supongamos que además de nosotros, hay una familia entera también solicitando la comida. El mesero lleva la solicitud mía y la de la familia al chef. Pero el chef no puede procesarlas aún, entonces están se ponen en espera, se colocan en una cola para que después sean procesadas.

[Poner imagen]

Además pensemos en que la comida que nos trajeron no fue lo que pedimos, podríamos pedirle al chef (mediante el mesero) que por favor nos haga una nueva (proceso de deshacer y hacer una nueva).

# Problema

# Solución

# Ejemplo en código

# Implementación

## Aplicabilidad

* Cuando se desee parametrizar objetos con operaciones: El patrón Command puede convertir una llamada de método específico en un objeto independiente. Este cambio abre muchos usos interesantes: puede pasar comandos como argumentos de método, almacenarlos dentro de otros objetos, cambiar comandos vinculados en tiempo de ejecución, etc.

Por ejemplo, en una aplicación de edición de imágenes le asignaríamos a cada botón un comando específico en el momento de su creación. Pero también podríamos cambiarle este comando por uno más especializado.

[Ejemplo editor imagen]

* Utilice el patrón Command cuando desee poner en cola operaciones, programar su ejecución o ejecutarlas de forma remota. Por ejemplo, si en el sistema de Correo UCR quisieramos dar la oportunidad a los usuarios de programar el envío de correos cada cierto tiempo, o que la papelera se vacíe pasados unos días, ...., podríamos poner nuestroa comandos en una cola de espera y se ejecuten después de un tiempo. Para esto se requiere conocer el paradigma de programación orientado a eventos.

[Agregar imagen correo]

* Utilice el patrón Command cuando desee implementar operaciones reversibles.

# Consecuencias

## Ventajas

## Desventajas

# Principios de diseño

# Relación con otros patrones

# Referencias


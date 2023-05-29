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

# Consecuencias

## Ventajas

## Desventajas

# Principios de diseño

# Relación con otros patrones

# Referencias


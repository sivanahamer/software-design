# Patrón Builder

## 1. Integrantes

- Ángel Chaves Chinchilla C12113  
angel.chaveschinchilla@ucr.ac.cr

- Camilo Suárez Sandí C17811
camilo.suarez@ucr.ac.cr

## 2. Descripción

El patrón *Builder* puede ser clasificado como un patrón creacional, esta clasificación corresponde a una de las tres categorías descritas por la “Gang of Four” en su libro de Design Patterns. Y es que de acuerdo a Hunt (2013):
> "Los patrones creacionales proporcionan orientación sobre la creación de objetos. Ayudan a ocultar los detalles de la creación de instancias del objeto del código que usa esos objetos. Es decir, hacen un sistema independiente de cómo se crean, componen y representan sus objetos."

El autor continúa explicando que este patrón separa la construcción de un objeto complejo de su uso. Por lo tanto, el cliente puede especificar qué tipo de objeto se requiere y cuál podría ser su contenido, pero nunca necesita saber cómo se construye e inicializa ese objeto.

## 3. Problema

En algunas situaciones, puede ser necesario que haya **flexibilidad** en la forma en que se construye un objeto complejo y, en algunos casos, se flexibiliza el objeto exacto en si debido a que existen objetos que requieren una inicialización laboriosa y paso a paso de muchos campos y objetos anidados. Tal código de inicialización generalmente está enterrado dentro de un **constructor monstruoso** con muchos parámetros. O peor aún: dispersos por todo el código del cliente. (Refactoring Guru, s.f.)

**Figura 1:** Clase Form con distintas subclases

![Clase Form con distintas subclases](./img/subclasses.drawio.svg)

Por ejemplo, pensemos en una clase `Form` (Formulario) utilizada para obtener información genérica de los estudiantes, como su nombre, cédula, correo o edad. Pero en caso de querer un formulario para algo en específico, como un `ScolarshipForm` (Formulario de becas) que incluye también datos económicos; ingresos y gastos del núcleo familiar por ejemplo, podríamos pensar en crear subclases de la clase `Form` combinando los distintos atributos. Sin embargo, eventualmente se tendrá un conjunto numeroso de clases y cada vez que se quiera agregar un nuevo atributo, la jerarquía de clases va a crecer.

**Figura 2:** Constructor monstruoso para Form

![Constructor monstruoso para Form](./img/monster_constructor.drawio.svg)

También podríamos pensar en una solución que no incluya la creación excesiva de subclases, podríamos tener una clase `Form` que contenga todos los posibles atributos, y que dichos atributos se especifiquen en el constructor del objeto mediante sus parámetros. Aparte de ser una práctica poco recomendada, muchos de estos atributos pueden estar en desuso dependiendo del contexto.

## 4. Solución

El patrón *Builder* mueve el código de construcción de los objetos a otras clases llamadas *builders*.

**Figura 3:** Pasos a seguir al construir

![Pasos a seguir al construir](./img/steps.drawio.svg)

El patrón organiza la construcción de los objetos en un conjunto de pasos, como `set_name`, `set_email`, entre otros. Para crear un objeto se ejecutan una serie de estos pasos, pero no es necesario llamar a todos los pasos, esto depende de los requerimientos de cada producto. Este patrón tiene varias partes, interfaces `Builder`, clases `ConcreteBuilder`, clases `Product` y clases `Director`:

**Figura 1:** Estructura del patrón

![Estructura del patrón](./img/structure.drawio.svg)

La interfaz `Builder` declara los pasos de construcción de los productos que son **comunes para todos los tipos de *builders***. Por ejemplo una clase `FormBuilder`. Los `ConcreteBuilder`, por su parte, implementan la interfaz `Builder` con diferentes pasos de construcción. Además pueden producir productos que no tienen una interfaz en común. Por ejemplo una clase `AdmissionFormBuilder`, que crea productos `AdmissionForm`. Los productos son los objetos resultantes. Productos construidos por diferentes *builders* no tienen que pertenecer a la misma jerarquía de clases o interfaces. Por ejemplo una clase `AdmissionForm` que puede ser creada por diferentes *builders*.

Para separar una serie de pasos, se puede crear otra clase llamada `Director`, la cual define el órden en el que se ejecutan los pasos de construcción, mientras que la clase `Builder` implementa los pasos. Aunque no es necesario tener una clase `Director`, esta es útil para definir el orden en el que se llaman los pasos de construcción, y así poder crear y volver a usar configuraciones específicas de productos. Un ejemplo es la clase `FormDirector`, que permite escribir toda la información personal antes de la información de contacto y construir un formulario sin la información laboral, si así lo requiere.

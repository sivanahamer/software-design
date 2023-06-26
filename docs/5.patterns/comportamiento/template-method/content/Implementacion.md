# Implementación
Para implementar el patrón Bridge debemos tener en cuenta las siguientes sugerencias y técnicas.

- Analizar el algoritmo que tenemos como objetivo para identificar si puede ser dividido en pasos, considerar qué pasos son comunes para todas las clases concretas y cuáles serán únicos, es decir, que deben ser implementados por la misma clase concreta.
- Crear la clase base abstracta y declarar el método plantilla dentro de esta clase base abstracta, además se debe definir dentro del método plantilla los métodos que representan los pasos dentro del algoritmo, creando de esta manera la estructura que se va a seguir.
- No está mal que todos los pasos del algoritmo sean abstractos, sin embargo, es mejor definir los pasos que pueden tener una implementación por defecto, ya que las clases concretas no deberán implementar tantos pasos.
- Para cada variación que se pueda dar dentro del algoritmo dependiendo de la situación se debe crear una nueva clase concreta, esta debe implementar los pasos abstractos y podría sobrescribir los pasos definidos de antemano.
- Analizar el algoritmo que tenemos como objetivo para identificar si puede ser dividido en pasos, considerar qué pasos son comunes para todas las clases concretas y cuáles serán únicos
- Crear la clase base abstracta y declarar el método plantilla dentro de esta clase base abstracta
- Para cada variación que se pueda dar dentro del algoritmo dependiendo de la situación, se debe crear una nueva clase concreta, esta debe implementar los pasos abstractos y podría sobrescribir los pasos definidos de antemano.

(Refactoring.guru, s.f.)

[Regresar al Readme](./../README.md)
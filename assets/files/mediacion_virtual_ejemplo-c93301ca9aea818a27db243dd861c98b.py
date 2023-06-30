from abc import ABC, abstractmethod

# Clase abstracta para definir la interfaz de los estados
class Estado(ABC):

    @property
    def curso(self):
        return self._curso
    @curso.setter
    def curso(self, curso) -> None:
        self._curso = curso

    # init method or constructor
    def __init__(self, curso):
        self._curso = curso

    @abstractmethod
    def matricular(self):
        print("No se puede matricular")

    @abstractmethod
    def retirar_matricula(self):
        print("No se puede retirar el curso")

    @abstractmethod
    def terminar_ciclo(self):
        print("No se puede terminar el curso")

    @abstractmethod
    def convalidar(self):
        print("No se puede convalidar el curso")

    @abstractmethod
    def reprobar(self):
        print("No se puede reprobar este curso")
    


    
# Estado no matriculado
class no_matriculado(Estado):
    def matricular(self):
        self.curso.cambiar_estado(en_curso(self.curso))
        print(f"Curso matriculado exitosamente. \nEstado: {self.curso.estado_actual.__class__}")
        

    def retirar_matricula(self):
        super().retirar_matricula()

    def convalidar(self):
        self.curso.cambiar_estado(terminado(self.curso))
        print(f"Curso convalidado exitosamente. \nEstado: {self.curso.estado_actual.__class__}")
        

    def reprobar(self):
        super().reprobar()

    def terminar_ciclo(self):
        super().terminar_ciclo()

# Estado en curso
class en_curso(Estado):
    def matricular(self):
        super().matricular()

    def retirar_matricula(self):
        self.curso.cambiar_estado(no_matriculado(self.curso))
        print(f"Curso retirado exitosamente. \nEstado: {self.curso.estado_actual.__class__}")

    def convalidar(self):
        super().convalidar()

    def reprobar(self):
        super().reprobar()
    
    def terminar_ciclo(self):
        self.curso.cambiar_estado(terminado(self.curso))
        print(f"Curso terminado. \nEstado: {self.curso.estado_actual.__class__}")

# Estado terminado
class terminado(Estado):
    def matricular(self):
        super().matricular()

    def retirar_matricula(self):
        super().retirar_matricula()

    def convalidar(self):
        super().convalidar()

    def reprobar(self):
        self.curso.cambiar_estado(no_matriculado(self.curso))
        print(f"Curso reprobado. \nEstado: {self.curso.estado_actual.__class__}")

    def terminar_ciclo(self):
        super().terminar_ciclo()


# Contexto
class Curso:
    def __init__(self):
        # Estado inicial
        self.estado_actual = no_matriculado(self)

    def cambiar_estado(self,estado):
        self.estado_actual = estado

    def matricular(self):
        self.estado_actual.matricular()

    def retirar_matricula(self):
        self.estado_actual.retirar_matricula()

    def convalidar(self):
        self.estado_actual.convalidar()

    def reprobar(self):
        self.estado_actual.reprobar()

    def terminar_ciclo(self):
        self.estado_actual.terminar_ciclo()

diseño_de_software = Curso()
HCI = Curso()
PI = Curso()

def inicio_de_lecciones():        
    print("Matriculo Diseño de Software:")
    diseño_de_software.matricular()
    print("Matriculo HCI:")
    HCI.convalidar()
    print("Matriculo PI:")
    PI.matricular()

def fin_de_lecciones():        
    print("\nFin de ciclo lectivo")
    print("Termino Diseño de Software:")
    diseño_de_software.terminar_ciclo()
    print("Termino HCI:")
    HCI.terminar_ciclo()
    print("Termino PI:")
    PI.terminar_ciclo()

if __name__ == "__main__":
            
    inicio_de_lecciones()
    fin_de_lecciones()

    print("\nReprobé Diseño de Software:")
    diseño_de_software.reprobar()
        


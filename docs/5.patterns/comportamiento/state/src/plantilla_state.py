from abc import ABC, abstractmethod

# Clase abstracta para definir la interfaz de los estados
class Estado(ABC):

    # init method or constructor
    def __init__(self, contexto):
        self._contexto = contexto

    @abstractmethod
    def accion_x(self):
        pass

    @abstractmethod
    def accion_y(self):
        pass

# Estado concreto
class estado_concreto1(Estado):
    def accion_x(self):
        print("Estado concreto 1")
        self._contexto.cambiar_estado(estado_concreto2(self._contexto))

    def accion_y(self):
        print("Transición incorrecta")

# Estado concreto
class estado_concreto2(Estado):
    def accion_y(self):
        print("Estado concreto 2")
        self._contexto.cambiar_estado(estado_concreto1(self._contexto))

    def accion_x(self):
        print("Transición incorrecta")


# Contexto
class Contexto:
    def __init__(self):
        # Estado inicial
        self.estado_actual = estado_concreto1(self)

    def cambiar_estado(self,estado):
        self.estado_actual = estado

    def accion_x(self):
        self.estado_actual.accion_x()

    def accion_y(self):
       self.estado_actual.accion_y()

if __name__ == "__main__":
            
    contexto = Contexto()
    contexto.accion_x()
    contexto.accion_y()


    contexto.cambiar_estado(estado_concreto2(contexto))

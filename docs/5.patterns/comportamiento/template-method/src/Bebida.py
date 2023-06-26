from abc import ABC, abstractmethod

class Bebida(ABC):

    # Método plantilla
    # Define la estructura del algoritmo
    def preparar(self) -> None:
        self.hervir_agua()            # Paso 1
        self.preparar_bebida()        # Paso 2 (Abstracto)
        self.verter_bebida()          # Paso 3
        self.agregar_ingredientes()   # Paso 4 (Abstracto)

    # Estos pasos ya tienen implementaciones.

    def hervir_agua(self) -> None:
        print("Se está hirviendo el agua...")

    def verter_bebida(self) -> None:
        print("Se está vertiendo la bebida...")

    # Estos pasos deben ser implementados por las clases concretas.

    @abstractmethod
    def preparar_bebida(self) -> None:
        pass

    @abstractmethod
    def agregar_ingredientes(self) -> None:
        pass

class Café(Bebida):

    def preparar_bebida(self) -> None:
        print("Se está preparando el café...")

    def agregar_ingredientes(self) -> None:
        print("Agregando azúcar y leche al café...")


class Té(Bebida):
 
    def preparar_bebida(self) -> None:
        print("Se están remojando las bolsitas de té...")

    def agregar_ingredientes(self) -> None:
        print("Agregando miel al té...")


def client_code(bebida: Bebida) -> None:
    bebida.preparar()

if __name__ == "__main__":
    print("Se pidió un café")
    client_code(Café())
    print("\n")

    print("Se pidió un té")
    client_code(Té())
    print("\n")
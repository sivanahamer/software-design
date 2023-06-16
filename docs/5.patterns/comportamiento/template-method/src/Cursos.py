from abc import ABC, abstractmethod

class CursoAbstracto(ABC):

    def __init__(self):
        self.nombreCurso = ""
        self.sigla = ""
        self.grupo = 0
        self.cicloCurso = ""
        self.profes = []
        self.estudiantes = []
        self.asistente = ""

    # Método plantilla
    # Define la estructura del algoritmo
    def CrearCurso(self) -> None:
        self.AsignarNombreCurso()      # Paso 1
        self.AsignarSigla()            # Paso 2
        self.AsignarGrupo()            # Paso 3
        self.AsignarCicloCurso()       # Paso 4
        self.AsignarProfes()           # Paso 5
        self.CrearPlantillaCurso()     # Paso 6 (Abstracto)
        self.InscribirEstudiantes()    # Paso 7

        tieneAsistente = input("¿El curso " + self.nombreCurso + " contará con un asistente? (si o no): ")
        tieneAsistente = tieneAsistente.lower()

        if(tieneAsistente == "si" or tieneAsistente == "sí"):
            self.AsignarAsistente      # Paso 8

    # Estos pasos ya tienen implementaciones.

    def AsignarNombreCurso(self) -> None:
        self.nombreCurso = input("Ingrese el nombre del curso: ")
        print("Se asignó el nombre de curso", self.nombreCurso,".\n")

    def AsignarSigla(self) -> None:
        self.sigla = input("Ingrese la sigla del curso: ")
        print("Se asignó la sigla", self.sigla, "al curso", self.nombreCurso,".\n")

    def AsignarGrupo(self) -> None:
        self.grupo = input("Ingrese el grupo del curso: ")
        print("Se asignó el grupo", self.grupo, "al curso", self.nombreCurso,".\n")

    def AsignarCicloCurso(self) -> None:
        self.cicloCurso = input("Ingrese el ciclo del curso (Ej: I 2023): ")
        print("Se asignó el ciclo del curso", self.cicloCurso, "al curso", self.nombreCurso, ".\n")

    def AsignarProfes(self) -> None:
        listaProfes = input("Ingrese el nombre del profesor. Si son varios profesores se deben separar con comas: ")
        self.profes = listaProfes.split(",")
        listaProfes = ", ".join(self.profes)
        print("Se asignaron los profesores\n", listaProfes, "\nal curso", self.nombreCurso, ".\n")

    def InscribirEstudiantes(self) -> None:
        listaEstudiantes = input("Ingrese el nombre de los estudiantes. Se deben separar con comas: ")
        self.estudiantes = listaEstudiantes.split(",")
        listaEstudiantes = ", ".join(self.estudiantes)
        print("Se asignaron los estudiantes\n", listaEstudiantes, "\nal curso", self.nombreCurso, ".\n")

    def AsignarAsistente(self) -> None:
        asistente = input("Ingrese el nombre de la/el asistente: ")
        self.asistente = asistente
        print("Se asignó la/el asistente", self.asistente, "al curso", self.nombreCurso, ".\n")

    # Este paso deben ser implementado por las clases concretas.

    abstractmethod
    def CrearPlantillaCurso(self) -> None:
        pass

class CursoMatematica(CursoAbstracto):

    def CrearPlantillaCurso(self) -> None:
        print("Escogiendo Interfaz Oscura")
        print("Creando sección de Información")
        print("Creando sección de Tareas")
        print("Creando plantilla específica para el curso", self.nombreCurso, "...\n")

class CursoComputacion(CursoAbstracto):

    def CrearPlantillaCurso(self) -> None:
        print("Escogiendo Interfaz Clara")
        print("Creando sección de Material del Curso")
        print("Creando sección de Tareas")
        print("Creando sección de Proyectos")
        print("Creando sección de Laboratorios")
        print("Creando plantilla específica para el curso", self.nombreCurso, "...\n")

class CursoIngles(CursoAbstracto):

    def CrearPlantillaCurso(self) -> None:
        print("Escogiendo Interfaz Oscura")
        print("Creando sección de Material del Curso")
        print("Creando sección de Material Complementario")
        print("Creando sección de Proyectos")
        print("Creando plantilla específica para el curso", self.nombreCurso, "...\n")


def client_code(curso: CursoAbstracto) -> None:
    curso.CrearCurso()

if __name__ == "__main__":
    print("Creando el curso de Matemáticas")
    client_code(CursoMatematica())
    print("\n")

    print("Creando el curso de Computación")
    client_code(CursoComputacion())
    print("\n")

    print("Creando el curso de Inglés")
    client_code(CursoIngles())
    print("\n")
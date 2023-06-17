# Observable es una clase abstract
class Observable:
    # Constructor de la clase
    def __init__(self):
        pass
        # self.studentsInCourse = []

    # Metodo para añadir observador
    def attach(self, o):
        pass

    # Metodo para eliminar observador
    def detach(self, o):
        pass

    # Metodo para notificar a todos los observadores
    def notify(self):
        pass

# Observer es una clase abstract
class Observer:
    def update(self):
        pass

class MVcourse(Observable):
    # Constructor de la clase MVcourse
    def __init__(self):
        self.studentsInCourse = []
        self.homeworkPosted = ""

    # Metodo para agregar a un observador
    def attach(self, o):
        self.studentsInCourse.append(o)

    # Metodo para quitar a un observador
    def detach(self, o):
        if o in self.studentsInCourse:
            self.studentsInCourse.remove(o)

    # Metodo que añade un titulo a la tarea y llama a notify
    # cada vez que se 
    def addNewHomework(self, title):
        self.homeworkPosted = "Nombre: " + title
        print("El profesor ha añadido la tarea a mediación virtual🌐\n\n")
        self.notify()

    # Retorna el nombre de la tarea subida
    def homeworkName(self):
        return self.homeworkPosted

    # Este metodo es el encargado de llamar al metodo update de cada estudiante de
    # la cola para notificarles sobre la actualizacion de la estructura del observable
    def notify(self):
        for Student in self.studentsInCourse:
            Student.update()

# Clase concreta del observer, este es el estudiante
class Student(Observer):
    # Constructor, recibe un observable o sujeto para observarlo
    def __init__(self, observable):
        self.observable = observable
    # Metodo que es llamado por observable en alguna parte para notificar al
    # estudiante
    def update(self):
        print("Entimado estudiante, el profesor a agregado una tarea📢")
        print(self.observable.homeworkName())

def main():
    # Curso en mediacion virtual
    course = MVcourse()
    
    # Creado observadores, estos estaran pendientes a las tareas
    # que se suban a mediacion virtual
    student1 = Student(course)
    student2 = Student(course)
    student3 = Student(course)

    # El curso añade a los estudiantes a su cola para notificarlos
    course.attach(student1)
    course.attach(student2)
    course.attach(student3)

    # Se elimina a un estudiante de la cola del curso
    course.detach(student2)

    # Se añaden nuevas tareas al curso de mediacion virtual
    course.addNewHomework('Trabajo de investigación: Patrónes de software II📝\n')
    course.addNewHomework('Laboratorio: Pátrones estructurales📝\n')
    course.addNewHomework('Proyecto: Etapa 3📝\n')

if __name__ == '__main__':
    main()
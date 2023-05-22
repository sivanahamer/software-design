from abc import ABC, abstractmethod

class BaseDatos():

    def __init__(self):
        self.diccionario = {"gabo123": "gabriel.gonzalez", "liz123": "lizeth.corrales"}

    def agregarUsuario(self, usuario, contraseña):
        print("Registrando Usuario...")
        self.diccionario[contraseña] = usuario
        print("Usuario registrado ✅\n")

    def verificarContraseña(self, usuario, contraseña) -> bool:
        usuarioGuardado = self.diccionario.get(contraseña)
        if(usuarioGuardado == usuario):
            print("El usuario y la contraseña son válidos.✅")
            return True
        else:
            print("El usuario o la contraseña ingresados son incorrectos. ❌")
            return False

# -------- IMPLEMENTATION ------------
class TemaInterfaz(ABC):

    @abstractmethod
    def setColorTexto(self) -> None:
        pass

    @abstractmethod
    def setColorFondo(self) -> None:
        pass

    @abstractmethod
    def setColorIconos(self) -> None:
        pass

    @abstractmethod
    def setColorContorno(self) -> None:
        pass

    @abstractmethod
    def setColorContorno(self) -> None:
        pass

# -------- CONCRETE IMPLEMENTATION ------------
class Claro(TemaInterfaz):

    def setColorTexto(self) -> None:
        print("Se ha cambiado el color de texto a #000000 (Black) ✅")

    def setColorFondo(self) -> None:
        print("Se ha cambiado el color de texto a #FFFFFF (White) ✅")

    def setColorIconos(self) -> None:
        print("Se ha cambiado el color de texto a #92D1C6 (Blue-Sky) ✅")

    def setColorContorno(self) -> None:
        print("Se ha cambiado el color de texto a #D8D8D8 (Grey) ✅")

class Oscuro(TemaInterfaz):

    def setColorTexto(self) -> None:
        print("Se ha cambiado el color de texto a #FFFFFF (White) ✅")

    def setColorFondo(self) -> None:
        print("Se ha cambiado el color de texto a #000000 (Black) ✅")

    def setColorIconos(self) -> None:
        print("Se ha cambiado el color de texto a #FFFFFF (White) ✅")

    def setColorContorno(self) -> None:
        print("Se ha cambiado el color de texto a #D8D8D8 (Grey) ✅")

# -------- ABSTRACTION ------------
class Plataforma:
    def __init__(self, temaInterfaz: TemaInterfaz, baseDeDatos) -> None:
        self.temaInterfaz = temaInterfaz
        self.baseDeDatos = baseDeDatos
    
    def registrarUsuario(self) -> None:
        usuario = input("Ingrese su nuevo usuario: ")
        contraseña = input("Ingrese su nueva contraseña: ")
        self.baseDeDatos.agregarUsuario(usuario, contraseña)

    def verificarCredenciales(self) -> None:
        usuario = input("Ingrese el usuario: ")
        contraseña = input("Ingrese la contraseña: ")
        print("Verificando nombre de usuario y contraseña...")
        verificado = self.baseDeDatos.verificarContraseña(usuario, contraseña)
        if(verificado):
            self.iniciarSesion()

    def iniciarSesion(self) -> None:
        print("Iniciando sesion...")

    def recuperarContraseña(self) -> None:
        correo = input("Ingrese el correo asociado a su cuenta: ")
        print("Se ha enviado un correo a", correo, "con las instrucciones para recuperar la contraseña.")

# -------- REFINED ABSTRACTION ------------
class CorreoUCR(Plataforma):
    def crearCorreo(self):
        destinatario = input("Ingrese el correo del destinatario: ")
        asunto = input("Ingrese el asunto del correo: ") 
        contenido = input("Ingrese el contenido del correo: ")
        enviar = input("¿Desea enviar el correo? y/n")
        if(enviar == "y"):
            self.enviarCorreo(destinatario, asunto, contenido)

        reenviar = input("¿Desea enviar el correo? y/n")
        if(reenviar == "y"):
            destinatario = input("Ingrese el correo del destinatario: ")
            self.reenviarCorreo(destinatario, asunto, contenido)

    def enviarCorreo(self, destinatario, asunto, contenido):
        print("Se envio a" + destinatario + ", con el asunto:" + asunto + ", un correo con el siguiente contenido:\n" + contenido)
    
    def reenviarCorreo(self, destinatario, asunto, contenido):
        print("Se reenvio a" + destinatario + ", con el asunto:" + asunto + ", un correo con el siguiente contenido:\n" + contenido)

class MediacionVirtual(Plataforma):
    def ingresarCurso():
        print("Ha ingresado al curso!")

    def enviarTarea():
        print("Ha enviado la tarea!")

# -------- CLIENT CODE ------------
def client_code(plataforma: Plataforma) -> None:
    plataforma.temaInterfaz.setColorTexto()
    plataforma.temaInterfaz.setColorFondo()
    plataforma.temaInterfaz.setColorIconos()
    plataforma.temaInterfaz.setColorContorno()

    print("\n")

    poseeUsuario = input("¿Posee actualmente un usuario? y/n \n")
    if( poseeUsuario == "n"):
        plataforma.registrarUsuario()
        deseaIngresar = input("¿Desea ingresar a la plataforma? y/n \n")
        if( deseaIngresar == "y"):
            plataforma.verificarCredenciales()
    elif( poseeUsuario == "y"):
        plataforma.verificarCredenciales()

# -------- MAIN ------------
if __name__ == "__main__":
    interfazEscogida = input("¿Qué interfaz desea utilizar para la plataforma?\n 1: Claro\n 2: Oscuro\n")
    if( interfazEscogida == "1"):
        temaInterfaz = Claro()
    elif( interfazEscogida == "2"):
        temaInterfaz = Oscuro()
    baseDeDatos = BaseDatos()
    mediacionVirtual = Plataforma(temaInterfaz, baseDeDatos)

    client_code(mediacionVirtual)

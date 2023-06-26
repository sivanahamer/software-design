class Main {
  public static void main(String[] args) {

    System.out.println("\n-----Creando un nuevo correo vacio-----");
    
    EditorCorreo editorCorreo = new EditorCorreo();
    editorCorreo.ImprimirEstadoActual();

    System.out.println("\n-----Escribiendo en el correo y guardando el estado-----");
    
    editorCorreo.CambiarDestinatario("sivana.hamer@ucr.ac.cr");
    editorCorreo.CambiarAsunto("Patrón Memento");
    editorCorreo.AgregarContenido("Este patrón de comportamiento es muy útil cuando se desea guardar el estado de un objeto");
    editorCorreo.ImprimirEstadoActual();

    editorCorreo.RealizarGuardado();

    System.out.println("\n-----Agregando datos al correo-----");
    
    editorCorreo.CambiarDestinatario("sivana.hamer@ucr.ac.cr, greivin.arcenavarro@ucr.ac.cr");
    editorCorreo.CambiarAsunto("Patrón Memento");
    editorCorreo.AgregarContenido(", componente o un sistema, pero sin violar la encapsulación de este mismo.");
    editorCorreo.ImprimirEstadoActual();

    System.out.println("\n-----Retrocediendo al estado anterior-----");

    editorCorreo.RetrocederEstado();
    editorCorreo.ImprimirEstadoActual();
  }
}
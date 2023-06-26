class Correo {

  public static class DatosCorreo {
    private String destinatario;
  
    private String asunto;
  
    private StringBuilder contenido;

    public DatosCorreo(String destinatario, String asunto, StringBuilder contenido) {
      this.destinatario = destinatario;
      this.asunto = asunto;
      this.contenido = contenido;
    }
  }

  private DatosCorreo datosCorreo;
  
  // Otra información del correo que no es guardada en el Memento, como el reminente

  public Correo(String destinatario, String asunto, StringBuilder contenido) {
    this.datosCorreo = new DatosCorreo(destinatario, asunto, contenido);
  }
  
  public void CambiarDestinatario(String destinatario) {
    this.datosCorreo.destinatario = destinatario;
  }

  public void CambiarAsunto(String asunto) {
    this.datosCorreo.asunto = asunto;
  }
  
  public void AgregarContenido(String texto) {
    this.datosCorreo.contenido.append(texto);
  }

  public EstadoCorreo GuardarEstado() {
    System.out.println("~Guardando el estado del correo~");
    DatosCorreo datosGuardados = new DatosCorreo(
      this.datosCorreo.destinatario,
      this.datosCorreo.asunto,
      new StringBuilder(this.datosCorreo.contenido)
    );
    return new EstadoCorreo(datosGuardados);
  }

  public void RestaurarEstado(EstadoCorreo estadoCorreo) {
    System.out.println("\n~Recuperando un estado del correo~");
    DatosCorreo datosRecuperados = estadoCorreo.RecuperarDatosGuardados();
    this.datosCorreo = new DatosCorreo(
      datosRecuperados.destinatario,
      datosRecuperados.asunto,
      new StringBuilder(datosRecuperados.contenido)
    );
  }

  public String toString() {
    return "\n\nDestinatario: " + this.datosCorreo.destinatario + "\nAsunto: " + this.datosCorreo.asunto + "\n\nContenido: " + this.datosCorreo.contenido + "\n";
  }

  public static class EstadoCorreo {
    
    private DatosCorreo datosCorreo;

    public EstadoCorreo(DatosCorreo guardadoDatosCorreo) {
      this.datosCorreo = guardadoDatosCorreo;
    }

    private DatosCorreo RecuperarDatosGuardados() {
      return this.datosCorreo;
    }
  }
  
}
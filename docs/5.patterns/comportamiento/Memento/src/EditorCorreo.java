import java.util.Stack;

class EditorCorreo {

  private Stack<Correo.EstadoCorreo> EstadosDelCorreo;

  private Correo correo;

  public EditorCorreo() {
    EstadosDelCorreo = new Stack<>();
    correo = new Correo("","",new StringBuilder());
  }

  public void CambiarDestinatario(String destinatario) {
    this.correo.CambiarDestinatario(destinatario);
  }

  public void CambiarAsunto(String asunto) {
    this.correo.CambiarAsunto(asunto);
  }

  public void AgregarContenido(String texto) {
    this.correo.AgregarContenido(texto);
  }

  public void RealizarGuardado() {
    EstadosDelCorreo.push(correo.GuardarEstado());
  }

  public void RetrocederEstado() {
    if (!EstadosDelCorreo.isEmpty()) {
      correo.RestaurarEstado(EstadosDelCorreo.pop()); 
    }
  }

  public void ImprimirEstadoActual() {
    System.out.println(this.correo);
  }
}
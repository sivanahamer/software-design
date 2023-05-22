import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

public class Folder implements Component {

  private String title;

  private List<Component> childResource;

  public Folder(String title) {
    this.title = title;
    this.childResource = new ArrayList<>();
  }

  public void showComponent() {
    System.out.println("Showing the resources of the folder " + this.title + "\n---");
    childResource.forEach(Component::showComponent);
    System.out.println("---");
  }

  public void addComponent(Component component) {
    this.childResource.add(component);
  }

  public void removeComponent(Component component) {
    this.childResource.remove(component);
  }
}
class Main {
  public static void main(String[] args) {
    Component folder = new Folder("Design Patterns");
    
    Component document1 = new Document();
    Component document2 = new Document();
    
    folder.addComponent(document1);
    folder.addComponent(document2);
    
    Component section = new Section("Software Design");
    
    Component evaluation1 = new Evaluation();
    Component evaluation2 = new Evaluation();

    section.addComponent(evaluation1);
    section.addComponent(folder);
    section.addComponent(evaluation2);
    
    section.showComponent();
  }
}

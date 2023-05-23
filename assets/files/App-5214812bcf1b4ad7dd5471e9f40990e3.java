public class App {

    public static void main(String[] args) {
        AdmissionFormBuilder builder = new AdmissionFormBuilder();

        FormDirector director = new FormDirector(builder)
                .buildPersonalInformation("Martin Fowler", "1963/12/18", "Male", 442076792)
                .buildContactInformation("Chicago, IL", "martin@martinfowler.com", 5551234);

        AdmissionForm form = builder.build();

    }

}

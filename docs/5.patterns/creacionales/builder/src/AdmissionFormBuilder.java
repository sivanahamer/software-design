public class AdmissionFormBuilder implements FormBuilder {
    private AdmissionForm form;

    public AdmissionFormBuilder() {
        this.form = new AdmissionForm();
    }

    public AdmissionFormBuilder setName(String name) {
        this.form.setName(name);
        return this;
    }

    public AdmissionFormBuilder setDateOfBirth(String date_of_birth) {
        this.form.setDateOfBirth(date_of_birth);
        return this;
    }

    public AdmissionFormBuilder setGender(String gender) {
        this.form.setGender(gender);
        return this;
    }

    public AdmissionFormBuilder setIdNumber(int id_number) {
        this.form.setIdNumber(id_number);
        return this;
    }

    public AdmissionFormBuilder setAddress(String address) {
        this.form.setAddress(address);
        return this;
    }

    public AdmissionFormBuilder setEmail(String email) {
        this.form.setEmail(email);
        return this;
    }

    public AdmissionFormBuilder setPhoneNumber(int phone_number) {
        this.form.setPhoneNumber(phone_number);
        return this;
    }

    public AdmissionFormBuilder setGrades(Object grades) {
        this.form.setGrades(grades);
        return this;
    }

    public AdmissionFormBuilder setInstitution(String institution) {
        this.form.setInstitution(institution);
        return this;
    }

    public AdmissionForm build() {
        return this.form;
    }
}

public class AdmissionForm {
    private String name;
    private String date_of_birth;
    private String gender;
    private int id_number;
    private String address;
    private String email;
    private int phone_number;
    private Object grades;
    private String institution;

    public AdmissionForm() {
        this.name = "";
        this.date_of_birth = "";
        this.gender = "";
        this.id_number = 0;
        this.address = "";
        this.email = "";
        this.phone_number = 0;
        this.grades = null;
        this.institution = "";
    }

    public AdmissionForm(String name, String date_of_birth, String gender, int id_number, String address, String email,
            int phone_number, Object grades, String institution) {
        this.name = name;
        this.date_of_birth = date_of_birth;
        this.gender = gender;
        this.id_number = id_number;
        this.address = address;
        this.email = email;
        this.phone_number = phone_number;
        this.grades = grades;
        this.institution = institution;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDateOfBirth() {
        return date_of_birth;
    }

    public void setDateOfBirth(String date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getIdNumber() {
        return id_number;
    }

    public void setIdNumber(int id_number) {
        this.id_number = id_number;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPhoneNumber() {
        return phone_number;
    }

    public void setPhoneNumber(int phone_number) {
        this.phone_number = phone_number;
    }

    public Object getGrades() {
        return grades;
    }

    public void setGrades(Object grades) {
        this.grades = grades;
    }

    public String getInstitution() {
        return institution;
    }

    public void setInstitution(String institution) {
        this.institution = institution;
    }
}

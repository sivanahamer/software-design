public class FormDirector {
    private FormBuilder builder;

    public FormDirector(FormBuilder builder) {
        this.builder = builder;
    }

    public FormBuilder getBuilder() {
        return this.builder;
    }

    public FormDirector buildPersonalInformation(String name, String date_of_birth, String gender, int id_number) {
        this.builder.setName(name)
                .setDateOfBirth(date_of_birth)
                .setGender(gender)
                .setIdNumber(id_number);
        return this;
    }

    public FormDirector buildContactInformation(String address, String email, int phone_number) {
        this.builder.setAddress(address)
                .setEmail(email)
                .setPhoneNumber(phone_number);
        return this;
    }

    public FormDirector buildAcademicInformation(Object grades, String institution) {
        if (this.builder instanceof AdmissionFormBuilder this_builder) {
            this_builder.setGrades(grades)
                    .setInstitution(institution);
        }
        return this;
    }

    public FormDirector buildWorkInformation(String company, String occupation, double salary) {
        if (this.builder instanceof ScolarshipFormBuilder this_builder) {
            this_builder.setCompany(company)
                    .setOccupation(occupation)
                    .setSalary(salary);
        }
        return this;
    }

    public FormDirector buildFinancialInformation(double income, double expenses) {
        if (this.builder instanceof ScolarshipFormBuilder this_builder) {
            this_builder.setIncome(income)
                    .setExpenses(expenses);
        }
        return this;
    }
}

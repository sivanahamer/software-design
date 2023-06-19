class AddCourseCommand : public EnrollmentCommand {
 private:
  Student& student;
  Course& course;

 public:
  AddCourseCommand(Student& student, Course& course) : student(student), course(course) {}

  void execute() override {
    this->student.getCourses().push_back(this->course);
  }

  void undo() override {
    auto& courses = this->student.getCourses();

    for (auto iterator = courses.begin(); iterator != courses.end(); ++iterator) {
      auto course = *iterator;

      if (this->course.getName() == course.getName()) {
        this->student.getCourses().erase(iterator);
        break;
      }
    }
  }
};

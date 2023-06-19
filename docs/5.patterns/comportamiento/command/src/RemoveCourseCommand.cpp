class RemoveCourseCommand : public EnrollmentCommand {
 private:
  Student& student;
  Course& course;

 public:
  RemoveCourseCommand(Student& student, Course& course) : student(student), course(course) {}

  void execute() override {
    auto& courses = this->student.getCourses();

    for (auto iterator = courses.begin(); iterator != courses.end(); ++iterator) {
      auto course = *iterator;

      if (this->course.getName() == course.getName()) {
        this->student.getCourses().erase(iterator);
        break;
      }
    }
  }

  void undo() override {
    this->student.getCourses().push_back(this->course);
  }
};

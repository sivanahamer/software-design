int main() {
  Student student("Martin Fowler");

  Course english_course("English");
  Course spanish_course("Spanish");

  Enrollment enrollment;

  enrollment.executeCommand(new AddCourseCommand(student, english_course));
  enrollment.executeCommand(new AddCourseCommand(student, spanish_course));

  enrollment.executeCommand(new UndoCommand(enrollment));

  enrollment.executeCommand(new RedoCommand(enrollment));
}

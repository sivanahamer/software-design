class UndoCommand : public EnrollmentCommand {
 private:
  Enrollment& enrollment;

 public:
  UndoCommand(Enrollment& enrollment) : enrollment(enrollment) {}

  void execute() override {
    this->enrollment.undo();
  }

  void undo() override {}
};

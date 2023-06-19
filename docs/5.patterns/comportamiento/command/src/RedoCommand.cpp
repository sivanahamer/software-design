class RedoCommand : public EnrollmentCommand {
 private:
  Enrollment& enrollment;

 public:
  RedoCommand(Enrollment& enrollment) : enrollment(enrollment) {}

  void execute() override {
    this->enrollment.redo();
  }

  void undo() override {}
};

class EnrollmentCommand {
 public:
  virtual void execute() = 0;
  virtual void undo() = 0;
};

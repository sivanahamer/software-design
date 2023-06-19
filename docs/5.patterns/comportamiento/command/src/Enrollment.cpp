class Enrollment {
 private:
  std::stack<EnrollmentCommand*> undo_stack;
  std::stack<EnrollmentCommand*> redo_stack;

 public:
  void executeCommand(EnrollmentCommand* command) {
    command->execute();
    this->undo_stack.push(command);
  }

  void undo() {
    if (!this->undo_stack.empty()) {
      auto* command = this->undo_stack.top();
      command->undo();
      this->undo_stack.pop();
      this->redo_stack.push(command);
    }
  }

  void redo() {
    if (!this->redo_stack.empty()) {
      auto* command = this->redo_stack.top();
      command->execute();
      this->redo_stack.pop();
      this->undo_stack.push(command);
    }
  }
};

class Course {
 private:
  std::string name;

 public:
  Course(const std::string& name) : name(name) {}

  const std::string& getName() const {
    return this->name;
  }
};

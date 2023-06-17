class Student {
 private:
  std::string name;
  std::vector<Course> courses;

 public:
  Student(const std::string& name) : name(name) {}

  const std::string& getName() const {
    return this->name;
  }

  std::vector<Course>& getCourses() {
    return this->courses;
  }
};

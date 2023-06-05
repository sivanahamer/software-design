#include <iostream>

#include "CollegeSystem.cpp"

int status;

int main ( int argc, char *argv[] ) {
  CourseSystemFacade college = CourseSystemFacade("c12345");
  cout << "Available courses:  " << college.getAvailableCourses() << endl;
  cout << "Enrolling Student...\n" << college.enrollInCourse("Math") << endl;
  cout << "Submitting assignment...\n " << college.submitAssignment("Math", "Practice 1 - Markov Chains") << endl;
  cout << "Viewing Math grade for " <<college.user << ": " << college.getGradesForCourse("Math") << endl;
  return 0;
  
}


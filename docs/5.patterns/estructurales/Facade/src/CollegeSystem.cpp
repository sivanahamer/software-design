#pragma once

#include <string>
#include <iostream>
#include "StringUtils/strutil.h"

using namespace std;

 //===========================  Course
class CourseService {
    public:
    string availableCourses;
    
    CourseService() {
        availableCourses = "\t\n Math\t\n Science\t\n Math 2\t\n Language\t\n Literature\t\n Sports";
    }

    string getAvailableCourses() {
        return availableCourses;
    }

    string enrollInCourse(string student, string courseId) {
        // Enroll student if course exists and is valid
        if (strutil::contains(this->availableCourses, courseId)) {
            stringstream result;
            result << "\t Student enrolled into " << courseId << " course correctly";
            return result.str();
        }
        // If not, return notice that student couldn't be enrolled
        return "Student not enrolled";
    }
};

 //===========================  Assignment
class AssignmentService {
    public:
    
    AssignmentService() {
        // CourseService initialization
    }

    string submitAssignment(string student, string courseId, string submission, CourseService& courseService) {
        // Submit assignment if course exists and is valid
        if (strutil::contains(courseService.availableCourses, courseId)) {
            stringstream result;
            result << "\t Assignment " << submission << " submitted correctly";
            return result.str();
        }
        // If not, return notice that student couldn't submit assignment
        return "Assignment not submitted";
    }
};

 //===========================  Grade
class GradeService {
    public:
    
    GradeService() {
    }

    string getGradesForCourse(string  student, string courseId, CourseService& courseService) {
        // Student passed if course exists and is valid
        if (strutil::contains(courseService.availableCourses, courseId)) {
            return "\t Student passed :)";
        }
        // If not, student didn't pass
        return "Student did not pass ;(";
    }
};


 //===========================  Facade
class CourseSystemFacade {

    CourseService* courseService;
    AssignmentService* assignmentService;
    GradeService* gradeService;

    public:

    string user;

    CourseSystemFacade(string user) {
        this->user = user;
        this->courseService = new CourseService();
        this->gradeService = new GradeService();
        this->assignmentService = new AssignmentService();
        // ... other services
    }

    string getAvailableCourses() {
        return this->courseService->getAvailableCourses();
    }

    string enrollInCourse(string courseId) {
        return this->courseService->enrollInCourse(this->user, courseId);
    }

    string getGradesForCourse(string courseId) {
        return this->gradeService->getGradesForCourse(this->user, courseId, *this->courseService);
    }

    string submitAssignment(string assignmentId, string submission) {
        return this->assignmentService->submitAssignment(this->user, assignmentId, submission, *this->courseService);
    }

    // ... other simplified methods for interacting with the system
};

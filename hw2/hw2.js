"use strict";
class School {
    constructor() {
        this._directions = [];
    }
    addDirection(direction) {
        this._directions.push(direction);
    }
}
class Direction {
    get name() {
        return this._name;
    }
    constructor(name) {
        this._levels = [];
        this._name = name;
    }
    addLevel(level) {
        this._levels.push(level);
    }
}
class Level {
    constructor(name, program) {
        this._groups = [];
        this._name = name;
        this._program = program;
    }
    get name() {
        return this._name;
    }
    get program() {
        return this._program;
    }
    addGroup(group) {
        this._groups.push(group);
    }
}
class Group {
    get students() {
        return this._students;
    }
    constructor(directionName, levelName) {
        this._students = [];
        this._directionName = directionName;
        this._levelName = levelName;
    }
    addStudent(student) {
        this._students.push(student);
    }
    showPerformance() {
        const sortedStudents = this._students.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
        return sortedStudents;
    }
}
class Student {
    constructor(firstName, lastName, birthYear) {
        this._grades = new Map();
        this._attendance = [];
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    get fullName() {
        return `${this._lastName} ${this._firstName}`;
    }
    set fullName(value) {
        [this._lastName, this._firstName] = value.split(" ");
    }
    get age() {
        return new Date().getFullYear() - this._birthYear;
    }
    setGrade(subject, grade) {
        this._grades.set(subject, grade);
    }
    markAttendance(present) {
        this._attendance.push(present);
    }
    getPerformanceRating() {
        const gradeValues = Array.from(this._grades.values());
        if (gradeValues.length === 0)
            return 0;
        const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) /
            gradeValues.length;
        const attendancePercentage = (this._attendance.filter((present) => present).length /
            this._attendance.length) *
            100;
        return (averageGrade + attendancePercentage) / 2;
    }
}

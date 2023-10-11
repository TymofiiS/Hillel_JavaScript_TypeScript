"use strict";
/*
Ви маєте JS код, який необхідно розширити анотацією примітивів, масивів, об'єктів (за необхідності),
подумати над використанням перерахувань, а також реалізувати описані у вигляді коментарів властивості та методи.
Крім цього є завдання з *, яке не є обов'язковим, але може вас зацікавити.
*/
class Base {
    add(o, objects) {
        if (!o) {
            return;
        }
        objects.push(o);
    }
    remove(o, objects) {
        if (!o) {
            return;
        }
        const index = objects.indexOf(o);
        if (index > -1) {
            objects.splice(index, 1);
        }
    }
}
var Experience;
(function (Experience) {
    Experience[Experience["Junior"] = 0] = "Junior";
    Experience[Experience["Middle"] = 1] = "Middle";
    Experience[Experience["Senior"] = 2] = "Senior";
    Experience[Experience["Lead"] = 3] = "Lead";
    Experience[Experience["None"] = 4] = "None";
})(Experience || (Experience = {}));
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Blocked"] = 1] = "Blocked";
    Status[Status["None"] = 2] = "None";
})(Status || (Status = {}));
class School extends Base {
    constructor() {
        // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods
        super(...arguments);
        this._areas = [];
        this._lecturers = []; // Name, surname, position, company, experience, courses, contacts
    }
    addArea(value) {
        this.add(value, this._areas);
    }
    removeArea(value) {
        this.remove(value, this._areas);
    }
    addLecturer(value) {
        this.add(value, this._lecturers);
    }
    removeLecturer(value) {
        this.remove(value, this._lecturers);
    }
    get areas() {
        return this._areas;
    }
    get lecturers() {
        return this._lecturers;
    }
}
class Lecturer {
    constructor() {
        this._experience = Experience.None;
        this._courses = [];
        this._contacts = [];
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get surname() {
        return this._surname;
    }
    set surname(value) {
        this._surname = value;
    }
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value;
    }
    get company() {
        return this._company;
    }
    set company(value) {
        this._company = value;
    }
    get experience() {
        return this._experience;
    }
    set experience(value) {
        this._experience = value;
    }
    get courses() {
        return this._courses;
    }
    set courses(value) {
        this._courses = value;
    }
    get contacts() {
        return this._contacts;
    }
    set contacts(value) {
        this._contacts = value;
    }
}
class Course {
}
class Contact {
}
class Area extends Base {
    get name() {
        return this._name;
    }
    addLevel(value) {
        this.add(value, this._levels);
    }
    removeLevel(value) {
        this.remove(value, this._levels);
    }
    constructor(name) {
        super();
        // implement getters for fields and 'add/remove level' methods
        this._levels = [];
        this._name = name;
    }
}
class Level extends Base {
    get groups() {
        return this._groups;
    }
    addGroup(value) {
        this.add(value, this._groups);
    }
    removeGroup(value) {
        this.remove(value, this._groups);
    }
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    constructor(name, description) {
        super();
        // implement getters for fields and 'add/remove group' methods
        this._groups = [];
        this._name = name;
        this._description = description;
    }
}
class Group extends Base {
    get area() {
        return this._area;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get directionName() {
        return this._directionName;
    }
    get levelName() {
        return this._levelName;
    }
    addStudent(value) {
        this.add(value, this._students);
    }
    removeStudent(value) {
        this.remove(value, this._students);
    }
    constructor(directionName, levelName) {
        super();
        this._status = Status.None;
        this._students = []; // Modify the array so that it has a valid toSorted method*
        this._directionName = directionName;
        this._levelName = levelName;
    }
    showPerformance() {
        const sortedStudents = this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
        return sortedStudents;
    }
}
class Student extends Base {
    setGrade(value) {
        this.add(value, this._grades);
    }
    setVisit(value) {
        this.add(value, this._visits);
    }
    constructor(firstName, lastName, birthYear) {
        super();
        this._grades = []; // workName: mark
        this._visits = []; // lesson: present
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
    getPerformanceRating() {
        const gradeValues = Array.from(this._grades.values());
        if (gradeValues.length === 0)
            return 0;
        const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) /
            gradeValues.length;
        const attendancePercentage = (this._visits.filter((present) => present).length /
            this._visits.length) *
            100;
        return (averageGrade + attendancePercentage) / 2;
    }
}

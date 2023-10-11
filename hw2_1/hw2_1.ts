/*
Ви маєте JS код, який необхідно розширити анотацією примітивів, масивів, об'єктів (за необхідності), 
подумати над використанням перерахувань, а також реалізувати описані у вигляді коментарів властивості та методи. 
Крім цього є завдання з *, яке не є обов'язковим, але може вас зацікавити.
*/

class Base {
  protected add(o: Object, objects: Object[]): void {
    if (!o) {
      return;
    }
    objects.push(o);
  }

  protected remove(o: Object, objects: Object[]): void {
    if (!o) {
      return;
    }
    const index = objects.indexOf(o);
    if (index > -1) {
      objects.splice(index, 1);
    }
  }
}

enum Experience {
  Junior,
  Middle,
  Senior,
  Lead,
  None,
}

enum Status {
  Active,
  Blocked,
  None,
}

class School extends Base {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  private _areas: Area[] = [];
  _lecturers: Lecturer[] = []; // Name, surname, position, company, experience, courses, contacts

  public addArea(value: Area): void {
    this.add(value, this._areas);
  }

  public removeArea(value: Area): void {
    this.remove(value, this._areas);
  }

  public addLecturer(value: Lecturer): void {
    this.add(value, this._lecturers);
  }

  public removeLecturer(value: Lecturer): void {
    this.remove(value, this._lecturers);
  }

  get areas(): Area[] {
    return this._areas;
  }

  get lecturers(): Lecturer[] {
    return this._lecturers;
  }
}

class Lecturer {
  private _name!: string;

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  private _surname!: string;
  public get surname(): string {
    return this._surname;
  }
  public set surname(value: string) {
    this._surname = value;
  }
  private _position!: string;
  public get position(): string {
    return this._position;
  }
  public set position(value: string) {
    this._position = value;
  }
  private _company!: string;
  public get company(): string {
    return this._company;
  }
  public set company(value: string) {
    this._company = value;
  }
  private _experience: Experience = Experience.None;
  public get experience(): Experience {
    return this._experience;
  }
  public set experience(value: Experience) {
    this._experience = value;
  }
  private _courses: Course[] = [];
  public get courses(): Course[] {
    return this._courses;
  }
  public set courses(value: Course[]) {
    this._courses = value;
  }
  private _contacts: Contact[] = [];
  public get contacts(): Contact[] {
    return this._contacts;
  }
  public set contacts(value: Contact[]) {
    this._contacts = value;
  }
}

class Course {}

class Contact {}

class Area extends Base {
  // implement getters for fields and 'add/remove level' methods
  private _levels: Level[] = [];
  private _name: string;

  public get name(): string {
    return this._name;
  }

  public addLevel(value: Level): void {
    this.add(value, this._levels);
  }

  public removeLevel(value: Level): void {
    this.remove(value, this._levels);
  }

  public constructor(name: string) {
    super();
    this._name = name;
  }
}

class Level extends Base {
  // implement getters for fields and 'add/remove group' methods

  private _groups: Group[] = [];

  public get groups(): Group[] {
    return this._groups;
  }

  public addGroup(value: Group): void {
    this.add(value, this._groups);
  }

  public removeGroup(value: Group): void {
    this.remove(value, this._groups);
  }

  private _name!: string;

  public get name(): string {
    return this._name;
  }

  private _description: string;

  public get description(): string {
    return this._description;
  }

  public constructor(name: string, description: string) {
    super();
    this._name = name;
    this._description = description;
  }
}

class Group extends Base {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  private _area!: number;
  public get area(): number {
    return this._area;
  }

  private _status: Status = Status.None;
  public get status(): Status {
    return this._status;
  }
  public set status(value: Status) {
    this._status = value;
  }

  private _directionName!: string;
  public get directionName(): string {
    return this._directionName;
  }

  private _levelName!: string;
  public get levelName(): string {
    return this._levelName;
  }

  private _students: Student[] = []; // Modify the array so that it has a valid toSorted method*
  public addStudent(value: Student): void {
    this.add(value, this._students);
  }

  public removeStudent(value: Student): void {
    this.remove(value, this._students);
  }

  public constructor(directionName: string, levelName: string) {
    super();
    this._directionName = directionName;
    this._levelName = levelName;
  }

  public showPerformance(): Student[] {
    const sortedStudents: Student[] = this._students.toSorted(
      (a: Student, b: Student) =>
        b.getPerformanceRating() - a.getPerformanceRating()
    );
    return sortedStudents;
  }
}

class Student extends Base {
  // implement 'set grade' and 'set visit' methods

  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;
  private _grades: number[] = []; // workName: mark
  private _visits: boolean[] = []; // lesson: present

  public setGrade(value: number): void {
    this.add(value, this._grades);
  }

  public setVisit(value: boolean): void {
    this.add(value, this._visits);
  }

  public constructor(firstName: string, lastName: string, birthYear: number) {
    super();
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  public get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  public set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(" ");
  }

  public get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  public getPerformanceRating(): number {
    const gradeValues: number[] = Array.from(this._grades.values());

    if (gradeValues.length === 0) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) /
      gradeValues.length;

    const attendancePercentage: number =
      (this._visits.filter((present: boolean) => present).length /
        this._visits.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}

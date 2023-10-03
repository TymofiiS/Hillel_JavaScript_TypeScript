class School {
  private _directions: Direction[] = [];

  public addDirection(direction: Direction): void {
    this._directions.push(direction);
  }
}

class Direction {
  private _levels: Level[] = [];
  private _name: string;

  public get name(): string {
    return this._name;
  }

  public constructor(name: string) {
    this._name = name;
  }

  public addLevel(level: Level): void {
    this._levels.push(level);
  }
}

class Level {
  private _groups: Group[] = [];
  private _name: string;
  private _program: string;

  public constructor(name: string, program: string) {
    this._name = name;
    this._program = program;
  }

  public get name(): string {
    return this._name;
  }

  public get program(): string {
    return this._program;
  }

  public addGroup(group: Group): void {
    this._groups.push(group);
  }
}

class Group {
  private _students: Student[] = [];
  private _directionName: string;
  private _levelName: string;

  public get students(): Student[] {
    return this._students;
  }

  public constructor(directionName: string, levelName: string) {
    this._directionName = directionName;
    this._levelName = levelName;
  }

  public addStudent(student: Student): void {
    this._students.push(student);
  }

  public showPerformance(): Student[] {
    const sortedStudents: Student[] = this._students.sort(
      (a: Student, b: Student) =>
        b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

class Student {
  private _grades = new Map<string, number>();
  private _attendance: boolean[] = [];
  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;

  public constructor(firstName: string, lastName: string, birthYear: number) {
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

  public setGrade(subject: string, grade: number): void {
    this._grades.set(subject, grade);
  }

  public markAttendance(present: boolean): void {
    this._attendance.push(present);
  }

  public getPerformanceRating(): number {
    const gradeValues: number[] = Array.from(this._grades.values());

    if (gradeValues.length === 0) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) /
      gradeValues.length;

    const attendancePercentage: number =
      (this._attendance.filter((present: boolean) => present).length /
        this._attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}

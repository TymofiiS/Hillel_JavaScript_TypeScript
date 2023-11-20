import { Status } from "./Status";
import { NoteType } from "./NoteType";
import { INote } from "./INote";

export class Note implements INote {
  protected static currentId = 1;

  getName(): string {
    return this._name;
  }
  setName(name: string): void {
    this._name = name;
    this._editAt = Date.now();
  }
  setDescription(description: string): void {
    this._description = description;
    this._editAt = Date.now();
  }
  getDescription(): string {
    return this._description;
  }
  setStatus(status: Status): void {
    this._status = status;
    this._editAt = Date.now();
  }
  getStatus(): Status {
    return this._status;
  }
  protected _id: number;
  getId(): number {
    return this._id;
  }

  protected _editAt: number;
  getEditAt(): number {
    return this._editAt;
  }

  getNoteType(): NoteType {
    return this._noteType;
  }

  protected _createdAt: number;
  getCreateAt(): number {
    return this._createdAt;
  }

  constructor(
    protected _name: string,
    protected _description: string,
    protected _status: Status = Status.Active,
    protected _noteType: NoteType = NoteType.Default
  ) {
    this._createdAt = Date.now();
    this._editAt = Date.now();
    this._id = Note.currentId++;
  }

  protected setReadOnly(createdDate: number, editDate: number, id: number) {
    this._createdAt = createdDate;
    this._editAt = editDate;
    this._id = id;
  }

  clone(): INote {
    let result = new Note(
      this._name,
      this._description,
      this._status,
      this._noteType
    );

    result.setReadOnly(this._createdAt, this._editAt, this._id);
    return result;
  }
}

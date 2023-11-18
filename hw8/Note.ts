import { Status } from "./Status";
import { NoteType } from "./NoteType";
import { INote } from "./INote";

export class Note implements INote {
  Name(name?: string | undefined): string | void {
    //get
    if (!name) return this._name;
    //set
    this._name = name;
    this._editAt = Date.now();
  }

  Description(description?: string | undefined): string | void {
    //get
    if (!description) return this._description;
    //set
    this._description = description;
    this._editAt = Date.now();
  }

  Status(status?: Status | undefined): void | Status {
    //get
    if (!status) return this._status;
    //set
    this._status = status;
    this._editAt = Date.now();
  }

  protected _editAt: number;
  EditAt(): number {
    //get
    return this._editAt;
  }

  NoteType(): NoteType {
    //get
    return this._noteType;
  }

  protected _createdAt: number;
  CreateAt(): number {
    //get
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
  }
}

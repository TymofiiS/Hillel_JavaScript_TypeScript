import { INote } from "./INote";
import { ITodoListExtended } from "./ITodoListExtended";
import { Status } from "./Status";

export class TodoListExtended implements ITodoListExtended {
  protected _notes: INote[] = [];

  NoteByName(name: string): INote | undefined {
    return this._notes.filter((x) => x.Name() === name)[0];
  }
  NoteByDescription(description: string): INote | undefined {
    return this._notes.filter((x) => x.Description() === description)[0];
  }
  SortNotesByStatus(): INote[] {
    return this._notes.sort((n1, n2) => {
      if (n1.Status() > n2.Status()) {
        return 1;
      }

      if (n1.Status() < n2.Status()) {
        return -1;
      }

      return 0;
    });
  }
  SortNotesByCreateAt(): INote[] {
    return this._notes.sort((n1, n2) => {
      if (n1.CreateAt() > n2.CreateAt()) {
        return 1;
      }

      if (n1.CreateAt() < n2.CreateAt()) {
        return -1;
      }

      return 0;
    });
  }
  Add(note: INote): number {
    return this._notes.push(note);
  }
  Delete(note: INote): void {
    const index = this._notes.indexOf(note, 0);
    if (index == -1) return;

    this._notes.splice(index, 1);
  }
  Update(note: INote): void {
    const index = this._notes.indexOf(note, 0);
    if (index == -1) return;

    this._notes[index] = note;
  }
  Get(index: number): INote {
    return this._notes[index];
  }
  All(): INote[] {
    return this._notes;
  }
  NoteDone(note?: INote): void {
    note?.Status(Status.Done);
  }
  AllNoteCount(): number {
    return this._notes.length;
  }
  ActiveNoteCount(): number {
    return this._notes.filter((x) => x.Status() === Status.Active).length;
  }
}

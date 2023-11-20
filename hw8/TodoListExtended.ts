import { INote } from "./INote";
import { ITodoListExtended } from "./ITodoListExtended";
import { NoteType } from "./NoteType";
import { Status } from "./Status";

export class TodoListExtended implements ITodoListExtended {
  protected _notes: INote[] = [];

  cloneNotes(): INote[] {
    let res: INote[] = [];
    for (let i = 0; i < this._notes.length; i++) {
      let note: INote = this._notes[i] as INote;
      res.push(note.clone());
    }
    return res;
  }

  getNoteByName(name: string): INote | undefined {
    return this.cloneNotes().filter((x) => x.getName() === name)[0];
  }
  getNoteByDescription(description: string): INote | undefined {
    return this.cloneNotes().filter(
      (x) => x.getDescription() === description
    )[0];
  }
  notesSortedByStatus(): INote[] {
    return this.cloneNotes().sort((n1, n2) => {
      if (n1.getStatus() > n2.getStatus()) {
        return 1;
      }

      if (n1.getStatus() < n2.getStatus()) {
        return -1;
      }

      return 0;
    });
  }
  notesSortedByCreateAt(): INote[] {
    return this.cloneNotes().sort((n1, n2) => {
      if (n1.getCreateAt() > n2.getCreateAt()) {
        return 1;
      }

      if (n1.getCreateAt() < n2.getCreateAt()) {
        return -1;
      }

      return 0;
    });
  }
  addNote(note: INote): number {
    return this._notes.push({ ...note });
  }
  getNoteIndex(note: INote): number | undefined {
    const realNode = this.getNoteById(note?.getId());
    if (!realNode) return undefined;

    const index = this._notes.indexOf(note, 0);
    if (index == -1) return undefined;

    return index;
  }
  deleteNote(note: INote): void {
    const index = this.getNoteIndex(note);
    if (index === undefined) return;

    this._notes.splice(index, 1);
  }
  updateNote(note: INote, editConfirmation: boolean = false): void {
    const index = this.getNoteIndex(note);
    if (index === undefined) return;

    if (note.getNoteType() === NoteType.EditConfirmation && !editConfirmation)
      return;

    this._notes[index] = note.clone();
  }
  getNoteById(id: number): INote | undefined {
    return this.cloneNotes().filter((x) => x.getId() === id)[0];
  }
  getAllNotes(): INote[] {
    return this.cloneNotes();
  }
  setNoteDone(note?: INote): void {
    if (!note) return;
    note.setStatus(Status.Done);
    this.updateNote(note);
  }
  getAllNoteCount(): number {
    return this._notes.length;
  }
  getActiveNoteCount(): number {
    return this._notes.filter((x) => x.getStatus() === Status.Active).length;
  }
}

import { INote } from "./INote";
import { ITodoListExtended } from "./ITodoListExtended";
import { NoteType } from "./NoteType";
import { Status } from "./Status";

export class TodoListExtended implements ITodoListExtended {
  protected _notes: INote[] = [];

  cloneNotes(): INote[] {
    return this._notes.map((x) => x.clone());
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
    return this._notes.push(note.clone());
  }
  getNoteIndex(note: INote): number | undefined {
    const realNode = this._notes.filter((x) => x.getId() === note.getId())[0];
    console.log(`getNoteIndex, realNode id: ${realNode?.getId()}`);
    if (!realNode) return undefined;

    const index = this._notes.indexOf(realNode, 0);
    console.log(`getNoteIndex, index: ${index}`);
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
    console.log(`\nupdatNote, index: ${index}, noteName: ${note.getName()}`);
    if (index === undefined) return;

    if (note.getNoteType() === NoteType.EditConfirmation && !editConfirmation) {
      console.log(
        `\nupdatNote, editConfirmation: ${editConfirmation}, noteName: ${note.getName()}`
      );
      return;
    }

    this._notes[index] = note.clone();
  }
  getNoteById(id: number): INote | undefined {
    return this._notes.filter((x) => x.getId() === id)[0]?.clone();
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

/*
У списку нотаток повинні бути методи для додавання нового запису, видалення,
редагування та отримання повної інформації про нотатку за ідентифікатором,
а так само отримання списку всіх нотаток.

Крім цього, у користувача має бути
можливість позначити нотаток, як виконаний, і отримання інформації про те,
скільки всього нотаток у списку і скільки залишилося невиконаними.
*/
import { INote } from "./INote";

export interface ITodoList {
  addNote(note: INote): number;
  deleteNote(note: INote): void;
  updateNote(note: INote): void;
  getNoteById(id: number): INote | undefined;
  getAllNotes(): INote[];

  setNoteDone(note: INote): void;
  getAllNoteCount(): number;
  getActiveNoteCount(): number;
  getNoteIndex(note: INote): number | undefined;
}

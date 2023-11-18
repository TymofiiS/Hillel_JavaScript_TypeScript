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
  Add(note: INote): number;
  Delete(note: INote): void;
  Update(note: INote): void;
  Get(index: number): INote;
  All(): INote[];

  NoteDone(note: INote): void;
  AllNoteCount(): number;
  ActiveNoteCount(): number;
}

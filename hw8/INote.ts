/*
Вам необхідно написати додаток Todo list.
*/
/*
Нотатки не повинні бути порожніми.

Кожний нотаток має назву, зміст, дату створення і редагування та статус.
Нотатки бувають двох типів.
Дефолтні та такі, які вимагають підтвердження при ридагуванні.
*/
import { Status } from "./Status";
import { NoteType } from "./NoteType";

export interface INote {
  getName(): string;
  setName(name: string): void;
  setDescription(description: string): void;
  getDescription(): string;
  setStatus(status: Status): void;
  getStatus(): Status;

  getEditAt(): number;
  getCreateAt(): number;
  getNoteType(): NoteType;
  getId(): number;
  clone(): INote;
}

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
  Name(name?: string): string | void;
  Description(description?: string): string | void;
  Status(status?: Status): Status | void;

  EditAt(): number;
  CreateAt(): number;
  NoteType(): NoteType;
}

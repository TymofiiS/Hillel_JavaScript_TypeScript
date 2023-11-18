/*
Окремо необхідно розширити поведінку списку та додати можливість
пошуку нотатка за ім'ям або змістом.
Також окремо необхідно розширити список можливістю сортування нотаток
за статусом або часом створення.
*/
import { INote } from "./INote";
import { ITodoList } from "./ITodoList";

export interface ITodoListExtended extends ITodoList {
  NoteByName(name: string): INote | undefined;
  NoteByDescription(description: string): INote | undefined;
  SortNotesByStatus(): INote[];
  SortNotesByCreateAt(): INote[];
}

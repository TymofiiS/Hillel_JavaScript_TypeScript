import { INote } from "./INote";
import { ITodoList } from "./ITodoList";
import { ITodoListExtended } from "./ITodoListExtended";
import { Note } from "./Note";
import { NoteType } from "./NoteType";
import { Status } from "./Status";
import { TodoListExtended } from "./TodoListExtended";

let todoList: ITodoListExtended = new TodoListExtended();

todoList.addNote(new Note("name5", "description5"));
todoList.addNote(new Note("name1", "description1"));
todoList.addNote(
  new Note("name7", "description7", Status.Active, NoteType.EditConfirmation)
);

console.log("\nInitial:");
todoList.getAllNotes().forEach((x) => console.log(x));

let tempNote: INote = todoList.getNoteByName("name1") as INote;
tempNote?.setStatus(Status.Done);
todoList.updateNote(tempNote, false);
console.log("\nSet Status Done for name1:", todoList.getNoteByName("name1"));

todoList.setNoteDone(todoList.getNoteByName("name5") as INote);
console.log("\nSet Status Done for name5:", todoList.getNoteByName("name5"));

let note: INote = todoList.getNoteByDescription("description7") as INote;
note?.setDescription("updated description");
todoList.updateNote(note, true);
console.log(
  "\nUpdate description for description7:",
  todoList.getNoteByName("name7")
);

note?.setDescription("updated description againe");
todoList.updateNote(note, false);
console.log(
  "\nUpdate description for description7:",
  todoList.getNoteByName("name7")
);

console.log("\nSorted by Status");
todoList.notesSortedByStatus().forEach((x) => console.log(x));

console.log("\nActive notes count: ", todoList.getActiveNoteCount());

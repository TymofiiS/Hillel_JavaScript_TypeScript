import { Note } from "./Note";
import { Status } from "./Status";
import { TodoListExtended } from "./TodoListExtended";

let todoList = new TodoListExtended();

todoList.addNote(new Note("name5", "description5"));
todoList.addNote(new Note("name1", "description1"));
todoList.addNote(new Note("name7", "description7"));

console.log(JSON.stringify(todoList.getAllNotes()));

todoList.getNoteByName("name1")?.setStatus(Status.Done);
todoList.setNoteDone(todoList.getNoteByName("name5"));

let note = todoList.getNoteByDescription("description7") as Note;
note?.setDescription("updated description");
todoList.updateNote(note);

console.log(JSON.stringify(todoList.notesSortedByStatus()));
console.log(JSON.stringify(todoList.getActiveNoteCount()));

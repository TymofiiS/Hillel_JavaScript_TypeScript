import { Note } from "./Note";
import { Status } from "./Status";
import { TodoListExtended } from "./TodoListExtended";

let todoList = new TodoListExtended();

todoList.Add(new Note("name5", "description5"));
todoList.Add(new Note("name1", "description1"));
todoList.Add(new Note("name7", "description7"));

console.log(JSON.stringify(todoList.All()));

todoList.NoteByName("name1")?.Status(Status.Done);
todoList.NoteDone(todoList.NoteByName("name5"));

let note = todoList.NoteByDescription("description7") as Note;
note?.Description("updated description");
todoList.Update(note);

console.log(JSON.stringify(todoList.SortNotesByStatus()));
console.log(JSON.stringify(todoList.ActiveNoteCount()));

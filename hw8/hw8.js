"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Note_1 = require("./Note");
const TodoListExtended_1 = require("./TodoListExtended");
let todoList = new TodoListExtended_1.TodoListExtended();
todoList.addNote(new Note_1.Note("name5", "description5"));
todoList.addNote(new Note_1.Note("name1", "description1"));
todoList.addNote(new Note_1.Note("name7", "description7"));
console.log(JSON.stringify(todoList.getAllNotes()));
const n = new Note_1.Note("name9", "description9");
console.log(JSON.stringify(n.clone()));
//console.log(todoList.getNotes().filter((x) => x.getName() === "name5")[0]);
/*
todoList.getNoteByName("name1")?.setStatus(Status.Done);
todoList.setNoteDone(todoList.getNoteByName("name5"));

let note = todoList.getNoteByDescription("description7") as Note;
note?.setDescription("updated description");
todoList.updateNote(note);

console.log(JSON.stringify(todoList.notesSortedByStatus()));
console.log(JSON.stringify(todoList.getActiveNoteCount()));
*/

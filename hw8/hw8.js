"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const Note_1 = require("./Note");
const Status_1 = require("./Status");
const TodoListExtended_1 = require("./TodoListExtended");
let todoList = new TodoListExtended_1.TodoListExtended();
todoList.Add(new Note_1.Note("name5", "description5"));
todoList.Add(new Note_1.Note("name1", "description1"));
todoList.Add(new Note_1.Note("name7", "description7"));
console.log(JSON.stringify(todoList.All()));
(_a = todoList.NoteByName("name1")) === null || _a === void 0 ? void 0 : _a.Status(Status_1.Status.Done);
todoList.NoteDone(todoList.NoteByName("name5"));
let note = todoList.NoteByDescription("description7");
note.Description("updated description");
todoList.Update(note);
console.log(JSON.stringify(todoList.SortNotesByStatus()));
console.log(JSON.stringify(todoList.ActiveNoteCount()));

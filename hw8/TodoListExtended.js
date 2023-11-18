"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListExtended = void 0;
const Status_1 = require("./Status");
class TodoListExtended {
    constructor() {
        this._notes = [];
    }
    NoteByName(name) {
        return this._notes.filter((x) => x.Name() === name)[0];
    }
    NoteByDescription(description) {
        return this._notes.filter((x) => x.Description() === description)[0];
    }
    SortNotesByStatus() {
        return this._notes.sort((n1, n2) => {
            if (n1.Status() > n2.Status()) {
                return 1;
            }
            if (n1.Status() < n2.Status()) {
                return -1;
            }
            return 0;
        });
    }
    SortNotesByCreateAt() {
        return this._notes.sort((n1, n2) => {
            if (n1.CreateAt() > n2.CreateAt()) {
                return 1;
            }
            if (n1.CreateAt() < n2.CreateAt()) {
                return -1;
            }
            return 0;
        });
    }
    Add(note) {
        return this._notes.push(note);
    }
    Delete(note) {
        const index = this._notes.indexOf(note, 0);
        if (index == -1)
            return;
        this._notes.splice(index, 1);
    }
    Update(note) {
        const index = this._notes.indexOf(note, 0);
        if (index == -1)
            return;
        this._notes[index] = note;
    }
    Get(index) {
        return this._notes[index];
    }
    All() {
        return this._notes;
    }
    NoteDone(note) {
        note === null || note === void 0 ? void 0 : note.Status(Status_1.Status.Done);
    }
    AllNoteCount() {
        return this._notes.length;
    }
    ActiveNoteCount() {
        return this._notes.filter((x) => x.Status() === Status_1.Status.Active).length;
    }
}
exports.TodoListExtended = TodoListExtended;

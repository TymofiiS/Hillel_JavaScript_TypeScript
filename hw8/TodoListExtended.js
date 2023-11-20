"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListExtended = void 0;
const NoteType_1 = require("./NoteType");
const Status_1 = require("./Status");
class TodoListExtended {
    constructor() {
        this._notes = [];
    }
    cloneNotes() {
        let res = [];
        for (let i = 0; i < this._notes.length; i++) {
            let note = this._notes[i];
            res.push(note.clone());
        }
        return res;
    }
    getNoteByName(name) {
        return this.cloneNotes().filter((x) => x.getName() === name)[0];
    }
    getNoteByDescription(description) {
        return this.cloneNotes().filter((x) => x.getDescription() === description)[0];
    }
    notesSortedByStatus() {
        return this.cloneNotes().sort((n1, n2) => {
            if (n1.getStatus() > n2.getStatus()) {
                return 1;
            }
            if (n1.getStatus() < n2.getStatus()) {
                return -1;
            }
            return 0;
        });
    }
    notesSortedByCreateAt() {
        return this.cloneNotes().sort((n1, n2) => {
            if (n1.getCreateAt() > n2.getCreateAt()) {
                return 1;
            }
            if (n1.getCreateAt() < n2.getCreateAt()) {
                return -1;
            }
            return 0;
        });
    }
    addNote(note) {
        return this._notes.push(Object.assign({}, note));
    }
    getNoteIndex(note) {
        const realNode = this.getNoteById(note === null || note === void 0 ? void 0 : note.getId());
        if (!realNode)
            return undefined;
        const index = this._notes.indexOf(note, 0);
        if (index == -1)
            return undefined;
        return index;
    }
    deleteNote(note) {
        const index = this.getNoteIndex(note);
        if (index === undefined)
            return;
        this._notes.splice(index, 1);
    }
    updateNote(note, editConfirmation = false) {
        const index = this.getNoteIndex(note);
        if (index === undefined)
            return;
        if (note.getNoteType() === NoteType_1.NoteType.EditConfirmation && !editConfirmation)
            return;
        this._notes[index] = note.clone();
    }
    getNoteById(id) {
        return this.cloneNotes().filter((x) => x.getId() === id)[0];
    }
    getAllNotes() {
        return this.cloneNotes();
    }
    setNoteDone(note) {
        if (!note)
            return;
        note.setStatus(Status_1.Status.Done);
        this.updateNote(note);
    }
    getAllNoteCount() {
        return this._notes.length;
    }
    getActiveNoteCount() {
        return this._notes.filter((x) => x.getStatus() === Status_1.Status.Active).length;
    }
}
exports.TodoListExtended = TodoListExtended;

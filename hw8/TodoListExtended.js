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
        return this._notes.map((x) => x.clone());
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
        return this._notes.push(note.clone());
    }
    getNoteIndex(note) {
        const realNode = this._notes.filter((x) => x.getId() === note.getId())[0];
        console.log(`getNoteIndex, realNode id: ${realNode === null || realNode === void 0 ? void 0 : realNode.getId()}`);
        if (!realNode)
            return undefined;
        const index = this._notes.indexOf(realNode, 0);
        console.log(`getNoteIndex, index: ${index}`);
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
        console.log(`\nupdatNote, index: ${index}, noteName: ${note.getName()}`);
        if (index === undefined)
            return;
        if (note.getNoteType() === NoteType_1.NoteType.EditConfirmation && !editConfirmation) {
            console.log(`\nupdatNote, editConfirmation: ${editConfirmation}, noteName: ${note.getName()}`);
            return;
        }
        this._notes[index] = note.clone();
    }
    getNoteById(id) {
        var _a;
        return (_a = this._notes.filter((x) => x.getId() === id)[0]) === null || _a === void 0 ? void 0 : _a.clone();
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
